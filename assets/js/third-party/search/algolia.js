/* Algolia search engine */
NexT.plugins.search.algolia = function() {

  const algoliajs = NexT.utils.getCDNResource(NexT.CONFIG.algolia.js);
  const instantschjs = NexT.utils.getCDNResource(NexT.CONFIG.algolia.instantjs);

  NexT.utils.getScript(algoliajs);
  NexT.utils.getScript(instantschjs, function() {
    
    const { indexname, appid, apikey, hits } = NexT.CONFIG.algolia.cfg;
    const indexName = indexname;

    const search = instantsearch({
      indexName,
      searchClient: algoliasearch(appid, apikey),
      searchFunction: helper => {
        if (document.querySelector('.search-input').value) {
          helper.search();
        }
      }
    });

    const markKeyWords = function(content) {
      return content.replaceAll("<mark>", '<mark class="search-keyword">');
    };

    if (typeof pjax === 'object') {
      search.on('render', () => {
        pjax.refresh(document.querySelector('.algolia-hits'));
      });
    }

    // Registering Widgets
    search.addWidgets([
      instantsearch.widgets.configure({
        hitsPerPage: hits.perpage || 10
      }),

      instantsearch.widgets.searchBox({
        container: '.search-input-container',
        placeholder: NexT.CONFIG.i18n.placeholder,
        // Hide default icons of algolia search
        showReset: false,
        showSubmit: false,
        showLoadingIndicator: true,
        cssClasses: {
          input: 'search-input'
        }
      }),

      instantsearch.widgets.stats({
        container: '.algolia-stats',
        templates: {
          text: data => {
            const stats = NexT.CONFIG.i18n.hits_time
              .replace('${hits}', data.nbHits)
              .replace('${time}', data.processingTimeMS);
            return `${stats}`;
          }
        },
        cssClasses: {
          text: 'search-stats'
        }
      }),

      instantsearch.widgets.hits({
        container: '.algolia-hits',
        escapeHTML: true,
        templates: {
          item: data => {
            const { title, content } = data._highlightResult;
            let result = `<a href="${data.permalink}" class="search-result-title">${markKeyWords(title.value)}</a>`;
            //const content = excerpt || excerptStrip || content;
            if (content && content.value) {
              const div = document.createElement('div');
              div.innerHTML = markKeyWords(content.value);
              result += `<a href="${data.permalink}"><p class="search-result">${div.innerHTML.substring(0, 200)}...</p></a>`;
            }
            return result;
          },
          empty: data => {
            return `<div class="algolia-hits-empty">
              ${NexT.CONFIG.i18n.empty.replace('${query}', data.query)}
            </div>`;
          }
        },
        cssClasses: {
          list: 'search-result-list'
        }
      }),

      instantsearch.widgets.pagination({
        container: '.algolia-pagination',
        scrollTo: false,
        showFirst: true,
        showLast: true,
        templates: {
          first: '<i class="fa fa-angle-double-left"></i>',
          last: '<i class="fa fa-angle-double-right"></i>',
          previous: '<i class="fa fa-angle-left"></i>',
          next: '<i class="fa fa-angle-right"></i>'
        },
        cssClasses: {
          list: ['pagination', 'algolia-pagination'],
          item: 'pagination-item',
          link: 'page-number',
          selectedItem: 'current',
          disabledItem: 'disabled-item'
        }
      })
    ]);

    search.start();

    // Handle and trigger popup window
    document.querySelectorAll('.popup-trigger').forEach(element => {
      element.addEventListener('click', () => {
        document.body.classList.add('search-active');
        setTimeout(() => document.querySelector('.search-input').focus(), 500);
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
    document.addEventListener('pjax:success', onPopupClose);
    window.addEventListener('keyup', event => {
      if (event.key === 'Escape') {
        onPopupClose();
      }
    });
  });

}