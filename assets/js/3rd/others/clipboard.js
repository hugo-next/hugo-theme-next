/* clipboard plugin */
NexT.plugins.others.clipboard = function () {

  let chromaDiv = document.querySelectorAll('div.highlight div.chroma');
  if (chromaDiv.length === 0) return;

  chromaDiv.forEach(element => {
    // Add copy button DOM.
    let codeblock = element.querySelector('code[class]:not([class=""]');
    let lang = codeblock.className;
    let copyBtn = document.createElement('div');
    copyBtn.classList.add('copy-btn');
    codeblock.parentNode.appendChild(copyBtn);

    element.addEventListener('mouseleave', () => {
      setTimeout(() => {
        copyBtn.classList.remove('copied','uncopied');
      }, 300);
    });

    // Add code header show
    var ch = document.createElement('div');
    ch.classList.add('code-header');
    ch.classList.add(lang);
    ch.insertAdjacentHTML('afterbegin', 
      '<span class="code-lang"></span><span class="collapse-btn"></span>');
    ch.addEventListener('click', function () {       
      element.classList.toggle('hidden-code');       
      ch.querySelector('.collapse-btn').classList.toggle('collapse');
    }, false);

    element.parentNode.insertBefore(ch, element);
  });

  if (!NexT.CONFIG.copybtn || !NexT.CONFIG.page.clipboard) return;

  const clipboard_js = NexT.utils.getCDNResource(NexT.CONFIG.page.clipboard.js);
  NexT.utils.getScript(clipboard_js, function () {   
    // Register the clipboard event. 
    var clipboard = new ClipboardJS('.copy-btn', {
      text: function (trigger) {
        // TODO: Why there clipboard default text content with enter?
        return trigger.previousElementSibling.textContent.trim();
      }
    });

    clipboard.on('success', function (e) {
      e.clearSelection();
      e.trigger.classList.add('copied');
    });

    clipboard.on('error', function (e) {
      console.error('Copy failed:', e);      
      e.trigger.classList.add('uncopied');
    });
  }); 
}