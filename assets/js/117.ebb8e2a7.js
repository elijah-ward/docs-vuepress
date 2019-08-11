(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{632:function(t,a,e){"use strict";e.r(a);var n=e(0),s=Object(n.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"plugin-annotations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugin-annotations","aria-hidden":"true"}},[t._v("#")]),t._v(" Plugin Annotations")]),t._v(" "),e("h2",{attrs:{id:"about"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#about","aria-hidden":"true"}},[t._v("#")]),t._v(" About")]),t._v(" "),e("p",[t._v("Some Rundeck Plugins allow you to use annotations to add\n"),e("router-link",{attrs:{to:"/developer/01-plugin-development.html#plugin-descriptions"}},[t._v("description metadata")]),t._v("\nabout your plugin to the class\ndefinition itself, and Rundeck will extract that metadata for use in\ndisplaying the plugin information and configuration properties in the GUI, as\nwell as for applying the runtime configuration values to your plugin class\ninstance when it is being executed.")],1),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",[t._v("ResourceModelSource, NodeExecutor and FileCopier plugins currently do not support description annotations.")])]),t._v(" "),e("h2",{attrs:{id:"plugin-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugin-description","aria-hidden":"true"}},[t._v("#")]),t._v(" Plugin Description")]),t._v(" "),e("p",[t._v("You can define the display name, and descriptive text about your plugin by adding a\n"),e("a",{attrs:{href:"https://static.javadoc.io/org.rundeck/rundeck-core/3.1.0-20190731/com/dtolabs/rundeck/plugins/descriptions/PluginDescription.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PluginDescription"),e("OutboundLink")],1),t._v(" annotation to your plugin class.")]),t._v(" "),e("p",[t._v("Attributes of "),e("code",[t._v("@PluginDescription")]),t._v(":")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("title")]),t._v(" - the display name for your plugin")]),t._v(" "),e("li",[e("code",[t._v("description")]),t._v(" - descriptive text shown next to the display name")])]),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Plugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myplugin"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" service"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceNameConstants")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WorkflowStep")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PluginDescription")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("title"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My Plugin"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" description"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Performs a custom step"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyPlugin")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StepPlugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("em",[t._v("Note:")]),t._v(" If you do not add this annotation, the plugin display name will be the same as the provider name, and will have\nno descriptive text when displayed.")]),t._v(" "),e("h2",{attrs:{id:"plugin-provider-metadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugin-provider-metadata","aria-hidden":"true"}},[t._v("#")]),t._v(" Plugin Provider Metadata")]),t._v(" "),e("p",[t._v("You can supply additional metadata about the plugin implementation, using the\n"),e("a",{attrs:{href:"https://static.javadoc.io/org.rundeck/rundeck-core/3.1.0-20190731/com/dtolabs/rundeck/plugins/descriptions/PluginMetadata.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("@PluginMetadata"),e("OutboundLink")],1),t._v(" annotation.\nYou can provide multiple metadata entries with a "),e("a",{attrs:{href:"https://static.javadoc.io/org.rundeck/rundeck-core/3.1.0-20190731/com/dtolabs/rundeck/plugins/descriptions/PluginMeta.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("@PluginMeta"),e("OutboundLink")],1),t._v("\nannotation, which can contain multiple "),e("a",{attrs:{href:"https://static.javadoc.io/org.rundeck/rundeck-core/3.1.0-20190731/com/dtolabs/rundeck/plugins/descriptions/PluginMetadata.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("@PluginMetadata"),e("OutboundLink")],1),t._v(" values.")]),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Plugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myplugin"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" service"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceNameConstants")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WorkflowStep")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PluginMetadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"anykey"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"anyvalue"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyPlugin")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StepPlugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or with multiple entries:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Plugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myplugin"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" service"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceNameConstants")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WorkflowStep")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PluginMeta")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PluginMetadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"anykey"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"anyvalue"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PluginMetadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"otherkey"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"othervalue"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyPlugin")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StepPlugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("See "),e("router-link",{attrs:{to:"/developer/01-plugin-development.html#provider-metadata-1"}},[t._v("Provider Metadata")]),t._v(" for information about what metadata keys may be used.")],1),t._v(" "),e("h2",{attrs:{id:"plugin-properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugin-properties","aria-hidden":"true"}},[t._v("#")]),t._v(" Plugin Properties")]),t._v(" "),e("p",[t._v("You can annotate individual fields in your class to define the configuration\nproperties of your class. These are the supported Java types for annotated fields:")]),t._v(" "),e("ul",[e("li",[t._v("String")]),t._v(" "),e("li",[t._v("Boolean/boolean")]),t._v(" "),e("li",[t._v("Integer/integer, Long/long")]),t._v(" "),e("li",[e("code",[t._v("Set")]),t._v(", "),e("code",[t._v("List")]),t._v(", "),e("code",[t._v("String[]")]),t._v(" (if used with "),e("code",[t._v("@SelectValues(multiOption = true)")]),t._v(")")])]),t._v(" "),e("p",[t._v("When your plugin is executed, the fields will be set to the appropriate values\nbased on their default value, scope, and any value set by the user in the\nworkflow configuration.")]),t._v(" "),e("p",[t._v("These annotation classes are used:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://static.javadoc.io/org.rundeck/rundeck-core/3.1.0-20190731/com/dtolabs/rundeck/plugins/descriptions/PluginProperty.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PluginProperty"),e("OutboundLink")],1),t._v(" - Declares a class field as a plugin configuration property")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://static.javadoc.io/org.rundeck/rundeck-core/3.1.0-20190731/com/dtolabs/rundeck/plugins/descriptions/SelectValues.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SelectValues"),e("OutboundLink")],1),t._v(' - Declares a String property to be a "Select" property, which defines a set of input values that can be chosen from a list. Can be used with '),e("code",[t._v("multiOption")]),t._v(" attribute to declare a "),e("code",[t._v("Set")]),t._v(", "),e("code",[t._v("List")]),t._v(" or "),e("code",[t._v("String[]")]),t._v(" and allow multiple values to be chosen. If "),e("code",[t._v("multiOption")]),t._v(" is used with a String, the value will be the values joined with a "),e("code",[t._v(",")]),t._v(" (comma).")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://static.javadoc.io/org.rundeck/rundeck-core/3.1.0-20190731/com/dtolabs/rundeck/plugins/descriptions/TextArea.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TextArea"),e("OutboundLink")],1),t._v(" - Declares a String property to be rendered as a multi-line text area in the Rundeck GUI.")])]),t._v(" "),e("p",[t._v("Attributes:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("@PluginProperty")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("name")]),t._v(" - the property identifier name")]),t._v(" "),e("li",[e("code",[t._v("title")]),t._v(" - the property display name")]),t._v(" "),e("li",[e("code",[t._v("description")]),t._v(" - descriptive text")]),t._v(" "),e("li",[e("code",[t._v("defaultValue")]),t._v(" - default value")]),t._v(" "),e("li",[e("code",[t._v("required")]),t._v(" - (boolean) whether the property is required to have an input value. Default: false.")]),t._v(" "),e("li",[e("code",[t._v("scope")]),t._v(" (PropertyScope) the resolution scope for the property value")])])]),t._v(" "),e("li",[e("code",[t._v("@SelectValues")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("values")]),t._v(" (String[]) the set of values that can be chosen")]),t._v(" "),e("li",[e("code",[t._v("freeSelect")]),t._v(" (boolean) whether the user can enter values not in the list. Default: false.")]),t._v(" "),e("li",[e("code",[t._v("multiOption")]),t._v(" (boolean) whether multiple values can be selected as checkboxes, cannot be used with freeSelect. Default: false.")])])])]),t._v(" "),e("p",[t._v("Examples:")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PluginProperty")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("title "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" description "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"What is your name?"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" required "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PluginProperty")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("title "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Age"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" description "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"How old are you?"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" amount"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PluginProperty")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("title "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Favorite Fruit"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                description "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"What is your favorite fruit?"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                defaultValue "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"banana"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SelectValues")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("values "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"banana"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lemon"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"orange"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" freeSelect "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" fruit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"property-scopes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#property-scopes","aria-hidden":"true"}},[t._v("#")]),t._v(" Property Scopes")]),t._v(" "),e("p",[t._v("You can define the scope for a property by adding "),e("code",[t._v("scope")]),t._v(" to the PluginProperty annotation. Refer to the class "),e("a",{attrs:{href:"https://static.javadoc.io/org.rundeck/rundeck-core/3.1.0-20190731/com/dtolabs/rundeck/core/plugins/configuration/PropertyScope.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PropertyScope"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("The default effective scope if you do not specify it in the annotation is "),e("code",[t._v("InstanceOnly")]),t._v(".")]),t._v(" "),e("p",[t._v("For more information see "),e("router-link",{attrs:{to:"/developer/01-plugin-development.html#property-scopes"}},[t._v("Property Scopes")]),t._v(".")],1)])},[],!1,null,null,null);a.default=s.exports}}]);