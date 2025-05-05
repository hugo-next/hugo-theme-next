/* Page's view & comment counter plugin */
NexT.plugins.others.counter = function () {
  let pageview_js = undefined;
  let comment_js = undefined;

  const post_meta = NexT.CONFIG.postmeta;

  const views = post_meta.views;
  if (views != undefined && views.enable) {
    let pageview_el = '#pageview-count';

    switch (views.plugin) {
      case 'waline':
        pageview_js = NexT.utils.getCDNResource(NexT.CONFIG.page.waline.pagecnt);
        NexT.utils.getScript(pageview_js, function () {
          Waline.pageviewCount({
            selector : pageview_el,
            serverURL: NexT.CONFIG.waline.cfg.serverurl
          });
        });
        break;
      case 'waline3':
        pageview_js = NexT.utils.getCDNResource(NexT.CONFIG.page.waline3.pagecnt);

        let pageview_script = `
          import('${pageview_js}').then((Waline) => {
            Waline.pageviewCount({             
              selector : '${pageview_el}',
              serverURL: '${NexT.CONFIG.waline3.cfg.serverurl}'
            })
          });
          `;
        NexT.utils.getScript(null, { module: true, textContent: pageview_script });
        break;
    }

  }

  const comments = post_meta.comments;
  if (comments != undefined && comments.enable) {
    let comments_el = '#comments-count';
    switch (comments.plugin) {
      case 'waline':
        comment_js = NexT.utils.getCDNResource(NexT.CONFIG.page.waline.commentcnt);
        NexT.utils.getScript(comment_js, function () {
          Waline.commentCount({
            selector : comments_el,
            serverURL: NexT.CONFIG.waline.cfg.serverurl
          });
        });
        break;
      case 'waline3':
        comment_js = NexT.utils.getCDNResource(NexT.CONFIG.page.waline3.commentcnt);
        let comment_script = `
          import('${comment_js}').then((Waline) => {
            Waline.commentCount({             
              selector : '${comments_el}',
              serverURL: '${NexT.CONFIG.waline3.cfg.serverurl}'
            })
          });
          `;
        NexT.utils.getScript(null, { module: true, textContent: comment_script });
        break;
      case 'twikoo':
        comment_js = NexT.utils.getCDNResource(NexT.CONFIG.twikoo.js);
        NexT.utils.lazyLoadComponent("#twikoo", function () {
          NexT.utils.getScript(comment_js, function () {
            ele_list = document.querySelectorAll(comments_el);
            let paths = [];
            ele_list.forEach(ele => {
              paths.push(ele.getAttribute('data-path'));
            });
            twikoo.getCommentsCount({
              envId: NexT.CONFIG.twikoo.cfg.envid,
              region: NexT.CONFIG.twikoo.cfg.region ? NexT.CONFIG.twikoo.cfg.region : 'ap-shanghai',
              urls: paths,
              includeReply: true,
            }).then(function (res) {
              let count_map = {};
              res.forEach(item => {
                count_map[item.url] = item.count;
              });
              ele_list.forEach(ele => {
                ele.innerHTML = count_map[ele.getAttribute('data-path')];
              });
            }).catch(function (err) {
              console.error(err);
            });;
          });
        });
        break;
    }
  }
}