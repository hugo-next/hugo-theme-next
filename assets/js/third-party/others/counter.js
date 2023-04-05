/* Page's view & comment counter plugin */
NexT.plugins.others.counter = function() {
    let pageview_js = undefined;
    let comment_js = undefined;

    const post_meta = NexT.CONFIG.postmeta;

    const views = post_meta.views;
    if(views != undefined && views.enable) {
      if (views.plugin == 'waline') {
        pageview_js = NexT.utils.getCDNResource(NexT.CONFIG.page.waline.js[0]);
        NexT.utils.getScript(pageview_js, function(){
          Waline.pageviewCount({
            serverURL: NexT.CONFIG.waline.cfg.serverurl
          });
        });
      }
    }

    const comments = post_meta.comments;
    if (comments != undefined && comments.enable) {
      if (comments.plugin == 'waline') {
        comment_js = NexT.utils.getCDNResource(NexT.CONFIG.page.waline.js[1]);
        NexT.utils.getScript(comment_js, function(){
          Waline.commentCount({
            serverURL: NexT.CONFIG.waline.cfg.serverurl
          });
        });
      }
    }
}