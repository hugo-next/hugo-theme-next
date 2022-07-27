document.addEventListener('DOMContentLoaded', () => {

  const element = '#lv-container';
  if (!NexT.CONFIG.page.comments 
    || !NexT.CONFIG.livere
    || !NexT.utils.checkDOMExist(element)) return; 

  NexT.utils.loadComments(element).then(() => {
    NexT.utils.getScript(NexT.CONFIG.livere.js, {
      attributes: {
        async: true
      },
      parentNode: document.querySelector(element)
    });

    NexT.utils.hiddeLodingCmp(element);
  });
});
