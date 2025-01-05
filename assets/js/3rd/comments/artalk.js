/* Artalk comment plugin */
NexT.plugins.comments.artalk = function() {
  const element = '.artalk-container';
  if (!NexT.CONFIG.artalk
    || !NexT.utils.checkDOMExist(element)) return; 

  const artalk_js = NexT.utils.getCDNResource(NexT.CONFIG.artalk.js);
  const {
    site,
    placeholder,
    server,
  } = NexT.CONFIG.artalk.cfg;

  NexT.utils.lazyLoadComponent(element, function() {
    NexT.utils.getScript(artalk_js, function(){
      const artalk_css = NexT.utils.getCDNResource(NexT.CONFIG.artalk.css);
      NexT.utils.getStyle(artalk_css);

      new Artalk({
        el          : element,
        pageKey     : NexT.CONFIG.permalink,
        pageTitle   : NexT.CONFIG.title,
        server      : server,
        site        : site,
        locale      : NexT.CONFIG.lang,
        placeholder : placeholder,
        darkMode    : 'auto'
      });      
    });

    NexT.utils.hiddeLodingCmp(element);
  });
}