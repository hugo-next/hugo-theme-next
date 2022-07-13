document.addEventListener('DOMContentLoaded', () => {

  const element = '.utterances-container';
  if (!NexT.CONFIG.comments.enable 
    || !NexT.CONFIG.utterances
    || !NexT.utils.checkDOMExist(element)) return;

  const { 
    repo, 
    issueterm, 
    label, 
    theme } = NexT.CONFIG.utterances.config;

  NexT.utils.loadComments(element)
    .then(() => NexT.utils.getScript(NexT.CONFIG.utterances.js, {
      attributes: {
        'async'       : true,
        'crossorigin' : 'anonymous',
        'repo'        : repo,
        'issue-term'  : issueterm,
        'theme'       : theme
      },
      parentNode: document.querySelector(element)
    }));

    NexT.utils.hiddeLodingCmp(element);
});
