document.addEventListener('DOMContentLoaded', () => {

  const element = '.artalk-container';
  if (!NexT.CONFIG.page.comments 
    || !NexT.CONFIG.artalk
    || !NexT.utils.checkDOMExist(element)) return; 

  const artalk_css = NexT.utils.getCDNResource(NexT.CONFIG.artalk.css);
  NexT.utils.getStyle(artalk_css, null);

  const artalk_js = NexT.utils.getCDNResource(NexT.CONFIG.artalk.js);
  const {
    site,
    placeholder,
    server,
  } = NexT.CONFIG.artalk.cfg;

  NexT.utils.loadComments(element)
    .then(() => NexT.utils.getScript(artalk_js, {
    }))
    .then(() => {

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

      NexT.utils.hiddeLodingCmp(element);
  });
});