/* Twikoo comment plugin */
NexT.plugins.comments.twikoo = function () {
    const element = '#tcomment';
    if (!NexT.CONFIG.page.comments
        || !NexT.CONFIG.twikoo
        || !NexT.utils.checkDOMExist(element)) return;

    const version = NexT.CONFIG.twikoo.version ? NexT.CONFIG.twikoo.version : '1.6.41';
    const twikoo_js = NexT.CONFIG.twikoo.js.replace('<version>', version);

    NexT.utils.lazyLoadComponent(element, function() {
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