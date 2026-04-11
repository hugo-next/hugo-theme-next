/* Pangu.js - Chinese-English spacing plugin */
NexT.plugins.others.pangu = function() {
  if (!NexT.CONFIG.pangu) {
    return;
  }

  const panguJS = NexT.utils.getCDNResource(NexT.CONFIG.pangu.js);
  
  NexT.utils.getScript(panguJS, function() {
    if (window.pangu) {
      window.pangu.spacingPage();
    }
  });
};
