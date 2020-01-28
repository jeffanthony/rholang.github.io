(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{281:function(e,n,t){"use strict";n.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},766:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t(54),r=(t(88),t(20),t(34),t(281)),i=t(1),s=(i.a.config.optionMergeStrategies,{VueRemarkRoot:r.a}),l=function(e){var n=e.options.components=e.options.components||{},t=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===Object(a.a)(s[e])&&"function"==typeof s[e].render?n[e]=s[e]:t[e]=function(){return s[e]}}))},h=i.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",g={excerpt:null,title:"Rholang"};var u=function(e){e.options[c]&&(e.options[c]=g),i.a.util.defineReactive(e.options,c,g),e.options.computed=h.computed({$frontmatter:function(){return e.options[c]}},e.options.computed)},p=Object(o.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("VueRemarkRoot",[t("h1",{attrs:{id:"rholang"}},[t("a",{attrs:{href:"#rholang","aria-hidden":"true"}},[e._v("#")]),e._v("Rholang")]),t("p",[e._v("Rholang is a new programming language designed for use in distributed systems. This document describes the syntax in Rholang.")]),t("p",[e._v('Rholang is "process-oriented": all computation is done by means of message passing.  Messages are passed on "channels", which are rather like message queues; however, the channels behave more like bags (multisets) rather than queues, since there is no implicit ordering on messages.  ')]),t("p",[e._v("Rholang is completely asynchronous, in the sense that while you can read a message from a channel and then do something with it, you can't send a message and then do something once it has been received, at least, not without explicitly waiting for an acknowledgment message from the receiver. Every channel has a name, and every name denotes a unique channel.")]),t("h2",{attrs:{id:"getting-started"}},[t("a",{attrs:{href:"#getting-started","aria-hidden":"true"}},[e._v("#")]),e._v("Getting started")]),t("p",[e._v("Get started with Rholang by selecting one of the options below.")]),t("ul",[t("li",[t("strong",[e._v("Run Rholang on RNode")]),e._v(" - Write Rholang contracts in an editor of your choice and run them on RNode using either the REPL or EVAL modes. "),t("a",{attrs:{href:"https://github.com/rchain/rchain/releases",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Get started")]),e._v(" with the latest version of RNode.")]),t("li",[t("strong",[e._v("Run Rholang on a web interface")]),e._v(" - This "),t("g-link",{attrs:{to:"http://rchain.cloud",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("web interface")]),e._v(" was created by a RChain community member.")],1),t("li",[t("strong",[e._v("Run Rholang using Cryptofex IDE")]),e._v(" - This closed source "),t("a",{attrs:{href:"http://cryptofex.io/download",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("IDE")]),e._v(" was created by Pyrofex.")]),t("li",[t("strong",[e._v("Write Rholang using an IntelliJ plugin")]),e._v(" - This "),t("a",{attrs:{href:"https://github.com/tgrospic/rholang-idea",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Rholang IntelliJ plugin")]),e._v(" was created by a RChain community member.")])]),t("h2",{attrs:{id:"rholang-language-specification"}},[t("a",{attrs:{href:"#rholang-language-specification","aria-hidden":"true"}},[e._v("#")]),e._v("Rholang language specification")]),t("p",[t("g-link",{attrs:{to:"https://developer.rchain.coop/assets/rholang-spec-0.2.pdf",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Language specification")])],1)])}),[],!1,null,null,null);"function"==typeof l&&l(p),"function"==typeof u&&u(p);n.default=p.exports}}]);