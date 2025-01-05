/* Mermaid plugin */
NexT.plugins.others.mermaid = function() {
  const mermaid_js = NexT.utils.getCDNResource(NexT.CONFIG.page.mermaid.js);

  NexT.utils.getScript(mermaid_js, function(){
    mermaid.initialize({
      sequence: { 
        showSequenceNumbers: true,
        actorMargin: 50, 
        diagramMarginX:10, 
        diagramMarginY:10
      }
    });
  });
}