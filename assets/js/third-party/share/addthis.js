/* AddThis share plugin */
NexT.plugins.share.addthis = function() {
  const element = '.addthis_inline_share_toolbox';
  if (!NexT.CONFIG.addthis || !NexT.utils.checkDOMExist(element)) return; 

  const addthis_js = NexT.CONFIG.addthis.js + '?pubid=' + NexT.CONFIG.addthis.cfg.pubid;

  NexT.utils.lazyLoadComponent(element, function() {
    NexT.utils.getScript(addthis_js, {
      attributes: {
        async: false
      },
      parentNode: document.querySelector(element)
    });
  });
}