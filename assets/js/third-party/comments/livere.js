document.addEventListener('DOMContentLoaded', () => {

  const element = '#lv-container';
  if (!NexT.CONFIG.page.comments 
    || !NexT.CONFIG.page.livere
    || !NexT.utils.checkDOMExist(element)) return; 

  NexT.utils.loadComments(element).then(() => {
    NexT.utils.getScript(NexT.CONFIG.page.livere.js, {
      attributes: {
        async: true
      },
      parentNode: document.querySelector(element)
    });

    NexT.utils.hiddeLodingCmp(element);
  });
});
