/* Math render plugin */
NexT.plugins.others.math = function() {
  const render = NexT.CONFIG.page.math.render;
  
  if (render === 'mathjax') {
    const render_js = NexT.utils.getCDNResource(NexT.CONFIG.page.math.js);
    const mathjaxCfg = `
      window.MathJax = {
        // 自定义内联数学公式的分隔符号
        tex: {
          inlineMath: [['$', '$'], ['\\(', '\\)']]
        },
        // SVG 渲染配置为全局共享字体缓存
        svg: {
          fontCache: 'global'
        },
        // 排除特定的HTML标签，避免过度渲染
        options: {
          skipHtmlTags: ["script", "noscript", "style", "textarea", "pre", "footer"],
        }
      };
    `;
    NexT.utils.getScript(null, { textContent: mathjaxCfg });
    NexT.utils.getScript(render_js, { attributes: { id: "MathJax-script", "async": true }});
  }

  if (render === 'katex') {
    const render_css = NexT.utils.getCDNResource(NexT.CONFIG.page.math.css);
    NexT.utils.getStyle(render_css);
    const render_js_list = NexT.CONFIG.page.math.js;    
    render_js_list.forEach(js => {
      const js_loader = NexT.utils.getScript(NexT.utils.getCDNResource(js));
      if(js.name === 'auto-render') {
        js_loader.then(function(){
          renderMathInElement(document.body, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false},
                {left: '\\(', right: '\\)', display: false},
                {left: '\\[', right: '\\]', display: true}
            ],
            
            throwOnError : false
          })
        });
      }
    });
  }
}