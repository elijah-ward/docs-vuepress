(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{227:function(e,t,a){e.exports=a.p+"assets/img/fig0203-a.28095478.png"},639:function(e,t,a){"use strict";a.r(t);var r=a(0),o=Object(r.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"project-create"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#project-create","aria-hidden":"true"}},[e._v("#")]),e._v(" Project Create")]),e._v(" "),r("p",[e._v("A project can be created either from the graphical console or using the\n"),r("a",{attrs:{href:"https://rundeck.github.io/rundeck-cli/",target:"_blank",rel:"noopener noreferrer"}},[e._v("rd"),r("OutboundLink")],1),e._v(" shell tool.")]),e._v(" "),r("h2",{attrs:{id:"graphical-interface"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#graphical-interface","aria-hidden":"true"}},[e._v("#")]),e._v(" Graphical Interface")]),e._v(" "),r("p",[e._v("In the graphical console, you will notice a Project\nmenu in the navigation bar. If no projects exist, you will be prompted to\ncreate a new project.")]),e._v(" "),r("p",[e._v('Press the "New Project" button to create a project.')]),e._v(" "),r("figure",[r("img",{attrs:{src:a(227),alt:"Figure: Create project prompt"}}),r("figcaption",[e._v("Figure: Create project prompt")])]),e._v(" "),r("p",[r("em",[e._v("Basic information")])]),e._v(" "),r("dl",[r("dt",[e._v("Name")]),e._v(" "),r("dd",[e._v("This is the unique identifier for the project. Project names can contain letters and numbers but do not use spaces or special characters.")]),e._v(" "),r("dt",[e._v("Label")]),e._v(" "),r("dd",[e._v("You may wish to use a more user friendly display name for the project. The project label can contain spaces and other characters.")]),e._v(" "),r("dt",[e._v("Description")]),e._v(" "),r("dd",[e._v("A brief explanation about the project. Normally, this is just one phrase or sentence explaining the project purpose. If you have large amounts of text, consider creating a project README.")])]),e._v(" "),r("p",[r("em",[e._v("Execution Mode")])]),e._v(" "),r("dl",[r("dt",[e._v("Disable Execution")]),e._v(" "),r("dd",[e._v("Turn off the ability to execute jobs and ad-hoc commands.")]),e._v(" "),r("dt",[e._v("Disable Schedule")]),e._v(" "),r("dd",[e._v("Turn off the job scheduling feature.")])]),e._v(" "),r("p",[r("em",[e._v("User Interface")])]),e._v(" "),r("dl",[r("dt",[e._v("Job Group Expansion Level")]),e._v(" "),r("dd",[e._v("In the Jobs page, how should the job groups be collapsed? A "),r("code",[e._v("1")]),e._v(" is default and shows one group level opened. Use "),r("code",[e._v("0")]),e._v(" to collapse all. Use "),r("code",[e._v("-1")]),e._v(" to expand all.")]),e._v(" "),r("dt",[e._v("Display the Readme")]),e._v(" "),r("dd",[e._v("Show the Readme in the project list and/or home page.")]),e._v(" "),r("dt",[e._v("Display the MOTD")]),e._v(" "),r("dd",[e._v("Show the Readme in the project list and/or home page.")])]),e._v(" "),r("p",[r("em",[e._v("Default Node Executor")])]),e._v(" "),r("p",[e._v("The Node Executor is responsible for executing commands and scripts on remote nodes. On Linux machines, SSH will be default.")]),e._v(" "),r("p",[r("em",[e._v("Default File Copier")])]),e._v(" "),r("p",[e._v("The File Copier is responsible for copying scripts as files to remote nodes before they are executed. On Linux machines, SCP will be default.")]),e._v(" "),r("p",[r("em",[e._v("Create")])]),e._v(" "),r("p",[e._v('After filling in the project create form, Rundeck initializes it and returns\nyou to the default page (eg, "Jobs").')]),e._v(" "),r("p",[e._v('Projects can be created at any time by going back to the Project menu\nand selecting the "Create a new project..." item.')]),e._v(" "),r("p",[e._v("The project setup process generates Project configuration in the server, and\na local resource model containing information about the rundeck server node.")]),e._v(" "),r("h2",{attrs:{id:"automating"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#automating","aria-hidden":"true"}},[e._v("#")]),e._v(" Automating")]),e._v(" "),r("h3",{attrs:{id:"cli-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cli-usage","aria-hidden":"true"}},[e._v("#")]),e._v(" CLI Usage")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"https://rundeck.github.io/rundeck-cli/",target:"_blank",rel:"noopener noreferrer"}},[e._v("rd projects"),r("OutboundLink")],1),e._v(" command can be used to script the creation for projects. See the "),r("code",[e._v("rd projects create help")]),e._v(" output for syntax usage.")]),e._v(" "),r("p",[e._v("Execute the "),r("code",[e._v("rd projects create")]),e._v(' command and\nspecify a project name, here we use "MyProject":')]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("rd projects create -p MyProject\n")])])]),r("p",[e._v("You can also declare configuration properties when you create the project.")]),e._v(" "),r("p",[e._v("Here a project label and the default SSH key properties are declared as command line options:")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("rd projects create -p MyProject -- "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --project.label"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"My Project"')]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --project.ssh-keypath"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/home/rundeck/.ssh/id_rsa\n")])])]),r("p",[e._v("You can specify a resource model source by specifying keys as command line options, too.\nHere a Directory model source is also defined.")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("rd projects create -p MyProject -- "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --project.label"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"My Project"')]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --project.ssh-keypath"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/home/rundeck/.ssh/id_rsa "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --resources.source.2.type"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("directory "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --resources.source.2.config.directory"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/home/rundeck/projects/MyProject/resources.d\n")])])]),r("h3",{attrs:{id:"api-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#api-usage","aria-hidden":"true"}},[e._v("#")]),e._v(" API Usage")]),e._v(" "),r("p",[e._v("Project creation can be achieved via the "),r("router-link",{attrs:{to:"/api/rundeck-api.html"}},[e._v("API")]),e._v(".")],1),e._v(" "),r("p",[r("router-link",{attrs:{to:"/api/rundeck-api.html#project-creation"}},[e._v("Create projects")]),e._v(":")],1),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('POST /api/13/projects\nContent-Type: application/json\n\n{ "name": "MyProject", "config": { "project.label":"My Project" } }\n')])])])])},[],!1,null,null,null);t.default=o.exports}}]);