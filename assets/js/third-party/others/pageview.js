/* Waline pageview plugin */
NexT.plugins.others.pageview = function() {
  const busz = NexT.CONFIG.busuanzi;
  if (busz != undefined && busz.pageview) return;

  let pageview_js = undefined;

  // Here can append others pageview plugin
  const waline = NexT.CONFIG.waline;
  if (waline != undefined && waline.cfg.pageview) {
    pageview_js = NexT.utils.getCDNResource(NexT.CONFIG.page.pageview.js);
  }

  if (pageview_js == undefined) return;

  NexT.utils.getScript(pageview_js, function(){
    Waline.pageviewCount({
      serverURL: waline.cfg.serverurl
    });
  });
}