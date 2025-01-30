/* LiveRe comment plugin */
NexT.plugins.comments.livere = function() {
  const element = '#lv-container';
  if (!NexT.CONFIG.livere
    || !NexT.utils.checkDOMExist(element)) return; 

  NexT.utils.lazyLoadComponent(element, function() {
    NexT.utils.getScript(NexT.CONFIG.livere.js, {
      attributes: {
        async: true
      },
      parentNode: document.querySelector(element)
    });

    NexT.utils.hiddeLodingCmp(element);
  });
}
