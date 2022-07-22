document.addEventListener('DOMContentLoaded', () => {

  const element = '.waline-container';
  if (!NexT.CONFIG.page.comments 
    || !NexT.CONFIG.page.waline
    || !NexT.utils.checkDOMExist(element)) return; 
  
  const {
    emoji, 
    imguploader, 
    pageview, 
    placeholder, 
    requiredmeta, 
    serverurl, 
    wordlimit
  } = NexT.CONFIG.page.waline.cfg;


  const waline_css = NexT.utils.getCDNResource(NexT.CONFIG.page.waline.css);
  NexT.utils.getStyle(waline_css, null);

  const waline_js = NexT.utils.getCDNResource(NexT.CONFIG.page.waline.js);

  const locale = {
    placeholder: placeholder
  };

  NexT.utils.loadComments(element)
    .then(() => NexT.utils.getScript(waline_js, {
    }))
    .then(() => {

      Waline.init({
        locale,
        el            : element,
        pageview      : pageview,
        emoji         : emoji,
        imageUploader : imguploader,
        wordLimit     : wordlimit,
        requiredMeta  : requiredmeta,
        serverURL     : serverurl,
        lang          : NexT.CONFIG.page.lang,
        dark          : "auto"
      });

      NexT.utils.hiddeLodingCmp(element);
  });
});