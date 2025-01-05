/* LocalSearch engine */
class LocalSearch {
  constructor({
    path = '',
    unescape = false,
    top_n_per_article = 1
  }) {
    this.path = path;
    this.unescape = unescape;
    this.top_n_per_article = top_n_per_article;
    this.isfetched = false;
    this.datas = null;
  }

  getIndexByWord(words, text, caseSensitive = false) {
    const index = [];
    const included = new Set();

    if (!caseSensitive) {
      text = text.toLowerCase();
    }
    words.forEach(word => {
      if (this.unescape) {
        const div = document.createElement('div');
        div.innerText = word;
        word = div.innerHTML;
      }
      const wordLen = word.length;
      if (wordLen === 0) return;
      let startPosition = 0;
      let position = -1;
      if (!caseSensitive) {
        word = word.toLowerCase();
      }
      while ((position = text.indexOf(word, startPosition)) > -1) {
        index.push({ position, word });
        included.add(word);
        startPosition = position + wordLen;
      }
    });
    // Sort index by position of keyword
    index.sort((left, right) => {
      if (left.position !== right.position) {
        return left.position - right.position;
      }
      return right.word.length - left.word.length;
    });
    return [index, included];
  }

  // Merge hits into slices
  mergeIntoSlice(start, end, index) {
    let item = index[0];
    let { position, word } = item;
    const hits = [];
    const count = new Set();
    while (position + word.length <= end && index.length !== 0) {
      count.add(word);
      hits.push({
        position,
        length: word.length
      });
      const wordEnd = position + word.length;

      // Move to next position of hit
      index.shift();
      while (index.length !== 0) {
        item = index[0];
        position = item.position;
        word = item.word;
        if (wordEnd > position) {
          index.shift();
        } else {
          break;
        }
      }
    }
    return {
      hits,
      start,
      end,
      count: count.size
    };
  }

  // Highlight title and content
  highlightKeyword(val, slice) {
    let result = '';
    let index = slice.start;
    for (const { position, length } of slice.hits) {
      result += val.substring(index, position);
      index = position + length;
      result += `<mark class="search-keyword">${val.substr(position, length)}</mark>`;
    }
    result += val.substring(index, slice.end);
    return result;
  }

  getResultItems(keywords) {
    const resultItems = [];
    this.datas.forEach(({ title, content, url }) => {
      // The number of different keywords included in the article.
      const [indexOfTitle, keysOfTitle] = this.getIndexByWord(keywords, title);
      const [indexOfContent, keysOfContent] = this.getIndexByWord(keywords, content);
      const includedCount = new Set([...keysOfTitle, ...keysOfContent]).size;

      // Show search results
      const hitCount = indexOfTitle.length + indexOfContent.length;
      if (hitCount === 0) return;

      const slicesOfTitle = [];
      if (indexOfTitle.length !== 0) {
        slicesOfTitle.push(this.mergeIntoSlice(0, title.length, indexOfTitle));
      }

      let slicesOfContent = [];
      while (indexOfContent.length !== 0) {
        const item = indexOfContent[0];
        const { position } = item;
        // Cut out 100 characters. The maxlength of .search-input is 80.
        const start = Math.max(0, position - 20);
        const end = Math.min(content.length, position + 80);
        slicesOfContent.push(this.mergeIntoSlice(start, end, indexOfContent));
      }

      // Sort slices in content by included keywords' count and hits' count
      slicesOfContent.sort((left, right) => {
        if (left.count !== right.count) {
          return right.count - left.count;
        } else if (left.hits.length !== right.hits.length) {
          return right.hits.length - left.hits.length;
        }
        return left.start - right.start;
      });

      // Select top N slices in content
      const upperBound = parseInt(this.top_n_per_article, 10);
      if (upperBound >= 0) {
        slicesOfContent = slicesOfContent.slice(0, upperBound);
      }

      let resultItem = '';

      url = new URL(url, location.origin);
      url.searchParams.append('highlight', keywords.join(' '));

      if (slicesOfTitle.length !== 0) {
        resultItem += `<li><a href="${url.href}" class="search-result-title">${this.highlightKeyword(title, slicesOfTitle[0])}</a>`;
      } else {
        resultItem += `<li><a href="${url.href}" class="search-result-title">${title}</a>`;
      }

      slicesOfContent.forEach(slice => {
        resultItem += `<a href="${url.href}"><p class="search-result">${this.highlightKeyword(content, slice)}...</p></a>`;
      });

      resultItem += '</li>';
      resultItems.push({
        item: resultItem,
        id  : resultItems.length,
        hitCount,
        includedCount
      });
    });
    return resultItems;
  }

  fetchData() {
    const isXml = !this.path.endsWith('json');
    fetch(this.path)
      .then(response => response.text())
      .then(res => {
        // Get the contents from search data
        this.isfetched = true;
        this.datas = isXml ? [...new DOMParser().parseFromString(res, 'text/xml').querySelectorAll('entry')].map(element => ({
          title  : element.querySelector('title').textContent,
          content: element.querySelector('content').textContent,
          url    : element.querySelector('url').textContent
        })) : JSON.parse(res);
        // Only match articles with non-empty titles
        this.datas = this.datas.filter(data => data.title).map(data => {
          data.title = data.title.trim();
          data.content = data.content ? data.content.trim().replace(/<[^>]+>/g, '') : '';
          data.url = decodeURIComponent(data.url).replace(/\/{2,}/g, '/');
          return data;
        });
        // Remove loading animation
        window.dispatchEvent(new Event('search:loaded'));
      });
  }

