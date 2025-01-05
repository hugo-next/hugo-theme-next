/* Sharethis share plugin */
NexT.plugins.share.sharethis = function() {
  const element = '.sharethis-inline-share-buttons';
  if (!NexT.CONFIG.share.enable || !NexT.utils.checkDOMExist(element)) return; 

  const sharethis = NexT.CONFIG.share.sharethis;

  if (!sharethis) return;

  const sharethis_js = sharethis.js.replace(/id/, sharethis.id);

  NexT.utils.lazyLoadComponent(element, function() {
    NexT.utils.getScript(sharethis_js, {
      attributes: {
        async: 'async'
      }
    });

    NexT.utils.hiddeLodingCmp(element);
  });
}