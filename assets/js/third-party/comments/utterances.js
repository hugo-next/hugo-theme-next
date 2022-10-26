/* Utterances comment plugin */
NexT.plugins.comments.utterances = function() {
  const element = '.utterances-container';
  if (!NexT.CONFIG.utterances
    || !NexT.utils.checkDOMExist(element)) return;

  const { 
    repo, 
    issueterm, 
    label, 
    theme } = NexT.CONFIG.utterances.cfg;

  NexT.utils.lazyLoadComponent(element, function() {
    NexT.utils.getScript(NexT.CONFIG.utterances.js, {
      attributes: {
        'async'       : true,
        'crossorigin' : 'anonymous',
        'repo'        : repo,
        'issue-term'  : issueterm,
        'label'       : label,
        'theme'       : theme
      },
      parentNode: document.querySelector(element)
    });

    NexT.utils.hiddeLodingCmp(element);
  }); 
}
