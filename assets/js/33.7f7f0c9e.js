(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{342:function(e,t,r){"use strict";r.r(t);var o=r(0),n=Object(o.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"bundled-plugins"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bundled-plugins","aria-hidden":"true"}},[e._v("#")]),e._v(" Bundled Plugins")]),e._v(" "),r("p",[e._v("Rundeck comes with several plugins out of the box. "),r("em",[e._v("Built-in")]),e._v(" plugins are part of the core installation, and do not\nhave an associated plugin file. "),r("em",[e._v("Bundled")]),e._v(" plugins come packaged in a plugin file,\nand are installed in the "),r("code",[e._v("libext")]),e._v(" dir automatically at installation time.")]),e._v(" "),r("h2",{attrs:{id:"ssh-plugins"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssh-plugins","aria-hidden":"true"}},[e._v("#")]),e._v(" SSH Plugins")]),e._v(" "),r("p",[e._v("Defines SSH Node Executor and SCP File Copier.")]),e._v(" "),r("ul",[r("li",[e._v("See "),r("router-link",{attrs:{to:"/administration/projects/node-execution/ssh.html"}},[e._v("SSH Plugins")])],1)]),e._v(" "),r("p",[e._v("File: "),r("em",[e._v("none")]),e._v(" (built-in)")]),e._v(" "),r("h2",{attrs:{id:"built-in-resource-model-sources"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#built-in-resource-model-sources","aria-hidden":"true"}},[e._v("#")]),e._v(" Built-in Resource Model Sources")]),e._v(" "),r("p",[e._v("Rundeck comes with four built-in Resource Model Source providers, see "),r("router-link",{attrs:{to:"/administration/projects/resource-model-sources/builtin.html"}},[e._v("Resource Model Source Plugins")]),e._v(":")],1),e._v(" "),r("ul",[r("li",[e._v("File: Parses a file in one of the supported "),r("a",{attrs:{href:"#built-in-resource-model-formats"}},[e._v("Model Source Formats")])]),e._v(" "),r("li",[e._v("Directory: Scans all files in a directory in one of the supported formats")]),e._v(" "),r("li",[e._v("URL: Loads a file from a URL in one of the supported formats")])]),e._v(" "),r("p",[e._v("File: "),r("em",[e._v("none")]),e._v(" (built-in)")]),e._v(" "),r("h2",{attrs:{id:"built-in-resource-model-formats"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#built-in-resource-model-formats","aria-hidden":"true"}},[e._v("#")]),e._v(" Built-in Resource Model Formats")]),e._v(" "),r("p",[e._v("Rundeck comes with three Resource Model Format plugins, see [Resource Model Source Plugins](/administration/projects/resource-model-sources/builtin.md#resource-model-document-formats]:")]),e._v(" "),r("ul",[r("li",[e._v("XML: the "),r("router-link",{attrs:{to:"/manpages/man5/resource-v13.html"}},[e._v("resourcexml")]),e._v(" format")],1),e._v(" "),r("li",[e._v("YAML: the "),r("router-link",{attrs:{to:"/manpages/man5/resource-yaml-v13.html"}},[e._v("resourceyaml")]),e._v(" format")],1),e._v(" "),r("li",[e._v("JSON: the "),r("router-link",{attrs:{to:"/manpages/man5/resource-json-v10.html"}},[e._v("resourcejson")]),e._v(" format")],1)]),e._v(" "),r("p",[e._v("File: "),r("em",[e._v("none")]),e._v(" (built-in)")]),e._v(" "),r("h2",{attrs:{id:"script-plugin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#script-plugin","aria-hidden":"true"}},[e._v("#")]),e._v(" Script Plugin")]),e._v(" "),r("p",[e._v("Defines Script Node Executor and Script File Copier.")]),e._v(" "),r("p",[e._v("For more detail see "),r("router-link",{attrs:{to:"/administration/projects/node-execution/script.html"}},[e._v("Script Plugin")]),e._v(".")],1),e._v(" "),r("p",[e._v("Executes an external script file to perform the command, useful for developing your own plugin with the [Script Plugin Development](/developer/01-plugin-development.md#script-plugin-development] model.")]),e._v(" "),r("p",[e._v("File: "),r("code",[e._v("rundeck-script-plugin-${VERSION_FULL}.jar")])]),e._v(" "),r("h2",{attrs:{id:"stub-plugin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stub-plugin","aria-hidden":"true"}},[e._v("#")]),e._v(" Stub Plugin")]),e._v(" "),r("p",[e._v("Provides a Node Executor, File Copier, and Resource Model Source. This plugin can be used for testing.")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("stub-plugin")]),e._v(" includes these providers:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("stub")]),e._v(" for the NodeExecutor service")]),e._v(" "),r("li",[r("code",[e._v("stub")]),e._v(" for the FileCopier service")]),e._v(" "),r("li",[r("code",[e._v("stub")]),e._v(" for the ResourceModelSource service")])]),e._v(" "),r("p",[e._v("(Refer to [Configuring - Node Execution](/administration/configuration/plugins/configuring.md#node-execution] to enable them.)")]),e._v(" "),r("p",[e._v("This plugin does not actually perform any remote file copy or command execution,\ninstead it simply echoes the command that was supposed to be executed, and\npretends to have copied a file.")]),e._v(" "),r("p",[e._v("This is intended for use in testing new Nodes, Jobs or Workflow sequences without\naffecting any actual runtime environment.")]),e._v(" "),r("p",[e._v("You can also test some failure scenarios by configuring the following node attributes:")]),e._v(" "),r("p",[r("code",[e._v("stub-exec-success")]),e._v('="true/false"')]),e._v(" "),r("p",[e._v(": If set to false, the stub command execution will simulate command failure")]),e._v(" "),r("p",[r("code",[e._v("stub-result-code")])]),e._v(" "),r("p",[e._v(": Simulate the return result code from execution")]),e._v(" "),r("p",[e._v("You could, for example, disable or test an entire project's workflows or jobs by\nsimply setting the "),r("code",[e._v("project.properties")]),e._v(" node executor provider to "),r("code",[e._v("stub")]),e._v(".")]),e._v(" "),r("p",[e._v("File: "),r("code",[e._v("rundeck-stub-plugin-${VERSION_FULL}.jar")])]),e._v(" "),r("h2",{attrs:{id:"local-execution-plugin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#local-execution-plugin","aria-hidden":"true"}},[e._v("#")]),e._v(" Local Execution Plugin")]),e._v(" "),r("p",[e._v("A Node Step plugin which executes a command locally instead of on a target node.")]),e._v(" "),r("p",[e._v("File: "),r("code",[e._v("rundeck-localexec-plugin-${VERSION_FULL}.jar")])]),e._v(" "),r("h2",{attrs:{id:"job-state-plugin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#job-state-plugin","aria-hidden":"true"}},[e._v("#")]),e._v(" Job State Plugin")]),e._v(" "),r("p",[e._v("Provides a Workflow Step:")]),e._v(" "),r("ul",[r("li",[e._v("Job State Conditional: Can query and assert the state of another Job, such as running, succeeded, failed, etc, and optionally halt the current execution.")])]),e._v(" "),r("p",[e._v("File: "),r("code",[e._v("rundeck-job-state-plugin-${VERSION_FULL}.jar")])]),e._v(" "),r("h2",{attrs:{id:"flow-control-plugin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flow-control-plugin","aria-hidden":"true"}},[e._v("#")]),e._v(" Flow Control Plugin")]),e._v(" "),r("p",[e._v("Provides a Workflow Step:")]),e._v(" "),r("ul",[r("li",[e._v("Flow Control: Can halt the execution with a custom status, useful as an Error handler.")])]),e._v(" "),r("p",[e._v("File: "),r("code",[e._v("rundeck-flow-control-plugin-${VERSION_FULL}.jar")])]),e._v(" "),r("h2",{attrs:{id:"jasypt-encryption-plugin-jasypt-encryption-plugin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jasypt-encryption-plugin-jasypt-encryption-plugin","aria-hidden":"true"}},[e._v("#")]),e._v(" Jasypt Encryption Plugin {#jasypt-encryption-plugin}")]),e._v(" "),r("p",[e._v("Provides an encryption [storage converter](/administration/configuration/storage-facility.md#storage-converters] for the Storage facility. Can be used to encrypt the contents of Key Storage,\nand Project Configuration stored in the DB or on disk.")]),e._v(" "),r("p",[e._v("This plugin provides password based encryption for storage contents.\nIt uses the "),r("a",{attrs:{href:"http://jasypt.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jasypt"),r("OutboundLink")],1),e._v(" encryption library. The built in Java JCE is used unless another provider is specified, "),r("a",{attrs:{href:"https://www.bouncycastle.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bouncycastle"),r("OutboundLink")],1),e._v(" can be used by specifying the 'BC' provider name.")]),e._v(" "),r("p",[e._v("Password, algorithm, provider, etc can be specified directly, or via environment variables (the "),r("code",[e._v("*EnvVarName")]),e._v(" properties), or Java System properties (the "),r("code",[e._v("*SysPropName")]),e._v(" properties).")]),e._v(" "),r("p",[e._v("To enable it, see [Configuring - Storage Converter Plugins](/administration/configuration/plugins/configuring.md#storage-converter-plugins].")]),e._v(" "),r("p",[e._v("See also: "),r("router-link",{attrs:{to:"/administration/security/key-storage.html"}},[e._v("Key Storage")])],1),e._v(" "),r("p",[e._v("Provider type: "),r("code",[e._v("jasypt-encryption")])]),e._v(" "),r("p",[e._v("The following encryption properties marked with "),r("code",[e._v("*")]),e._v(" can be set directly,\nusing the property name shown,\nbut they can all also be set dynamically using either an Environment variable,\nor a Java System Property.\nAppend either "),r("code",[e._v("EnvVarName")]),e._v(" for the environment variable,\nor "),r("code",[e._v("SysPropName")]),e._v(" to use the Java System Property.\nIf a System Property is specified: it is read in once and used by the initialization of the converter plugin,\nthen the Java System Property is set to null so it cannot be read again.")]),e._v(" "),r("p",[e._v("Configuration properties:")]),e._v(" "),r("p",[r("code",[e._v("encryptorType")])]),e._v(" "),r("p",[e._v(": Jasypt Encryptor to use. Either "),r("code",[e._v("basic")]),e._v(", "),r("code",[e._v("strong")]),e._v(", or "),r("code",[e._v("custom")]),e._v(". Default: 'basic'.")]),e._v(" "),r("pre",[r("code",[e._v("* `basic` uses algorithm `PBEWithMD5AndDES`\n* `strong` requires use of the JCE Unlimited Strength policy files. (Algorithm: `PBEWithMD5AndTripleDES`)\n* `custom` is required to specify the algorithm.\n")])]),e._v(" "),r("p",[r("code",[e._v("password*")]),e._v("\n: the password.")]),e._v(" "),r("p",[r("code",[e._v("algorithm*")]),e._v("\n: the encryption algorithm.")]),e._v(" "),r("p",[r("code",[e._v("provider*")]),e._v("\n: the provider name. 'BC' indicates Bouncycastle.")]),e._v(" "),r("p",[r("code",[e._v("providerClassName*")]),e._v("\n: Java class name of the provider.")]),e._v(" "),r("p",[r("code",[e._v("keyObtentionIterations*")]),e._v("\n: Number of hashes to use for the password when generating the key, default is 1000.")]),e._v(" "),r("p",[e._v("Example configuration for the Key Storage facility:")]),e._v(" "),r("pre",[r("code",[e._v("rundeck.storage.converter.1.type=jasypt-encryption\nrundeck.storage.converter.1.path=keys\nrundeck.storage.converter.1.config.encryptorType=custom\nrundeck.storage.converter.1.config.passwordEnvVarName=ENC_PASSWORD\nrundeck.storage.converter.1.config.algorithm=PBEWITHSHA256AND128BITAES-CBC-BC\nrundeck.storage.converter.1.config.provider=BC\n")])]),e._v(" "),r("p",[e._v("Example configuration for the Project Configuration storage facility:")]),e._v(" "),r("pre",[r("code",[e._v("rundeck.config.storage.converter.1.type=jasypt-encryption\nrundeck.config.storage.converter.1.path=/\nrundeck.config.storage.converter.1.config.password=sekrit\nrundeck.config.storage.converter.1.config.encryptorType=custom\nrundeck.config.storage.converter.1.config.algorithm=PBEWITHSHA256AND128BITAES-CBC-BC\nrundeck.config.storage.converter.1.config.provider=BC\n")])]),e._v(" "),r("p",[e._v("File: "),r("code",[e._v("rundeck-jasypt-encryption-plugin-${VERSION_FULL}.jar")])]),e._v(" "),r("h2",{attrs:{id:"git-plugin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git-plugin","aria-hidden":"true"}},[e._v("#")]),e._v(" Git Plugin")]),e._v(" "),r("ul",[r("li",[e._v("See "),r("router-link",{attrs:{to:"/administration/projects/scm/git.html"}},[e._v("SCM Git Plugin")])],1)]),e._v(" "),r("p",[e._v("Provides SCM Export and SCM Import providers for Git.")]),e._v(" "),r("p",[e._v("File: "),r("code",[e._v("rundeck-git-plugin-${VERSION_FULL}.jar")])]),e._v(" "),r("h2",{attrs:{id:"copy-file-plugin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#copy-file-plugin","aria-hidden":"true"}},[e._v("#")]),e._v(" Copy File Plugin")]),e._v(" "),r("p",[e._v("Provides a Node Step that can copy a file to a node, using the Node's File Copier.")]),e._v(" "),r("p",[e._v("File: "),r("code",[e._v("rundeck-copyfile-plugin-${VERSION_FULL}.jar")])])])},[],!1,null,null,null);t.default=n.exports}}]);