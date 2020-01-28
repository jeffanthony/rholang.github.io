(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{281:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},780:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o(54),r=(o(88),o(20),o(34),o(281)),i=o(1),s=(i.a.config.optionMergeStrategies,{VueRemarkRoot:r.a}),h=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===Object(a.a)(s[e])&&"function"==typeof s[e].render?t[e]=s[e]:o[e]=function(){return s[e]}}))},l=i.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",d={excerpt:null,title:"What are Validators"};var u=function(e){e.options[c]&&(e.options[c]=d),i.a.util.defineReactive(e.options,c,d),e.options.computed=l.computed({$frontmatter:function(){return e.options[c]}},e.options.computed)},p=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("h1",{attrs:{id:"what-are-validators"}},[o("a",{attrs:{href:"#what-are-validators","aria-hidden":"true"}},[e._v("#")]),e._v("What are Validators")]),o("p",[e._v("Validators are agents that will run your dApp. They are interested in your application to get validation rewards out of transaction volume your dApp creating, you are interested to pick right set of validators (right shard) to get best compromise between cost of execution and security of network. The more validators are in network and the more powerful they are - the more costly will be their services, because the network provides high throughput and high level of decentralisation. The cheapest shard is a single RNode hosted by yourself, but that's a no good solution for working with important data.")]),o("h1",{attrs:{id:"bonding-to-a-network"}},[o("a",{attrs:{href:"#bonding-to-a-network","aria-hidden":"true"}},[e._v("#")]),e._v("Bonding to a network")]),o("p",[e._v("To participate in the RChain proof-of-stake consensus protocol, you must stake bond on the network to become a bonded validator. Information about this process is not yet available.")]),o("h2",{attrs:{id:"joining-the-rchain-test-net"}},[o("a",{attrs:{href:"#joining-the-rchain-test-net","aria-hidden":"true"}},[e._v("#")]),e._v("Joining the RChain test net")]),o("p",[e._v("You can join the RChain test net. Please see "),o("a",{attrs:{href:"https://rchain.atlassian.net/wiki/spaces/CORE/pages/678756429/RChain+public+testnet+information",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("RChain public testnet")]),e._v(" information for details about the version of software and the bootstrap address.")]),o("h2",{attrs:{id:"monitoring-the-node"}},[o("a",{attrs:{href:"#monitoring-the-node","aria-hidden":"true"}},[e._v("#")]),e._v("Monitoring the Node")]),o("p",[e._v("RNode features integration with Prometheus. "),o("g-link",{attrs:{to:"https://github.com/rchain/rchain/blob/master/docker/node/README.md",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("These instructions")]),e._v(" describe a method for getting started with RNode metrics collection and display using Prometheus via Docker-compose.")],1),o("h2",{attrs:{id:"visualizing-the-blockchain"}},[o("a",{attrs:{href:"#visualizing-the-blockchain","aria-hidden":"true"}},[e._v("#")]),e._v("Visualizing the blockchain")]),o("p",[e._v("To support debugging we have a process to collect information from the node and use it in graphviz to create a visualization of the DAG. Below are instructions for two methods for using this tool.")]),o("h2",{attrs:{id:"visualizing-the-blockchain-when-there-are-6000-lines"}},[o("a",{attrs:{href:"#visualizing-the-blockchain-when-there-are-6000-lines","aria-hidden":"true"}},[e._v("#")]),e._v("Visualizing the blockchain when there are >6,000 lines")]),o("p",[e._v("Once an active network has been running for a few hours, your call to vdag will likely generate >6,000 lines of output. In this scenario, you will need to have installed the Graphviz software and use it to create a .png file. Please see "),o("a",{attrs:{href:"https://www.graphviz.org/download/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://www.graphviz.org/download/")]),e._v(" for information about installing and running Graphviz.")]),o("p",[e._v("Once installed use the following command to generate a .png file based on vdag output.")]),o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("rnode vdag "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" dot -Tpng "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("vdag.png")])]),o("h2",{attrs:{id:"creating-a-private-blockchain"}},[o("a",{attrs:{href:"#creating-a-private-blockchain","aria-hidden":"true"}},[e._v("#")]),e._v("Creating a private blockchain")]),o("p",[e._v("You can create your own blockchain network.")]),o("p",[e._v("Prerequisites for a private blockchain")]),o("ul",[o("li",[e._v("1 bootstrap node")]),o("li",[e._v("2 other node instances running on a network where they can communicate with each other (peers of each other).")]),o("li",[e._v("Keys for the node instances (these will be required for signing and creating the bond.txt file)")]),o("li",[e._v("A bond.txt file accessible by all node instances. You can either supply it, or use the system generated bonds file.")]),o("li",[e._v("A Rholang file to deploy across the network.")])]),o("p",[e._v("Steps to create a private blockchain")]),o("ul",[o("li",[e._v("Start the bootstrap node. This is the 1 node operating in standalone mode.")]),o("li",[e._v("Include the address of the bootstrap node in your run command for the peer nodes.")])])])}),[],!1,null,null,null);"function"==typeof h&&h(p),"function"==typeof u&&u(p);t.default=p.exports}}]);