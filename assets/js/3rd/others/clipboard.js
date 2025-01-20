/* clipboard plugin */
NexT.plugins.others.clipboard = function() {
  const clipboard_js = NexT.utils.getCDNResource(NexT.CONFIG.page.clipboard.js);

  NexT.utils.getScript(clipboard_js, function(){

    let figure = document.querySelectorAll('.highlight pre');
    if (figure.length === 0 || !NexT.CONFIG.copybtn) return;
    figure.forEach(element => {
      let cn = element.querySelector('code').className;      
      if (cn === '') return;
      element.children[0].insertAdjacentHTML('beforebegin', '<div class="copy-btn" data-clipboard-snippe><i class="fa fa-copy fa-fw"></i></div>');
      var clipboard = new ClipboardJS(element.children[0],
        { 
          text: function(trigger) {
            return trigger.nextElementSibling.textContent.trim();
          }
        });
      clipboard.on('success', function (e) {
        e.clearSelection();
        button.querySelector('i').className = 'fa fa-check-circle fa-fw';
      });

      clipboard.on('error', function (e) {
        console.error('Copy failed:', e);
        button.querySelector('i').className = 'fa fa-times-circle fa-fw';
      });

      const button = element.querySelector('.copy-btn');
      element.addEventListener('mouseleave', () => {
        setTimeout(() => {
          button.querySelector('i').className = 'fa fa-copy fa-fw';
        }, 300);
      });
    });
  });
}