(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{630:function(e,t,a){"use strict";a.r(t);var n=a(0),r=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"plugin-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-control","aria-hidden":"true"}},[e._v("#")]),e._v(" Plugin Control")]),e._v(" "),a("p",[e._v("By default all plugins are enabled for each project.\nYou may need to restrict access to plugins for certain projects.")]),e._v(" "),a("p",[e._v("Only enabled plugins are visible to job writers in the Job Edit page.")]),e._v(" "),a("h2",{attrs:{id:"graphical-interface-enterprise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graphical-interface-enterprise","aria-hidden":"true"}},[e._v("#")]),e._v(" Graphical Interface (Enterprise)")]),e._v(" "),a("p",[e._v("The Plugin Control page lets you enable and disable specific plugins.")]),e._v(" "),a("p",[e._v('Go to the "Project Settings" and then choose "Plugins Control" menu item.')]),e._v(" "),a("p",[e._v("Uncheck any plugin you wish to disable.")]),e._v(" "),a("h2",{attrs:{id:"cli-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli-usage","aria-hidden":"true"}},[e._v("#")]),e._v(" CLI Usage")]),e._v(" "),a("p",[e._v("Use the "),a("code",[e._v("rd projects configure set")]),e._v(" command to define the "),a("code",[e._v("disabled.plugins")]),e._v(" property.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("rd projects configure "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" -p MyProject -- "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --disabled.plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("pluginA,pluginB\n")])])]),a("h2",{attrs:{id:"api-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-usage","aria-hidden":"true"}},[e._v("#")]),e._v(" API Usage")]),e._v(" "),a("p",[e._v("Project configuration can be achieved via the "),a("router-link",{attrs:{to:"/api/rundeck-api.html"}},[e._v("API")]),e._v(".")],1),e._v(" "),a("p",[a("router-link",{attrs:{to:"/api/rundeck-api.html#project-configuration"}},[e._v("Project configuration")])],1),e._v(" "),a("pre",[a("code",[e._v('PUT /api/13/project/MyProject/config\nContent-Type: application/json\n\n{\n    "disabled.plugins":"pluginA,pluginB"\n}\n')])])])},[],!1,null,null,null);t.default=r.exports}}]);