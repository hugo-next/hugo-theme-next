/* boot starup */

(function () {
  const onPageLoaded = () => document.dispatchEvent(
    new Event('page:loaded', {
      bubbles: true
    })
  );

  if (document.readyState === 'loading') {
    document.addEventListener('readystatechange', onPageLoaded, { once: true });
  } else {
    onPageLoaded();
  }
  document.addEventListener('pjax:success', onPageLoaded);
})();

NexT.boot.registerEvents = function() {

  NexT.utils.registerImageLoadEvent();
  NexT.utils.registerScrollPercent();
  // NexT.utils.registerCanIUseTag();
  NexT.utils.registerToolButtons();
  // Register comment's components
  NexT.plugins.register();

  // Register comment counter click event
  const commentCnt = document.querySelector('#comments-count');
  if (commentCnt && NexT.CONFIG.page.isPage) {
    commentCnt.addEventListener('click',  event => {
      NexT.utils.slidScrollBarAnime('comments');
    });
  }

  // Mobile top menu bar.
  document.querySelector('.site-nav-toggle .toggle').addEventListener('click', event => {
    event.currentTarget.classList.toggle('toggle-close');
    const siteNav = document.querySelector('.site-nav');
    if (!siteNav) return;
    siteNav.style.setProperty('--scroll-height', siteNav.scrollHeight + 'px');
    document.body.classList.toggle('site-nav-on');
  });

  document.querySelectorAll('.sidebar-nav li').forEach((element, index) => {
    element.addEventListener('click', () => {
      NexT.utils.activateSidebarPanel(index);
    });
  });

  window.addEventListener('hashchange', () => {
    const tHash = location.hash;
    if (tHash !== '' && !tHash.match(/%\S{2}/)) {
      const target = document.querySelector(`.tabs ul.nav-tabs li a[href="${tHash}"]`);
      target && target.click();
    }
  });
};

NexT.boot.refresh = function() {

  NexT.utils.fmtSiteInfo();

  if (!NexT.CONFIG.page.isPage) return;
 
  NexT.utils.registerSidebarTOC();
  NexT.utils.registerCopyCode();
  NexT.utils.registerPostReward();
  if(NexT.CONFIG.page.comments) {    
    NexT.utils.initCommontesDispaly();
    NexT.utils.registerCommonSwitch();
    NexT.utils.domAddClass('#goto-comments', 'goto-comments-on');
  } else {
    NexT.utils.hideComments();
  }
  NexT.utils.registerImageViewer();

  //TODO
   /**
   * Register JS handlers by condition option.
   * Need to add config option in Front-End at 'scripts/helpers/next-config.js' file.
   */
  //NexT.CONFIG.prism && window.Prism.highlightAll();
  /*NexT.CONFIG.mediumzoom && window.mediumZoom('.post-body :not(a) > img, .post-body > img', {
    background: 'var(--content-bg-color)'
  });*/
  // NexT.CONFIG.lazyload && window.lozad('.post-body img').observe();
  // NexT.CONFIG.pangu && window.pangu.spacingPage();
  /*NexT.utils.registerTabsTag();
  NexT.utils.registerActiveMenuItem();
  NexT.utils.registerLangSelect();*/
  /*NexT.utils.wrapTableWithBox();
  NexT.utils.registerVideoIframe();*/

};

NexT.boot.motion = function() {
  // Define Motion Sequence & Bootstrap Motion.
  if (NexT.CONFIG.motion.enable) {
    NexT.motion.integrator
      .add(NexT.motion.middleWares.header)
      .add(NexT.motion.middleWares.postList)
      .add(NexT.motion.middleWares.sidebar)
      .add(NexT.motion.middleWares.footer)
      .bootstrap();
  }
  NexT.utils.updateSidebarPosition();
};

document.addEventListener('DOMContentLoaded', () => {
  NexT.boot.registerEvents();
  NexT.boot.motion();
  NexT.boot.refresh();
});
