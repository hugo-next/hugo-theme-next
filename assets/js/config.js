if (!window.NexT) window.NexT = {};

(function() {

  const siteConfig = {
    "hostname"   : "{{ .Site.BaseURL }}",
    "root"       : "/",
    "vendor"     : {
      "plugins" : "{{ .Site.Params.vendors.plugins }}",
      "router"  : "{{ .Scratch.Get "router" }}"
    },
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
    {{- with .Site.Params.waline }}
    "waline"     : { 
      "js"     : {{ $.Site.Data.resources.waline.js | jsonify }},
      "css"    : {{ $.Site.Data.resources.waline.css | jsonify }},
      "config" : {{ . | jsonify }}
    },  
    {{- end }}
    {{- with .Site.Params.artalk }}
    "artalk"     : { 
      "js"     : {{ $.Site.Data.resources.artalk.js | jsonify }},
      "css"    : {{ $.Site.Data.resources.artalk.css | jsonify }},
      "config" : {{ . | jsonify }}
    },
    {{- end }}
    {{- with .Site.Params.giscus }}
    "giscus"     : { 
      "js"     : "{{ $.Site.Data.resources.giscus.js }}",
      "config" : {{ . | jsonify }}
    },
    {{- end }}
    {{- with .Site.Params.livere }}
    "livere"     : { 
      "js"     : "{{ $.Site.Data.resources.livere.js }}"
    },
    {{- end }}
    {{- with .Site.Params.utterances }}
    "utterances"     : { 
      "js"     : "{{ $.Site.Data.resources.utterances.js }}",
      "config" : {{ . | jsonify }}
    },
    {{- end }}
    {{- with .Site.Params.addThisId }}
    "addthis"     : { 
      "js"     : "{{ $.Site.Data.resources.addthis.js }}",
      "config" : { "pubid" : "{{ . }}" }
    },
    {{- end }}
    "lang"       : "{{ .Site.LanguageCode }}",
    "permalink"  : "{{ .Page.Permalink | absURL }}",
    "title"      : "{{ .Page.Title }}",
    "isHome"     : {{ .IsHome }},
    "isPage"     : {{ .IsPage }}
  };
  
  window.NexT.CONFIG = new Proxy(siteConfig, {});

})();