/* Twikoo comment plugin */
NexT.plugins.comments.twikoo = function () {
    const element = '#tcomment';
    if (!NexT.CONFIG.page.comments
        || !NexT.CONFIG.twikoo
        || !NexT.utils.checkDOMExist(element)) return;

    const twikoo_js = NexT.utils.getCDNResource(NexT.CONFIG.twikoo.js);

    NexT.utils.lazyLoadComponent("#twikoo", function() {
        NexT.utils.getScript(twikoo_js, function(){
            twikoo.init({
                envId: NexT.CONFIG.twikoo.cfg.envid,
                el: element,
                region: NexT.CONFIG.twikoo.cfg.region ? NexT.CONFIG.twikoo.cfg.region : 'ap-shanghai',
                lang: NexT.CONFIG.lang ? NexT.CONFIG.lang : 'zh-CN',
            });

            NexT.utils.hiddeLodingCmp("#twikoo");
        });
    });
}