document.addEventListener('DOMContentLoaded', () => {

  const element = '.artalk-container';
  if (!NexT.CONFIG.page.comments 
    || !NexT.CONFIG.page.artalk
    || !NexT.utils.checkDOMExist(element)) return; 

  const artalk_css = NexT.utils.getCDNResource(NexT.CONFIG.page.artalk.css);
  NexT.utils.getStyle(artalk_css, null);

  const artalk_js = NexT.utils.getCDNResource(NexT.CONFIG.page.artalk.js);
  const {
    site,
    placeholder,
    server,
  } = NexT.CONFIG.page.artalk.cfg;

  NexT.utils.loadComments(element)
    .then(() => NexT.utils.getScript(artalk_js, {
    }))
    .then(() => {

      new Artalk({
        el          : element,
        pageKey     : NexT.CONFIG.page.permalink,
        pageTitle   : NexT.CONFIG.page.title,
        server      : server,
        site        : site,
        locale      : NexT.CONFIG.page.lang,
        placeholder : placeholder,
        darkMode    : 'auto'
      });

      NexT.utils.hiddeLodingCmp(element);
  });
});