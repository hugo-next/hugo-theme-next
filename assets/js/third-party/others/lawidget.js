/* 51La sidebar data widget */
NexT.plugins.others.lawidget = function() {
  const element = '#siteinfo-card-widget';
  const lawt_js = NexT.CONFIG.lawidget.js.replace('laId', NexT.CONFIG.lawidget.id);
  
  NexT.utils.lazyLoadComponent(element, function () {    
    NexT.utils.getScript(lawt_js,{
      attributes: {
        id: 'LA-DATA-WIDGET',
        crossorigin: 'anonymous',
        charset: 'UTF-8',
        defer: true
      },
      parentNode: document.getElementById('la-siteinfo-widget')
    }, NexT.utils.fmtLaWidget());
  });
}