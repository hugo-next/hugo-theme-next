/* Google translate plugin */
NexT.plugins.others.translate = function() {
  const element = '#gtranslate';
  if (!NexT.utils.checkDOMExist(element)) return;
  NexT.utils.lazyLoadComponent(element, function() { 
    window.translateelement_styles='/css/google-translate.min.css'; 
    NexT.utils.getScript('/js/3rd/google-translate.min.js');
  });
}