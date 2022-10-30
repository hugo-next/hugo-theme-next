/* global NexT, boot, CONFIG */
window.NexT = {};
NexT.boot = {};
NexT.plugins = {};

// Defined comment component & add register event
NexT.plugins.comments = {};
NexT.plugins.comments.register = function() {
  if (!NexT.CONFIG.page.comments) return;
  for(var c in NexT.plugins.comments) { 
    if (c === 'register') continue;
    eval('NexT.plugins.comments.'+c)();
  };
}

// Defined search engine & add register event
NexT.plugins.search = {}
NexT.plugins.search.register = function() {
  for(var s in NexT.plugins.search) { 
    if (s === 'register') continue;
    eval('NexT.plugins.search.'+s)();
  };
}

// Defined share plugin & add register event
NexT.plugins.share = {}
NexT.plugins.share.register = function() {
  for(var s in NexT.plugins.share) { 
    if (s === 'register') continue;
    eval('NexT.plugins.share.'+s)();
  };
}

// Defined other plugin & add register event
NexT.plugins.others = {}
NexT.plugins.others.register = function() {
  for(var o in NexT.plugins.others) { 
    if (o === 'register') continue;
    eval('NexT.plugins.others.'+o)();
  };
}

// Add event to register all third party plugins
NexT.plugins.register = function() {
  for(var p in NexT.plugins) {
    if (p === 'register') continue;
    eval('NexT.plugins.'+p+'.register')();
  }
};

(function() {
  const className = 'next-config';

  const staticConfig = {};
  let variableConfig = {};

  const parse = text => JSON.parse(text || '{}');

  const update = name => {
    const targetEle = document.querySelector(`.${className}[data-name="${name}"]`);
    if (!targetEle) return;
    const parsedConfig = parse(targetEle.text);
    if (name === 'main') {
      Object.assign(staticConfig, parsedConfig);
    } else {
      variableConfig[name] = parsedConfig;
    }
  };

  update('main');

  window.NexT.CONFIG = new Proxy({}, {
    get(overrideConfig, name) {
      let existing;
      if (name in staticConfig) {
        existing = staticConfig[name];
      } else {
        if (!(name in variableConfig)) update(name);
        existing = variableConfig[name];
      }

      // For unset override and mixable existing
      if (!(name in overrideConfig) && typeof existing === 'object') {
        // Get ready to mix.
        overrideConfig[name] = {};
      }

      if (name in overrideConfig) {
        const override = overrideConfig[name];

        // When mixable
        if (typeof override === 'object' && typeof existing === 'object') {
          // Mix, proxy changes to the override.
          return new Proxy({ ...existing, ...override }, {
            set(target, prop, value) {
              target[prop] = value;
              override[prop] = value;
              return true;
            }
          });
        }

        return override;
      }

      // Only when not mixable and override hasn't been set.
      return existing;
    }
  });

  // TODO
  // document.addEventListener('pjax:success', () => {
  //   variableConfig = {};
  // });
})();