  // Highlight by wrapping node in mark elements with the given class name
  highlightText(node, slice, className) {
    const val = node.nodeValue;
    let index = slice.start;
    const children = [];
    for (const { position, length } of slice.hits) {
      const text = document.createTextNode(val.substring(index, position));
      index = position + length;
      const mark = document.createElement('mark');
      mark.className = className;
      mark.appendChild(document.createTextNode(val.substr(position, length)));
      children.push(text, mark);
    }
    node.nodeValue = val.substring(index, slice.end);
    children.forEach(element => {
      node.parentNode.insertBefore(element, node);
    });
  }

  // Highlight the search words provided in the url in the text
  highlightSearchWords(body) {
    const params = new URL(location.href).searchParams.get('highlight');
    const keywords = params ? params.split(' ') : [];
    if (!keywords.length || !body) return;
    const walk = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, null);
    const allNodes = [];
    while (walk.nextNode()) {
      if (!walk.currentNode.parentNode.matches('button, select, textarea')) allNodes.push(walk.currentNode);
    }
    allNodes.forEach(node => {
      const [indexOfNode] = this.getIndexByWord(keywords, node.nodeValue);
      if (!indexOfNode.length) return;
      const slice = this.mergeIntoSlice(0, node.nodeValue.length, indexOfNode);
      this.highlightText(node, slice, 'search-keyword');
    });
  }
}

NexT.plugins.search.localsearch = function() {
  if (! NexT.CONFIG.localSearch.path) {
    // Search DB path
    console.warn('`search indexes file` is not configurate!');
    return;
  }
  const localSearch = new LocalSearch({
    path             : NexT.CONFIG.localSearch.path,
    top_n_per_article: NexT.CONFIG.localSearch.topnperarticle,
    unescape         : NexT.CONFIG.localSearch.unescape
  });

  const input = document.querySelector('.search-input');

  const inputEventFunction = () => {
    if (!localSearch.isfetched) return;
    const searchText = input.value.trim().toLowerCase();
    const keywords = searchText.split(/[-\s]+/);
    const container = document.querySelector('.search-result-container');
    let resultItems = [];
    if (searchText.length > 0) {
      // Perform local searching
      resultItems = localSearch.getResultItems(keywords);
    }
    if (keywords.length === 1 && keywords[0] === '') {
      container.classList.add('no-result');
      container.innerHTML = '<div class="search-result-icon"><i class="fa fa-search fa-5x"></i></div>';
    } else if (resultItems.length === 0) {
      container.classList.add('no-result');
      container.innerHTML = '<div class="search-result-icon"><i class="far fa-frown fa-5x"></i></div>';
    } else {
      resultItems.sort((left, right) => {
        if (left.includedCount !== right.includedCount) {
          return right.includedCount - left.includedCount;
        } else if (left.hitCount !== right.hitCount) {
          return right.hitCount - left.hitCount;
        }
        return right.id - left.id;
      });
      const stats = NexT.CONFIG.i18n.hits.replace('${hits}', resultItems.length);

      container.classList.remove('no-result');
      container.innerHTML = `<div class="search-stats">${stats}</div>
        <hr>
        <ul class="search-result-list">${resultItems.map(result => result.item).join('')}</ul>`;
      if (typeof pjax === 'object') pjax.refresh(container);
    }
  };

  localSearch.highlightSearchWords(document.querySelector('.post-body'));
  if (NexT.CONFIG.localSearch.preload) {
    localSearch.fetchData();
  }

  if (NexT.CONFIG.localSearch.trigger === 'auto') {
    input.addEventListener('input', inputEventFunction);
  } else {
    document.querySelector('.search-icon').addEventListener('click', inputEventFunction);
    input.addEventListener('keypress', event => {
      if (event.key === 'Enter') {
        inputEventFunction();
      }
    });
  }
  window.addEventListener('search:loaded', inputEventFunction);

  // Handle and trigger popup window
  document.querySelectorAll('.popup-trigger').forEach(element => {
    element.addEventListener('click', () => {
      document.body.classList.add('search-active');
      // Wait for search-popup animation to complete
      setTimeout(() => input.focus(), 500);
      if (!localSearch.isfetched) localSearch.fetchData();
    });
  });

  // Monitor main search box
  const onPopupClose = () => {
    document.body.classList.remove('search-active');
  };

  document.querySelector('.search-pop-overlay').addEventListener('click', event => {
    if (event.target === document.querySelector('.search-pop-overlay')) {
      onPopupClose();
    }
  });
  document.querySelector('.popup-btn-close').addEventListener('click', onPopupClose);
  document.addEventListener('pjax:success', () => {
    localSearch.highlightSearchWords(document.querySelector('.post-body'));
    onPopupClose();
  });
  window.addEventListener('keyup', event => {
    if (event.key === 'Escape') {
      onPopupClose();
    }
  });
}
