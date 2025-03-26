/* util tools */

HTMLElement.prototype.wrap = function (wrapper) {
  this.parentNode.insertBefore(wrapper, this);
  this.parentNode.removeChild(this);
  wrapper.appendChild(this);
};

NexT.utils = {
  registerAPlayer: function () {
    this.getStyle(
      NexT.utils.getCDNResource(NexT.CONFIG.page.music.css)
    );
    
    NexT.CONFIG.page.music.js.forEach(function(js) {
      NexT.utils.getScript(NexT.utils.getCDNResource(js), true);
    });
    
  },
  calPostExpiredDate: function() {
    const postMetaDom = document.querySelector('.post-meta-container');
    let postTime = postMetaDom.querySelector('time[itemprop="dateCreated datePublished"]').getAttribute("datetime");
    let postLastmodTime = postMetaDom.querySelector('time[itemprop="dateModified dateLastmod"]');

    if (postLastmodTime != null) postTime = postLastmodTime.getAttribute("datetime");

    let expiredTip = '';
    const expireCfg = NexT.CONFIG.page.expiredTips;
    let expiredTime = this.diffDate(postTime, 2);

    if (expiredTime.indexOf(NexT.CONFIG.i18n.ds_years) > -1) {
      expiredTip = expireCfg.warn.split('#');
    } else {
      let days = parseInt(expiredTime.replace(NexT.CONFIG.i18n.ds_days, '').trim(), 10);
      if (days < 180)  return; 
      expiredTip = expireCfg.info.split('#');
    }

    let expiredTipPre = expiredTip[0];
    let expiredTipSuf = expiredTip[1];
    expiredTip = expiredTipPre + '<span class="post-expired-times">' + expiredTime + '</span>' + expiredTipSuf;
    document.getElementById('post-expired-content').innerHTML = expiredTip;
    this.domAddClass('#post-expired-tip', 'show');
  },
  registerMenuClick: function () {
    const pMenus = document.querySelectorAll('.main-menu > li > a.menus-parent');
    pMenus.forEach(function (item) {
      const icon = item.querySelector('span > i');
      var ul = item.nextElementSibling;

      item.addEventListener('click', function (e) {
        e.preventDefault();

        ul.classList.toggle('expand');
        if (ul.classList.contains('expand')) {
          icon.className = 'fa fa-angle-down';
        } else {
          icon.className = 'fa fa-angle-right';
        }
      });

      var cCls = ul.querySelectorAll('.menu-item-active');
      if (cCls != null && cCls.length > 0) {
        item.click();
      }
    });
  },
  registerImageLoadEvent: function () {
    const images = document.querySelectorAll('.sidebar img, .post-block img, .vendors-list img');

    const callback = (entries) => {
      entries.forEach(item => {
        if (item.intersectionRatio > 0) {
          let ele = item.target;
          let imgSrc = ele.getAttribute('data-src');
          if (imgSrc) {
            let img = new Image();
            img.addEventListener('load', function () {
              ele.src = imgSrc;
            }, false);
            ele.src = imgSrc;
            // Prevent load image again
            ele.removeAttribute('data-src');
          }
        }
      })
    };

    const observer = new IntersectionObserver(callback);
    images.forEach(img => {
      observer.observe(img);
    });
  },

  registerImageViewer: function () {
    const post_body = document.querySelector('.post-body');
    if (post_body) {
      new Viewer(post_body, { navbar: 2, toolbar: 2 });
    }
  },

  registerToolButtons: function () {
    const buttons = document.querySelector('.tool-buttons');

    const scrollbar_buttons = buttons.querySelectorAll('div:not(#toggle-theme)');
    scrollbar_buttons.forEach(button => {
      let targetId = button.id;
      if (targetId != '') {
        targetId = targetId.substring(5);
      }
      button.addEventListener('click', () => {
        this.slidScrollBarAnime(targetId);
      });
    });

    buttons.querySelector('div#toggle-theme').addEventListener('click', () => {
      const cur_theme = document.documentElement.getAttribute('data-theme');
      window.theme.toggle(cur_theme === 'dark' ? 'light' : 'dark');
    });
  },

  slidScrollBarAnime: function (targetId, easing = 'linear', duration = 500) {
    const targetObj = document.getElementById(targetId);

    window.anime({
      targets: document.scrollingElement,
      duration: duration,
      easing: easing,
      scrollTop: targetId == '' || !targetObj ? 0 : targetObj.getBoundingClientRect().top + window.scrollY
    });
  },

  domAddClass: function (selector, cls) {
    const doms = document.querySelectorAll(selector);
    if (doms) {
      doms.forEach(dom => {
        dom.classList.add(cls);
      });
    }
  },

  fmtSiteInfo: function () {
    const runtimeCount = document.getElementById('runTimes');
    if (runtimeCount) {
      const publishDate = runtimeCount.getAttribute('data-publishDate');
      const runTimes = this.diffDate(publishDate, 2);
      runtimeCount.innerText = runTimes;
    }

    const wordsCount = document.getElementById('wordsCount');
    if (wordsCount) {
      const words = wordsCount.getAttribute('data-count');
      wordsCount.innerText = this.numberFormat(words);
    }

    const readTimes = document.getElementById('readTimes');
    if (readTimes) {
      const times = readTimes.getAttribute('data-times');

      const hour = 60;
      const day = hour * 24;

      const daysCount = parseInt(times / day);
      const hoursCount = parseInt(times / hour);

      let timesLabel;
      if (daysCount >= 1) {
        timesLabel = daysCount + NexT.CONFIG.i18n.ds_days + parseInt((times - daysCount * day) / hour) + NexT.CONFIG.i18n.ds_hours;
      } else if (hoursCount >= 1) {
        timesLabel = hoursCount + NexT.CONFIG.i18n.ds_hours + (times - hoursCount * hour) + NexT.CONFIG.i18n.ds_mins;
      } else {
        timesLabel = times + NexT.CONFIG.i18n.ds_mins;
      }

      readTimes.innerText = timesLabel;
    }

    const lastPushDate = document.getElementById('last-push-date');
    if (lastPushDate) {
      const pushDateVal = this.diffDate(lastPushDate.getAttribute('data-lastPushDate'), 1);
      lastPushDate.innerText = pushDateVal;
    }
  },

  fmtLaWidget: function () {
    setTimeout(function () {
      const laWidget = document.querySelectorAll('#la-siteinfo-widget span');
      if (laWidget.length > 0) {
        const valIds = [0, 2, 4, 6];
        const domIds = ['today_site_pv', 'yesterday_site_pv', 'month_site_pv', 'total_site_pv']
        for (let i in valIds) {
          let pv = NexT.utils.numberFormat(laWidget[valIds[i]].innerText);
          document.getElementById(domIds[i]).innerText = pv;
        }
      }
    }, 800);
  },

  fmtBusuanzi: function () {
    setTimeout(function () {
      const bszUV = document.getElementById('busuanzi_value_site_uv');
      if (bszUV) {
        bszUV.innerText = NexT.utils.numberFormat(bszUV.innerText);
      }
      const bszPV = document.getElementById('busuanzi_value_site_pv');
      if (bszPV) {
        bszPV.innerText = NexT.utils.numberFormat(bszPV.innerText);
      }
    }, 800);
  },

  numberFormat: function (number) {
    let result;
    if (number.indexOf(',') > 0) {
      number = number.replaceAll(",", "");
    }

    if (number > 10000) {
      result = (number / 10000.0).toFixed(2) + ' w';
    } else if (number > 1000) {
      result = (number / 1000.0).toFixed(2) + ' k';
    } else {
      result = number;
    }
    return result;
  },

  diffDate: function (date, mode = 0) {
    const dateNow = new Date();
    const datePost = new Date(date);
    const dateDiff = dateNow.getTime() - datePost.getTime();
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = month * 12;

    let result;
    if (mode == 1) {
      const monthCount = dateDiff / month;
      const dayCount = dateDiff / day;
      const hourCount = dateDiff / hour;
      const minuteCount = dateDiff / minute;

      if (monthCount > 12) {
        result = datePost.toLocaleDateString().replace(/\//g, '-');
      } else if (monthCount >= 1) {
        result = parseInt(monthCount) + NexT.CONFIG.i18n.ds_month;
      } else if (dayCount >= 1) {
        result = parseInt(dayCount) + NexT.CONFIG.i18n.ds_day;
      } else if (hourCount >= 1) {
        result = parseInt(hourCount) + NexT.CONFIG.i18n.ds_hour;
      } else if (minuteCount >= 1) {
        result = parseInt(minuteCount) + NexT.CONFIG.i18n.ds_min;
      } else {
        result = NexT.CONFIG.i18n.ds_just;
      }
    } else if (mode == 2) {
      const yearCount = parseInt(dateDiff / year);
      if (yearCount >= 1) {
        const dayCount = parseInt((dateDiff - (yearCount * year)) / day);
        result = yearCount + NexT.CONFIG.i18n.ds_years + dayCount + NexT.CONFIG.i18n.ds_days;
      } else {
        const dayCount = parseInt(dateDiff / day);
        result = dayCount + NexT.CONFIG.i18n.ds_days;
      }
    } else {
      result = parseInt(dateDiff / day);
    }

    return result;
  },

  checkDOMExist: function (selector) {
    return document.querySelector(selector) != null;
  },

  getCDNResource: function (res) {

    let router = NexT.CONFIG.vendor.router;
    let { name, version, file, alias, alias_name } = res;

    let res_src = '';

    switch (router.type) {
      case "modern":
        if (alias_name) name = alias_name;
        let alias_file = file.replace(/^(dist|lib|source|\/js|)\/(browser\/|)/, '');
        if (alias_file.indexOf('min') == -1) {
          alias_file = alias_file.replace(/\.js$/, '.min.js');
        }
        res_src = `${router.url}/${name}/${version}/${alias_file}`;
        break;
      default:
        if (alias) name = alias;
        res_src = `${router.url}/${name}@${version}/${file}`;
        break;
    }

    return res_src;
  },

  wrapTableWithBox: function () {
    document.querySelectorAll('table').forEach(element => {
      const box = document.createElement('div');
      box.className = 'table-container';
      element.wrap(box);
    });
  },

  registerVideoIframe: function () {
    document.querySelectorAll('iframe').forEach(element => {
      const supported = [
        'www.youtube.com',
        'player.vimeo.com',
        'player.youku.com',
        'player.bilibili.com',
        'www.tudou.com'
      ].some(host => element.src.includes(host));
      if (supported && !element.parentNode.matches('.video-container')) {
        const box = document.createElement('div');
        box.className = 'video-container';
        element.wrap(box);
        const width = Number(element.width);
        const height = Number(element.height);
        if (width && height) {
          box.style.paddingTop = (height / width * 100) + '%';
        }
      }
    });
  },

  registerScrollPercent: function () {
    const backToTop = document.querySelector('.back-to-top');
    const readingProgressBar = document.querySelector('.reading-progress-bar');
    // For init back to top in sidebar if page was scrolled after page refresh.
    window.addEventListener('scroll', () => {
      if (backToTop || readingProgressBar) {
        const contentHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = contentHeight > 0 ? Math.min(100 * window.scrollY / contentHeight, 100) : 0;
        if (backToTop) {
          const scrollPercentRound = Math.round(scrollPercent)
          const isShow = scrollPercentRound >= 5;
          backToTop.classList.toggle('back-to-top-on', isShow);
          backToTop.querySelector('span').innerText = scrollPercentRound + '%';
        }
        if (readingProgressBar) {
          readingProgressBar.style.setProperty('--progress', scrollPercent.toFixed(2) + '%');
        }
      }
      if (!Array.isArray(NexT.utils.sections)) return;
      let index = NexT.utils.sections.findIndex(element => {
        return element && element.getBoundingClientRect().top > 10;
      });
      if (index === -1) {
        index = NexT.utils.sections.length - 1;
      } else if (index > 0) {
        index--;
      }
      this.activateNavByIndex(index);
    }, { passive: true });
  },

  /**
   * Tabs tag listener (without twitter bootstrap).
   */
  registerTabsTag: function () {
    // Binding `nav-tabs` & `tab-content` by real time permalink changing.
    document.querySelectorAll('.tabs ul.nav-tabs .tab').forEach(element => {
      element.addEventListener('click', event => {
        event.preventDefault();
        // Prevent selected tab to select again.
        if (element.classList.contains('active')) return;
        const nav = element.parentNode;
        // Add & Remove active class on `nav-tabs` & `tab-content`.
        [...nav.children].forEach(target => {
          target.classList.toggle('active', target === element);
        });
        // https://stackoverflow.com/questions/20306204/using-queryselector-with-ids-that-are-numbers
        const tActive = document.getElementById(element.querySelector('a').getAttribute('href').replace('#', ''));
        [...tActive.parentNode.children].forEach(target => {
          // Array.prototype.slice.call(tActive.parentNode.children).forEach(target => {
          target.classList.toggle('active', target === tActive);
        });
        // Trigger event
        tActive.dispatchEvent(new Event('tabs:click', {
          bubbles: true
        }));
        if (!NexT.CONFIG.stickytabs) return;
        const offset = nav.parentNode.getBoundingClientRect().top + window.scrollY + 10;
        window.anime({
          targets: document.scrollingElement,
          duration: 500,
          easing: 'linear',
          scrollTop: offset
        });
      });
    });

    window.dispatchEvent(new Event('tabs:register'));
  },

  registerCanIUseTag: function () {
    // Get responsive height passed from iframe.
    window.addEventListener('message', ({ data }) => {
      if (typeof data === 'string' && data.includes('ciu_embed')) {
        const featureID = data.split(':')[1];
        const height = data.split(':')[2];
        document.querySelector(`iframe[data-feature=${featureID}]`).style.height = parseInt(height, 10) + 5 + 'px';
      }
    }, false);
  },

  /*registerActiveMenuItem: function() {
    document.querySelectorAll('.menu-item a[href]').forEach(target => {
      const isSamePath = target.pathname === location.pathname || target.pathname === location.pathname.replace('index.html', '');
      const isSubPath = !NexT.CONFIG.root.startsWith(target.pathname) && location.pathname.startsWith(target.pathname);
      target.classList.toggle('menu-item-active', target.hostname === location.hostname && (isSamePath || isSubPath));
    });
  },*/
	
  registerLangSelect: function() {
    let selects = document.getElementById('lang-select');
    if (!selects) return;

    let selected = selects.querySelector('#lang-selected');
    let selectedVal = selected.querySelectorAll('span');
    let flagIcon = selectedVal[0];
    let langName = selectedVal[1];
    let selectIcon = selected.querySelector('i');
   

    let options = selects.querySelectorAll('#lang-options>div');
    let optionsDom = options[0].parentNode;
    options.forEach(option => {
      option.addEventListener('click', () => {
        let langCode = option.getAttribute('lang-code');
        flagIcon.className = 'flag-icon flag-icon-'+langCode;
        langName.innerHTML = option.getAttribute('lang-name');
        selectIcon.className = 'fa fa-chevron-down';
        optionsDom.style.opacity = '0';
        optionsDom.style.transform = 'translateY(-10px)';

        let url = option.getAttribute('lang-url');
        
        setTimeout(() => {
          optionsDom.style.display = 'none';
          window.location.href = url;
        }, 300);
      });
    }); 

    selected.addEventListener('mouseenter', function() {
      selectIcon.className = 'fa fa-chevron-up';
      optionsDom.style.display = 'block';
      optionsDom.style.opacity = '1';
      optionsDom.style.transform = 'translateY(0)';
      
    });

    optionsDom.addEventListener('mouseleave', function() {
      selectIcon.className = 'fa fa-chevron-down';
      optionsDom.style.opacity = '0';
      optionsDom.style.transform = 'translateY(-10px)';
      
      setTimeout(() => {
        optionsDom.style.display = 'none';
      }, 300);
    });
    
  },

  registerSidebarTOC: function () {
    const toc = document.getElementById('TableOfContents');
    if (!toc.hasChildNodes()) {
      const tocActive = document.querySelector('.sidebar-inner');
      tocActive.classList.remove('sidebar-nav-active', 'sidebar-toc-active');
      tocActive.classList.add('sidebar-overview-active');
    }
    this.sections = [...document.querySelectorAll('.post-toc li a')].map(element => {
      const target = document.getElementById(decodeURI(element.getAttribute('href')).replace('#', ''));
      // TOC item animation navigate.
      element.addEventListener('click', event => {
        event.preventDefault();
        const offset = target.getBoundingClientRect().top + window.scrollY;
        window.anime({
          targets: document.scrollingElement,
          duration: 500,
          easing: 'linear',
          scrollTop: offset,
          complete: () => {
            history.pushState(null, document.title, element.href);
          }
        });
      });
      return target;
    });
  },

  registerPostReward: function () {
    const button = document.querySelector('.reward-container button');
    if (!button) return;
    button.addEventListener('click', () => {
      document.querySelector('.post-reward').classList.toggle('active');
    });
  },

  initCommontesDispaly: function () {
    const comms = document.querySelectorAll('.comment-wrap > div');
    if (comms.length <= 1) return;
    comms.forEach(function (item) {
      let dis = window.getComputedStyle(item, null).display;
      item.style.display = dis;
    });
  },

  registerCommonSwitch: function () {
    const button = document.querySelector('.comment-switch .switch-btn');
    if (!button) return;
    const comms = document.querySelectorAll('.comment-wrap > div');
    button.addEventListener('click', () => {
      button.classList.toggle('move');
      comms.forEach(function (item) {
        if (item.style.display === 'none') {
          item.style.cssText = "display: block; animation: tabshow .8s";
        } else {
          item.style.cssText = "display: none;"
        }
      });
    });
  },

  hiddeLodingCmp: function (selector) {
    const loadding = document.querySelector(selector).previousElementSibling;
    loadding.style.display = 'none';
  },

  activateNavByIndex: function (index) {
    const target = document.querySelectorAll('.post-toc li a')[index];
    if (!target || target.classList.contains('active-current')) return;

    document.querySelectorAll('.post-toc .active').forEach(element => {
      element.classList.remove('active', 'active-current');
    });
    target.classList.add('active', 'active-current');
    let parent = target.parentNode;
    while (!parent.matches('.post-toc')) {
      if (parent.matches('li')) parent.classList.add('active');
      parent = parent.parentNode;
    }
    // Scrolling to center active TOC element if TOC content is taller then viewport.
    const tocElement = document.querySelector('.sidebar-panel-container');
    if (!tocElement.parentNode.classList.contains('sidebar-toc-active')) return;
    window.anime({
      targets: tocElement,
      duration: 200,
      easing: 'linear',
      scrollTop: tocElement.scrollTop - (tocElement.offsetHeight / 2) + target.getBoundingClientRect().top - tocElement.getBoundingClientRect().top
    });
  },

  updateSidebarPosition: function () {
    if (window.innerWidth < 992 || NexT.CONFIG.scheme === 'Pisces' || NexT.CONFIG.scheme === 'Gemini') return;
    // Expand sidebar on post detail page by default, when post has a toc.
    const hasTOC = document.querySelector('.post-toc');
    let display = NexT.CONFIG.sidebar;
    if (typeof display !== 'boolean') {
      // There's no definition sidebar in the page front-matter.
      display = NexT.CONFIG.sidebar.display === 'always' || (NexT.CONFIG.sidebar.display === 'post' && hasTOC);
    }
    if (display) {
      window.dispatchEvent(new Event('sidebar:show'));
    }
  },

  activateSidebarPanel: function (index) {
    const duration = 200;
    const sidebar = document.querySelector('.sidebar-inner');
    const panel = document.querySelector('.sidebar-panel-container');
    const activeClassName = ['sidebar-toc-active', 'sidebar-overview-active'];

    if (sidebar.classList.contains(activeClassName[index])) return;

    window.anime({
      duration,
      targets: panel,
      easing: 'linear',
      opacity: 0,
      translateY: [0, -20],
      complete: () => {
        // Prevent adding TOC to Overview if Overview was selected when close & open sidebar.
        sidebar.classList.replace(activeClassName[1 - index], activeClassName[index]);
        window.anime({
          duration,
          targets: panel,
          easing: 'linear',
          opacity: [0, 1],
          translateY: [-20, 0]
        });
      }
    });
  },

  getStyle: function (src, position = 'after', parent) {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', src);

    const head = (parent || document.head);
    if (position === 'before') {
      head.prepend(link);
    } else {
      head.append(link);
    }
  },

  getScript: function (src, options = {}, legacyCondition) {
    if (typeof options === 'function') {
      return this.getScript(src, {
        condition: legacyCondition
      }).then(options);
    }

    const {
      condition = false,
      module = false,
      textContent = undefined,
      attributes: {
        id = '',
        async = false,
        defer = false,
        crossOrigin = '',
        dataset = {},
        ...otherAttributes
      } = {},
      parentNode = null
    } = options;

    return new Promise((resolve, reject) => {
      if (condition) {
        resolve();
      } else {
        const script = document.createElement('script');

        if (id) script.id = id;
        if (crossOrigin) script.crossOrigin = crossOrigin;
        if (module) script.type = 'module';
        if (textContent != undefined) script.textContent = textContent;
        script.async = async;
        script.defer = defer;
        Object.assign(script.dataset, dataset);
        Object.entries(otherAttributes).forEach(([name, value]) => {
          script.setAttribute(name, String(value));
        });

        script.onload = resolve;
        script.onerror = reject;

        if (src != null && src != undefined) {
          if (typeof src === 'object') {
            const { url, integrity } = src;
            script.src = url;
            if (integrity) {
              script.integrity = integrity;
              script.crossOrigin = 'anonymous';
            }
          } else {
            script.src = src;
          }
        }

        (parentNode || document.head).appendChild(script);
      }
    });
  },

  lazyLoadComponent: function (selector, legacyCallback) {
    if (legacyCallback) {
      return this.lazyLoadComponent(selector).then(legacyCallback);
    }
    return new Promise(resolve => {
      const element = document.querySelector(selector);
      if (!element) {
        resolve();
        return;
      }
      const intersectionObserver = new IntersectionObserver((entries, observer) => {
        const entry = entries[0];
        if (!entry.isIntersecting) return;

        resolve();
        observer.disconnect();
      });
      intersectionObserver.observe(element);
    });
  }
};
