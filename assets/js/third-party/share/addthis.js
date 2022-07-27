document.addEventListener('DOMContentLoaded', () => {

  const element = '.addthis_inline_share_toolbox';
  if (!NexT.CONFIG.addthis || !NexT.utils.checkDOMExist(element)) return; 

  const addthis_js = NexT.CONFIG.addthis.js + '?pubid=' + NexT.CONFIG.addthis.cfg.pubid;

  NexT.utils.loadComments(element).then(() => {
    NexT.utils.getScript(addthis_js, {
      attributes: {
        async: true
      },
      parentNode: document.querySelector(element)
    });
  });
});