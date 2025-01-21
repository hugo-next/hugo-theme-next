/* clipboard plugin */
NexT.plugins.others.clipboard = function () {
  const clipboard_js = NexT.utils.getCDNResource(NexT.CONFIG.page.clipboard.js);

  NexT.utils.getScript(clipboard_js, function () {

    let figure = document.querySelectorAll('.highlight pre');
    if (figure.length === 0 || !NexT.CONFIG.copybtn) return;
    
    /** Add copy button DOM. **/
    figure.forEach(element => {
      let cn = element.querySelector('code').className;
      if (cn === '') return;
      element.insertAdjacentHTML('beforeend', '<div class="copy-btn"><i class="fa fa-copy fa-fw"></i></div>');
    });

    /** Register the clipboard event. **/
    var clipboard = new ClipboardJS('.copy-btn', {
      text: function (trigger) {
        // TODO: Why there clipboard default text content with enter?
        return trigger.previousElementSibling.textContent.trim();
      }
    });

    clipboard.on('success', function (e) {
      e.clearSelection();
      e.trigger.querySelector('i').className = 'fa fa-fw fa-check-circle';
    });

    clipboard.on('error', function (e) {
      console.error('Copy failed:', e);
      e.trigger.querySelector('i').className = 'fa fa-fw fa-times-circle';
    });
  });
}