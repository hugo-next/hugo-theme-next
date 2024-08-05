/* Addtoany share plugin */
NexT.plugins.share.addtoany = function() {
  const element = '.a2a_kit';
  if (!NexT.CONFIG.share.enable || !NexT.utils.checkDOMExist(element)) return; 

  const addtoany = NexT.CONFIG.share.addtoany;

  if (!addtoany) return;

  NexT.utils.lazyLoadComponent(element, function() {
    let addtoany_cfg = `
      var a2a_config = a2a_config || {};
      a2a_config.onclick = 1;
      a2a_config.locale = "${addtoany.locale}";
      a2a_config.num_services = ${addtoany.num};
    `;

    NexT.utils.getScript(null, {
      textContent: addtoany_cfg
    });   
    
    NexT.utils.getScript(addtoany.js, () => { NexT.utils.hiddeLodingCmp(element); });
  });
}