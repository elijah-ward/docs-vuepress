(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{392:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"access-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#access-control","aria-hidden":"true"}},[t._v("#")]),t._v(" Access control")]),t._v(" "),s("p",[t._v("Access to jobs and commands is managed in access control\npolicies defined using the "),s("router-link",{attrs:{to:"/manpages/man5/aclpolicy-v10.html"}},[t._v("aclpolicy")]),t._v(" document format.\nThe aclpolicy file contains rules describing what user\ngroups are allowed to perform which actions. The\n"),s("router-link",{attrs:{to:"/administration/security/authorization.html"}},[t._v("Access control policy")]),t._v("\nchapter in the Administration Guide\ncovers this in detail.")],1),t._v(" "),s("p",[t._v("The administrator will use aclpolicy to define two levels of\naccess. The first level, has limited privilege and allows for just\nrunning jobs. The second level, is administrative and can modify job\ndefinitions.")]),t._v(" "),s("p",[t._v('Policies can be organized into more than one file to help organize\naccess by group or pattern of use. The normal Rundeck install will\ndefine two user groups: "admin" and "noc" and have a generated a policy\nfor the "admin" group.')]),t._v(" "),s("p",[t._v('The Acme administrator decides to create a policy that allows users in\nthe "noc" group to run commands just in the\n"web" Job group. We can employ the "noc" login and group as\nit was also included in the normal install.')]),t._v(" "),s("p",[t._v('To create the aclpolicy file for the "noc" group:')]),t._v(" "),s("p",[t._v("File listing: noc.aclpolicy")]),t._v(" "),s("div",{staticClass:"language-yaml .numberLines extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Acess for noc user.\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("project")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.*'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("resource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" read\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("job")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("match")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'web'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.*'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("by")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" noc\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("It is not required to restart Rundeck after changes to .aclpolicy files are made.")])]),t._v(" "),s("p",[t._v('Login as the "noc" user (the password is probably "noc").\nJust the Jobs in the "web" group are\ndisplayed in the Jobs page. The "noc" user is not allowed to access\njobs outside of "web" group.')]),t._v(" "),s("p",[t._v('Notice the absence of the "New Job" button that would be displayed if\nlogged in as "admin". Job creation is an action not granted to\n"noc".\nNotice also, listed Jobs do not include an icon for editing the Job.')]),t._v(" "),s("h2",{attrs:{id:"command-acl-policy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-acl-policy","aria-hidden":"true"}},[t._v("#")]),t._v(" Command ACL policy")]),t._v(" "),s("p",[t._v("File listing: noc.aclpolicy")]),t._v(" "),s("div",{staticClass:"language-yaml .numberLines extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Acess for noc users.\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("project")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.*'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("resource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" read\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("job")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("match")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'web'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.*'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("adhoc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("kill"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("match")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nodename")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.*'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("contains")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tags")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" www\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("by")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" noc\n")])])]),s("p",[t._v('The users in the "dev" group are granted access\nto run the "Status" Job but are not allowed to\nrun the Restart job. They are allowed to view the\ndefinition of the Restart job.')]),t._v(" "),s("p",[t._v("File listing: dev.aclpolicy")]),t._v(" "),s("div",{staticClass:"language-yaml .numberLines extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Acess for dev users.\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("project")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.*'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("resource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" read\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("job")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("equals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'web'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Status'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("equals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'web'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Restart'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("by")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dev\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);