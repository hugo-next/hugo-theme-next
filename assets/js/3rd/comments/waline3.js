/* Waline3 comment plugin */
NexT.plugins.comments.waline3 = function () {
  const element = '.waline3-container';
  if (!NexT.CONFIG.waline3
    || !NexT.utils.checkDOMExist(element)) return;
    
  const {
    emoji,
    search,
    imguploader,
    placeholder,
    sofa,
    requiredmeta,
    serverurl,
    wordlimit,
    reaction,
    reactiontext,
    reactiontitle
  } = NexT.CONFIG.waline3.cfg;

  const waline_js = NexT.utils.getCDNResource(NexT.CONFIG.waline3.js);

  NexT.utils.lazyLoadComponent(element, () => {
    
    const waline_css = NexT.utils.getCDNResource(NexT.CONFIG.waline3.css);
    NexT.utils.getStyle(waline_css, 'before');
   
    let waline_script = `
      let locale = {
        placeholder   : '${placeholder}',
        sofa          : '${sofa}',
        reactionTitle : '${reactiontitle}'
      };

      let recatt = ${JSON.stringify(reactiontext)}
      recatt.forEach(function(value, index){
        locale['reaction'+index] = value;
      });
    
      import('${waline_js}').then((Waline) => {
        Waline.init({
          locale,
          el            : '${element}',
          emoji         : ${emoji},
          search        : ${search},
          imageUploader : ${imguploader},
          wordLimit     : ${wordlimit},
          requiredMeta  : ${JSON.stringify(requiredmeta)},
          reaction      : ${reaction},
          serverURL     : '${serverurl}',
          dark          : 'html[data-theme="dark"]'
        });

        NexT.utils.hiddeLodingCmp('${element}');
      });
    `;
    
    NexT.utils.getScript(null, { module: true, textContent: waline_script });
  });
}