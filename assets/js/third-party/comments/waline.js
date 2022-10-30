/* Waline comment plugin */
NexT.plugins.comments.waline = function() {
  const element = '.waline-container';
  if (!NexT.CONFIG.waline
    || !NexT.utils.checkDOMExist(element)) return; 
  
  const {
    comment,
    emoji, 
    imguploader, 
    pageview, 
    placeholder, 
    sofa,
    requiredmeta, 
    serverurl, 
    wordlimit,
    reaction,
    reactiontext,
    reactiontitle
  } = NexT.CONFIG.waline.cfg;

  const waline_js = NexT.utils.getCDNResource(NexT.CONFIG.waline.js);

  let locale = {
    placeholder   : placeholder,
    sofa          : sofa,
    reactionTitle : reactiontitle
  };

  reactiontext.forEach(function(value, index){
    locale['reaction'+index] = value;
  });

  NexT.utils.lazyLoadComponent(element, function () {    
    NexT.utils.getScript(waline_js, function(){
      const waline_css = NexT.utils.getCDNResource(NexT.CONFIG.waline.css);
      NexT.utils.getStyle(waline_css, 'before');

      Waline.init({
        locale,
        el            : element,
        pageview      : pageview,
        comment       : comment,
        emoji         : emoji,
        imageUploader : imguploader,
        wordLimit     : wordlimit,
        requiredMeta  : requiredmeta,
        reaction      : reaction,
        serverURL     : serverurl,
        lang          : NexT.CONFIG.lang,
        dark          : 'html[data-theme="dark"]'
      });

      NexT.utils.hiddeLodingCmp(element);
    })
  });
}