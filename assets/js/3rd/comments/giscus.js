/* Giscus comment plugin */
NexT.plugins.comments.giscus = function() {
  const element = '.giscus-container';
  if (!NexT.CONFIG.page.comments 
    || !NexT.CONFIG.giscus
    || !NexT.utils.checkDOMExist(element)) return;

  const { 
    category, 
    categoryid, 
    emit, 
    inputposition, 
    mapping, 
    reactions, 
    repo, 
    repoid, 
    theme } = NexT.CONFIG.giscus.cfg;


  NexT.utils.lazyLoadComponent(element, function() {
    NexT.utils.getScript(NexT.CONFIG.giscus.js, {
      attributes: {
        'async'                  : true,
        'crossorigin'            : 'anonymous',
        'data-repo'              : repo,
        'data-repo-id'           : repoid,
        'data-category'          : category,
        'data-category-id'       : categoryid,
        'data-mapping'           : mapping,
        'data-reactions-enabled' : reactions ? 1:0,
        'data-emit-metadata'     : emit ? 1:0,
        'data-input-position'    : inputposition,
        'data-theme'             : theme,
        'data-lang'              : NexT.CONFIG.lang,
        'data-loading'           : 'lazy'
      },
      parentNode: document.querySelector(element)
    });   
    
    NexT.utils.hiddeLodingCmp(element);
  });      
}