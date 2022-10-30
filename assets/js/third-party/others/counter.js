/* Page's view & comment counter plugin */
NexT.plugins.others.counter = function() {
    let busz_postview = false;
    let pageview_js = undefined;
    let comment_js = undefined;

  const busz = NexT.CONFIG.busuanzi;
  if (busz != undefined && busz.pageview) {
    busz_postview = true;
  }

  // Here can append others pageview & comment plugin
  const waline = NexT.CONFIG.waline;
  if (waline != undefined){
    if(!busz_postview && waline.cfg.pageview) {
      pageview_js = NexT.utils.getCDNResource(NexT.CONFIG.page.waline.js[0]);
      NexT.utils.getScript(pageview_js, function(){
        Waline.pageviewCount({
          serverURL: waline.cfg.serverurl
        });
      });
    }

    if (waline.cfg.comment) {
      comment_js = NexT.utils.getCDNResource(NexT.CONFIG.page.waline.js[1]);
      NexT.utils.getScript(comment_js, function(){
        Waline.commentCount({
          serverURL: waline.cfg.serverurl
        });
      });
    }
  }

 
}