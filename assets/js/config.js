if (!window.NexT) window.NexT = {};

(function() {

  const siteConfig = {
    "hostname"   : "{{ .Site.BaseURL }}",
    "root"       : "/",
    "images"     : "{{ .Site.Params.images }}",
    "scheme"     : "{{ .Site.Params.scheme }}",
    "darkmode"   : {{ .Site.Params.darkmode }},
    "version"    : "{{ .Site.Data.config.version }}",
    "sidebar"    : {{ .Site.Params.sidebar | jsonify }},
    "copybtn"    : {{ .Site.Params.codeblock.copyBtn }},
    "bookmark"   : {{ .Site.Params.bookmark | jsonify }},
    "comments"   : {{ .Site.Params.comments | jsonify }},
    "lazyload"   : {{ .Site.Params.lazyload }},
    "pangu"      : {{ .Site.Params.pangu }},
    "stickytabs" : {{ .Site.Params.tabs.sticky }},
    "motion"     : {{ .Site.Params.motion | jsonify }},
    // TODO Find prismjs 
    //"prism"    : "",
    "i18n"       : {
      "placeholder"  : "",
      "empty"        : "${query}",
      "hits_time"    : "'${hits}', '${time}'",
      "hits"         : "${hits}"
    },
    {{- if .Site.Params.algoliaSearch.enable }}
    // TODO
    "algolia"    : {
      "appID"        : "",
      "apiKey"       : "",
      "indexName"    : "",
      "hits"         : ""
    }
    {{- end }}
    {{- if .Site.Params.localSearch.enable }}
    // TODO
    "path"       : "/search.json",
    "localsearch": {{ .Site.Params.localSearch | jsonify }},
    {{- end }}
    "lang"       : "{{ .Site.LanguageCode }}",
    "permalink"  : "{{ .Page.Permalink | absURL }}",
    "title"      : "{{ .Page.Title }}",
    "isHome"     : {{ .IsHome }},
    "isPage"     : {{ .IsPage }}
  };
  
  window.CONFIG = new Proxy(siteConfig, {});

})();