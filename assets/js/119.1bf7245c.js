(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{625:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"resource-model-source-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resource-model-source-plugin","aria-hidden":"true"}},[e._v("#")]),e._v(" Resource Model Source Plugin")]),e._v(" "),a("h2",{attrs:{id:"about"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#about","aria-hidden":"true"}},[e._v("#")]),e._v(" About")]),e._v(" "),a("p",[e._v("Resource Model Sources provide the means to retrieve Node resources for a Project.\nYou can implement a Resource Model Source using a "),a("a",{attrs:{href:"#java-plugin-type"}},[e._v("Java Plugin Type")]),e._v("\nor a "),a("a",{attrs:{href:"#script-plugin-type"}},[e._v("Script Plugin Type")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"plugin-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Plugin configuration")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("ResourceModelSource")]),e._v(" "),a("a",{attrs:{href:"https://static.javadoc.io/org.rundeck/rundeck-core/3.1.0-20190731/com/dtolabs/rundeck/core/resources/ResourceModelSource.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("(javadoc)"),a("OutboundLink")],1),e._v(" service allows the plugins to be configured via the Rundeck Web GUI. You are thus able to declare configuration properties for\nyour plugin, which will be displayed as a web form when the Project is configured, or can be manually configured in the "),a("code",[e._v("project.properties")]),e._v(" file.")]),e._v(" "),a("h2",{attrs:{id:"java-plugin-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-plugin-type","aria-hidden":"true"}},[e._v("#")]),e._v(" Java Plugin Type")]),e._v(" "),a("p",[e._v("A ResourceModelSource provider is actually a Factory class.\nAn instance of your ResourceModelSource provider will be\nre-used, so each time a new ResourceModelSource with a new configuration is required,\nyour Factory class will be invoked to produce it.")]),e._v(" "),a("p",[e._v("Your provider class must implement the interface\n"),a("a",{attrs:{href:"https://static.javadoc.io/org.rundeck/rundeck-core/3.1.0-20190731/com/dtolabs/rundeck/core/resources/ResourceModelSourceFactory.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ResourceModelSourceFactory"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ResourceModelSourceFactory")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * Return a resource model source for the given configuration\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ResourceModelSource")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("createResourceModelSource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Properties")]),e._v(" configuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("throws")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ConfigurationException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h3",{attrs:{id:"plugin-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Plugin properties")]),e._v(" "),a("p",[e._v("See "),a("router-link",{attrs:{to:"/developer/01-plugin-development.html#plugin-descriptions"}},[e._v("Plugin Development - Java Plugins - Descriptions")]),e._v("\nto learn how to create configuration properties for your ResourceModelSource plugin.")],1),e._v(" "),a("h2",{attrs:{id:"script-plugin-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#script-plugin-type","aria-hidden":"true"}},[e._v("#")]),e._v(" Script Plugin Type")]),e._v(" "),a("p",[e._v("See the "),a("router-link",{attrs:{to:"/developer/01-plugin-development.html#script-plugin-development"}},[e._v("Script Plugin Development")]),e._v("\nfor the basics of developing script-based plugins for Rundeck.")],1),e._v(" "),a("h3",{attrs:{id:"instance-scope-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instance-scope-properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Instance scope properties")]),e._v(" "),a("p",[e._v("Instance scoped properties for ResourceModelSources are loaded from the project's Resource Model Source entries. A project can define multiple entries, and at execution time, the Instance scoped values come from those entries.")]),e._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("p",[e._v("Here is an example "),a("code",[e._v("plugin.yaml")]),e._v(' script-based ResourceModelSource plugin\ndeclaring a provider called "mysource" that produces resource-format '),a("code",[e._v("resourceyaml")]),e._v(" output.\nThe provider declares three config properties (account, url, region)\nand illustrates the use\nof three different types (Integer, String, FreeSelect).")]),e._v(" "),a("p",[e._v("Example: plugin.yaml")]),e._v(" "),a("div",{staticClass:"language-yaml .numberLines extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" My Resource Model Source\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.0")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("rundeckPluginVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.0")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("author")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" alexh\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 05/10/12\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("providers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" mysource\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("service")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" ResourceModelSource\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("plugin-type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" script\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("script-interpreter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" bash "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("c\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("script-file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" nodes.sh\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("resource-format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" resourceyaml\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Integer\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" account\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Account\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Enter the account number.\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" String\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" url\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" URL\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Enter the URL to the inventory service.\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" FreeSelect\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" region\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Region\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Select a region.\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("required")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" east\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" east"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("north"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("south"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("west\n")])])]),a("p",[e._v("The "),a("code",[e._v("script-file")]),e._v(' entry on line 11 references a script called "nodes.sh" referencing\nthe plugin properties (see script below).')]),e._v(" "),a("p",[e._v("Example script-file: nodes.sh")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[e._v("#!/usr/bin/env bash")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# variables set by plugin properties:")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${RD_CONFIG_ACCOUNT"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":?")]),e._v('"account plugin property not specified"}')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${RD_CONFIG_REGION"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":?")]),e._v('"region plugin property not specified"}')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${RD_CONFIG_URL"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":?")]),e._v('"url plugin property not specified"}')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Generate node data here.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exit")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$?")]),e._v("\n")])])]),a("h3",{attrs:{id:"provider-script-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider-script-requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Provider Script Requirements")]),e._v(" "),a("p",[e._v("The ResourceModelSource service has expectations about the way your provider script behaves.")]),e._v(" "),a("p",[e._v("Exit code:")]),e._v(" "),a("ul",[a("li",[e._v("Exit code of 0 indicates success.")]),e._v(" "),a("li",[e._v("Any other exit code indicates failure.")])]),e._v(" "),a("p",[e._v("Script output:")]),e._v(" "),a("ul",[a("li",[e._v("All output on "),a("code",[e._v("STDOUT")]),e._v(" will be captured and passed to a\n"),a("router-link",{attrs:{to:"/developer/03-model-source-format-parser-generator-plugins.html#resourceformatparser"}},[e._v("ResourceFormatParser")]),e._v(" for the specified "),a("code",[e._v("resource-format")]),e._v(" to create the Node definitions.")],1)])])},[],!1,null,null,null);t.default=r.exports}}]);