document.addEventListener('DOMContentLoaded', () => {

  const element = '.addthis_inline_share_toolbox';
  if (!NexT.CONFIG.page.addthis || !NexT.utils.checkDOMExist(element)) return; 

  const addthis_js = NexT.CONFIG.page.addthis.js + '?pubid=' + NexT.CONFIG.page.addthis.cfg.pubid;

  NexT.utils.loadComments(element).then(() => {
    NexT.utils.getScript(addthis_js, {
      attributes: {
        async: true
      },
      parentNode: document.querySelector(element)
    });
  });
});