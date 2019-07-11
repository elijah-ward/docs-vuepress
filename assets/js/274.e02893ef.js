(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{222:function(e,a,t){"use strict";t.r(a);var s=t(0),n=Object(s.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commands","aria-hidden":"true"}},[e._v("#")]),e._v(" Commands")]),e._v(" "),t("p",[e._v("Sometimes the need to execute an arbitrary command comes up.\nYou might need to check a bunch of systems to find out if they\nare running correctly, see their load, check resources or perhaps\ncollect information.")]),e._v(" "),t("p",[e._v("You can execute commands via the GUI or using rundeck command line interface.")]),e._v(" "),t("h2",{attrs:{id:"using-the-gui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-the-gui","aria-hidden":"true"}},[e._v("#")]),e._v(" Using the GUI")]),e._v(" "),t("p",[e._v("First go to the "),t("router-link",{attrs:{to:"/manual/06-commands.html"}},[e._v("Commands page")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"filter-nodes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#filter-nodes","aria-hidden":"true"}},[e._v("#")]),e._v(" Filter nodes")]),e._v(" "),t("p",[e._v('To filter the nodes type in an expression or choose a saved filter.\nBelow, the nodes tagged "www" are filtered:')]),e._v(" "),t("p",[t("img",{attrs:{src:"/figures/fig0602.png",alt:"Anvils filtered list"}})]),e._v(" "),t("p",[e._v("Filtering with tags provides an abstraction over hostnames\nand lets the administrator think about command execution using formalized\nclassifications. New nodes can be added, others decommissioned while\nothers given new purpose, and the procedures stay unchanged because\nthey are bound to the filtering criteria.\nWith tags that describe application role, commands can be targeted\nto specific sub sets of nodes without hard coding any\nhostnames.")]),e._v(" "),t("p",[e._v("This simple classification scheme will allow the developers and\nadministrators to share a common vocabulary when talking about the kinds\nof nodes supporting the Anvils application.")]),e._v(" "),t("h3",{attrs:{id:"execute-command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execute-command","aria-hidden":"true"}},[e._v("#")]),e._v(" Execute command")]),e._v(" "),t("p",[e._v('To execute a command, type in the command string in text field labeled "Command":')]),e._v(" "),t("p",[t("img",{attrs:{src:"/figures/fig0610.png",alt:"Command page"}})]),e._v(" "),t("p",[e._v("The output will appear below:")]),e._v(" "),t("p",[t("img",{attrs:{src:"/figures/fig0611.png",alt:"Command output"}})]),e._v(" "),t("h2",{attrs:{id:"using-the-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-the-cli","aria-hidden":"true"}},[e._v("#")]),e._v(" Using the CLI")]),e._v(" "),t("p",[e._v("The "),t("a",{attrs:{href:"https://rundeck.github.io/rundeck-cli/",target:"_blank",rel:"noopener noreferrer"}},[e._v("rd adhoc"),t("OutboundLink")],1),e._v(" command provides a command line interface to run commands.")]),e._v(" "),t("h3",{attrs:{id:"filter-nodes-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#filter-nodes-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Filter nodes")]),e._v(" "),t("p",[e._v("First, you must filter the nodes. The "),t("code",[e._v("rd nodes")]),e._v(" command uses filter flag: "),t("code",[e._v("-F")]),e._v(".")]),e._v(" "),t("p",[e._v("Here, the "),t("code",[e._v("tags")]),e._v(" keyword is used to include nodes tagged 'www':")]),e._v(" "),t("div",{staticClass:"language-{.bash} extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rd nodes -p anvils -F tags=www\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("www1.anvils.com www2.anvils.com\n")])])]),t("p",[e._v('List the nodes tagged "app":')]),e._v(" "),t("div",{staticClass:"language-{.bash} extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rd nodes -p anvils -F tags=app\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("app1.anvils.com app2.anvils.com\n")])])]),t("p",[e._v("Use the "),t("code",[e._v("+")]),e._v(" (AND) operator to list the web and app nodes:")]),e._v(" "),t("div",{staticClass:"language-{.bash} extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rd nodes -p anvils -F tags=www+app\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("www1.anvils.com www2.anvils.com app1.anvils.com app2.anvils.com\n")])])]),t("p",[e._v("Exclude the web and app nodes:")]),e._v(" "),t("div",{staticClass:"language-{.bash} extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rd nodes -p anvils -F '!tags=www+app'\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("db1.anvils.com\n")])])]),t("h3",{attrs:{id:"execute-command-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execute-command-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Execute command")]),e._v(" "),t("p",[e._v("Use "),t("code",[e._v("rd adhoc")]),e._v(" to execute adhoc commands and scripts.")]),e._v(" "),t("p",[e._v("Specify the command string you wish to execute on the filtered node set after the "),t("code",[e._v("--")]),e._v(".\nBelow the "),t("code",[e._v("id")]),e._v(" command is dispatched:")]),e._v(" "),t("div",{staticClass:"language-{.bash} extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rd adhoc -p anvils -F tags=www -- id\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# Immediate execution scheduled (148)\n148 running 2016-11-3017:21:10-0800 - http://madmartigan.local:4440/project/deps/execution/show/148 adhoc whoami\n")])])]),t("p",[e._v("Typically, you will want to see the output from the running command.\nAdd the --follow flag to see the output.")]),e._v(" "),t("div",{staticClass:"language-{.bash} extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rd adhoc -p anvils --follow -F tags=www -- whoami\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# Started execution 147 running 2016-11-3017:20:43-0800 - http://madmartigan.local:4440/project/deps/execution/show/147 adhoc whoami\ngreg\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);