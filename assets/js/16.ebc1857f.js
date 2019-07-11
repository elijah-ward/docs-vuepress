(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{297:function(e,r,t){"use strict";t.r(r);var o=t(0),a=Object(o.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"azure-log-storage-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#azure-log-storage-plugin","aria-hidden":"true"}},[e._v("#")]),e._v(" Azure Log Storage Plugin")]),e._v(" "),t("p",[e._v("The Azure Storage plugin uses Azure Storage to store execution log files, for backup or for a cluster environment behavior.")]),e._v(" "),t("p",[e._v("The source code lives at "),t("a",{attrs:{href:"https://github.com/rundeck-plugins/rundeck-azure-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/rundeck-plugins/rundeck-azure-plugin"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"enable-the-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable-the-plugin","aria-hidden":"true"}},[e._v("#")]),e._v(" Enable the plugin")]),e._v(" "),t("p",[e._v("Enable the ExecutionFileStorage provider named azure-storage in your "),t("code",[e._v("rundeck-config.properties")]),e._v(" file:")]),e._v(" "),t("p",[t("code",[e._v("rundeck.execution.logs.fileStoragePlugin=azure-storage")])]),e._v(" "),t("h3",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),t("p",[e._v("To configure the Azure Storage Account credentials you can set these property values:")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("storageAccount")]),e._v(": Azure Storage Account")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("accessKey")]),e._v(": Azure Storage Access Key")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("path")]),e._v(": The path in the bucket to store a log file.")]),e._v(" "),t("p",[e._v("You can use these expansion variables:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("${job.execid}")]),e._v(" = execution ID")]),e._v(" "),t("li",[t("code",[e._v("${job.project}")]),e._v(" = project name")]),e._v(" "),t("li",[t("code",[e._v("${job.id}")]),e._v(" = job UUID (or blank).")]),e._v(" "),t("li",[t("code",[e._v("${job.group}")]),e._v(" = job group (or blank).")]),e._v(" "),t("li",[t("code",[e._v("${job.name}")]),e._v(" = job name (or blank)")])])])]),e._v(" "),t("p",[e._v("You can define the configuration values in "),t("code",[e._v("framework.properties")]),e._v(" by prefixing the property name with the stem: "),t("code",[e._v("framework.plugin.ExecutionFileStorage.azure-storage")]),e._v(". Or in a project's "),t("code",[e._v("project.properties")]),e._v(" file with the stem "),t("code",[e._v("project.plugin.ExecutionFileStorage.azure-storage")]),e._v(".")]),e._v(" "),t("p",[e._v("For example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("#storage.storageAccount and storage.accessKey\nframework.plugin.ExecutionFileStorage.azure-storage.storageAccount=<ACCOUNT-NAME>\nframework.plugin.ExecutionFileStorage.azure-storage.accessKey=<ACCESS-KEY>\n\n#path to store the logs\nframework.plugin.ExecutionFileStorage.azure-storage.path=logs/${job.project}/${job.execid}.log\n\n")])])])])},[],!1,null,null,null);r.default=a.exports}}]);