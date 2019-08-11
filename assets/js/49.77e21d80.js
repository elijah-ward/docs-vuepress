(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{493:function(e,t,r){"use strict";r.r(t);var a=r(0),o=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"azure-log-storage-plugin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#azure-log-storage-plugin","aria-hidden":"true"}},[e._v("#")]),e._v(" Azure Log Storage Plugin")]),e._v(" "),r("p",[e._v("The Azure Storage plugin uses Azure Storage to store execution log files, for backup or for a cluster environment behavior.")]),e._v(" "),r("p",[e._v("The source code lives at "),r("a",{attrs:{href:"https://github.com/rundeck-plugins/rundeck-azure-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/rundeck-plugins/rundeck-azure-plugin"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"enable-the-plugin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enable-the-plugin","aria-hidden":"true"}},[e._v("#")]),e._v(" Enable the plugin")]),e._v(" "),r("p",[e._v("Enable the ExecutionFileStorage provider named azure-storage in your "),r("code",[e._v("rundeck-config.properties")]),e._v(" file:")]),e._v(" "),r("p",[r("code",[e._v("rundeck.execution.logs.fileStoragePlugin=azure-storage")])]),e._v(" "),r("h3",{attrs:{id:"configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),r("p",[e._v("To configure the Azure Storage Account credentials you can set these property values:")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("storageAccount")]),e._v(": Azure Storage Account")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("accessKey")]),e._v(": Azure Storage Access Key")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("path")]),e._v(": The path in the bucket to store a log file.")]),e._v(" "),r("p",[e._v("You can use these expansion variables:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("${job.execid}")]),e._v(" = execution ID")]),e._v(" "),r("li",[r("code",[e._v("${job.project}")]),e._v(" = project name")]),e._v(" "),r("li",[r("code",[e._v("${job.id}")]),e._v(" = job UUID (or blank).")]),e._v(" "),r("li",[r("code",[e._v("${job.group}")]),e._v(" = job group (or blank).")]),e._v(" "),r("li",[r("code",[e._v("${job.name}")]),e._v(" = job name (or blank)")])])])]),e._v(" "),r("p",[e._v("You can define the configuration values in "),r("code",[e._v("framework.properties")]),e._v(" by prefixing the property name with the stem: "),r("code",[e._v("framework.plugin.ExecutionFileStorage.azure-storage")]),e._v(". Or in a project's "),r("code",[e._v("project.properties")]),e._v(" file with the stem "),r("code",[e._v("project.plugin.ExecutionFileStorage.azure-storage")]),e._v(".")]),e._v(" "),r("p",[e._v("For example:")]),e._v(" "),r("div",{staticClass:"language-properties extra-class"},[r("pre",{pre:!0,attrs:{class:"language-properties"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#storage.storageAccount and storage.accessKey")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("framework.plugin.ExecutionFileStorage.azure-storage.storageAccount")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("<ACCOUNT-NAME>")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("framework.plugin.ExecutionFileStorage.azure-storage.accessKey")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("<ACCESS-KEY>")]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#path to store the logs")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("framework.plugin.ExecutionFileStorage.azure-storage.path")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("logs/${job.project}/${job.execid}.log")]),e._v("\n\n")])])])])},[],!1,null,null,null);t.default=o.exports}}]);