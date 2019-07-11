(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{201:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"servicenow-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#servicenow-plugins","aria-hidden":"true"}},[e._v("#")]),e._v(" ServiceNow Plugins")]),e._v(" "),a("h2",{attrs:{id:"service-now-incident-update-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-now-incident-update-state","aria-hidden":"true"}},[e._v("#")]),e._v(" Service Now / Incident / Update State")]),e._v(" "),a("p",[e._v("Rundeck workflow step that changes an incident state")]),e._v(" "),a("h3",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("The Service Now connection credentials are set in the project.properties file\nfor your project.\nPassword it's a keystorage path to the password.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("project.plugin.WorkflowStep.Service-Now-Incident-Change-State.url=https://server.service-now.com\nproject.plugin.WorkflowStep.Service-Now-Incident-Change-State.login=user\nproject.plugin.WorkflowStep.Service-Now-Incident-Change-State.password-key-storage-path=keys/servicenow/pass\n")])])]),a("p",[e._v("or in "),a("code",[e._v("framework.properties")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("servicenow.url=https://server.service-now.com\nservicenow.login=user\nservicenow.password-key-storage-path=keys/servicenow/pass\n")])])]),a("h3",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("To use the plugin, configure the following mandatory inputs.")]),e._v(" "),a("ul",[a("li",[e._v("number: The Incident number to be updated.")]),e._v(" "),a("li",[e._v("newState: The new state of the Incident. It can be the number of the state or the description.")])]),e._v(" "),a("h3",{attrs:{id:"adding-dynamic-list-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-dynamic-list-data","aria-hidden":"true"}},[e._v("#")]),e._v(" Adding dynamic list data")]),e._v(" "),a("p",[e._v("With these settings, at project level, the field "),a("code",[e._v("state")]),e._v(" can be loaded dynamically (calling SN API), for example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("project.plugin.WorkflowStep.Service-Now-Incident-Change-State.url=https://server.service-now.com\nproject.plugin.WorkflowStep.Service-Now-Incident-Change-State.login=user\nproject.plugin.WorkflowStep.Service-Now-Incident-Change-State.password-key-storage-path=keys/servicenow/pass\n\n")])])]),a("h2",{attrs:{id:"service-now-incident-check-assigned"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-now-incident-check-assigned","aria-hidden":"true"}},[e._v("#")]),e._v(" Service Now / Incident / Check Assigned")]),e._v(" "),a("p",[e._v("Rundeck workflow step that checks assigned incidents")]),e._v(" "),a("h3",{attrs:{id:"configuration-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("The Service Now connection credentials are set in the project.properties file\nfor your project.\nPassword it's a keystorage path to the password.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("project.plugin.WorkflowStep.Service-Now-Incident-Check-Assigned.login=user\nproject.plugin.WorkflowStep.Service-Now-Incident-Check-Assigned.password-key-storage-path=keys/servicenow/pass\nproject.plugin.WorkflowStep.Service-Now-Incident-Check-Assigned.url=https://server.service-now.com\n")])])]),a("p",[e._v("or in "),a("code",[e._v("framework.properties")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("servicenow.url=https://server.service-now.com\nservicenow.login=user\nservicenow.password-key-storage-path=keys/servicenow/pass\n")])])]),a("h3",{attrs:{id:"usage-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("To use the plugin, configure the following mandatory inputs.")]),e._v(" "),a("ul",[a("li",[e._v("caller: the username of the Caller field on the Incident.")])]),e._v(" "),a("p",[e._v("This input is optional")]),e._v(" "),a("ul",[a("li",[e._v("state: If you want you can enter a state number or description to add to the search, this way the incidents\nassigned to the caller only on this state are going to be considered.")])]),e._v(" "),a("h2",{attrs:{id:"service-now-incident-check-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-now-incident-check-state","aria-hidden":"true"}},[e._v("#")]),e._v(" Service Now / Incident / Check State")]),e._v(" "),a("p",[e._v("Rundeck workflow step that checks an incident state")]),e._v(" "),a("h3",{attrs:{id:"configuration-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("The Service Now connection credentials are set in the project.properties file\nfor your project.\nPassword it's a keystorage path to the password.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("project.plugin.WorkflowStep.Service-Now-Incident-Check-State.login=user\nproject.plugin.WorkflowStep.Service-Now-Incident-Check-State.password-key-storage-path=keys/servicenow/pass\nproject.plugin.WorkflowStep.Service-Now-Incident-Check-State.url=https://server.service-now.com\n")])])]),a("p",[e._v("or in "),a("code",[e._v("framework.properties")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("servicenow.url=https://server.service-now.com\nservicenow.login=user\nservicenow.password-key-storage-path=keys/servicenow/pass\n")])])]),a("h3",{attrs:{id:"usage-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("To use the plugin, configure the following mandatory inputs.")]),e._v(" "),a("ul",[a("li",[e._v("number: The Incident number to be checked.")]),e._v(" "),a("li",[e._v("state: The state to be checked. It can be the number of the state or the description.")])]),e._v(" "),a("h3",{attrs:{id:"adding-dynamic-list-data-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-dynamic-list-data-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Adding dynamic list data")]),e._v(" "),a("p",[e._v("With these settings, at project level, the field "),a("code",[e._v("state")]),e._v(" can be loaded dynamically (calling SN API), for example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("project.plugin.WorkflowStep.Service-Now-Incident-Check-State.login=user\nproject.plugin.WorkflowStep.Service-Now-Incident-Check-State.password-key-storage-path=keys/servicenow/pass\nproject.plugin.WorkflowStep.Service-Now-Incident-Check-State.url=https://server.service-now.com\n\n")])])]),a("h2",{attrs:{id:"service-now-incident-comment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-now-incident-comment","aria-hidden":"true"}},[e._v("#")]),e._v(" Service Now / Incident / Comment")]),e._v(" "),a("p",[e._v("Rundeck workflow step that comments an incident")]),e._v(" "),a("h3",{attrs:{id:"configuration-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("The Service Now connection credentials are set in the project.properties file\nfor your project.\nPassword it's a keystorage path to the password.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("project.plugin.WorkflowStep.Service-Now-Comment.login=user\nproject.plugin.WorkflowStep.Service-Now-Comment.password-key-storage-path=keys/servicenow/pass\nproject.plugin.WorkflowStep.Service-Now-Comment.url=https://server.service-now.com\n")])])]),a("p",[e._v("or in "),a("code",[e._v("framework.properties")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("servicenow.url=https://server.service-now.com\nservicenow.login=user\nservicenow.password-key-storage-path=keys/servicenow/pass\n")])])]),a("h2",{attrs:{id:"service-now-incident-create"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-now-incident-create","aria-hidden":"true"}},[e._v("#")]),e._v(" Service Now / Incident / Create")]),e._v(" "),a("p",[e._v("Rundeck workflow step that creates an incident")]),e._v(" "),a("h3",{attrs:{id:"configuration-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-5","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("The Service Now connection credentials are set in the project.properties file\nfor your project.\nPassword it's a keystorage path to the password.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("project.plugin.WorkflowStep.Service-Now-Incident-Create.login=user\nproject.plugin.WorkflowStep.Service-Now-Incident-Create.password-key-storage-path=keys/servicenow/pass\nproject.plugin.WorkflowStep.Service-Now-Incident-Create.url=https://server.service-now.com\n")])])]),a("p",[e._v("or in "),a("code",[e._v("framework.properties")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("servicenow.url=https://server.service-now.com\nservicenow.login=user\nservicenow.password-key-storage-path=keys/servicenow/pass\n")])])]),a("h3",{attrs:{id:"usage-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("To use the plugin, configure the following mandatory inputs.")]),e._v(" "),a("ul",[a("li",[e._v("caller: the username of the assigned Caller field of the Incident.")]),e._v(" "),a("li",[e._v("Short Description: Short Description of the Incident")])]),e._v(" "),a("p",[e._v("These inputs are optional and if left empty the default value of Service now it's going to be used")]),e._v(" "),a("ul",[a("li",[e._v("urgency: A number representing the urgency of the incident (usually being 1 the most urgent). The list can be dynamically loaded using project settings (see settings below)")]),e._v(" "),a("li",[e._v("impact: A number representing the impact of the incident (usually being 1 the higher urgent). The list can be dynamically loaded using project settings (see settings below)")]),e._v(" "),a("li",[e._v("priority: A number representing the priority of the incident (calculated from urgency and impact).The list can be dynamically loaded using project settings (see settings below)")]),e._v(" "),a("li",[e._v("Assignment Group: list assigned groups. To populate the list dynamically, credentials need to be passed at the project level (see settings below)")]),e._v(" "),a("li",[e._v("Description: Full description of the incident")])]),e._v(" "),a("h3",{attrs:{id:"adding-dynamic-list-data-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-dynamic-list-data-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Adding dynamic list data")]),e._v(" "),a("p",[e._v("With these settings, at project level, the fields urgency, impact, priority and Assignment Group can be loaded dynamically, for example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('project.plugin.WorkflowStep.Service-Now-Incident-Create.login=admin\nproject.plugin.WorkflowStep.Service-Now-Incident-Create.password-key-storage-path=keys/somepath/pass\nproject.plugin.WorkflowStep.Service-Now-Incident-Create.select-impact-list={"1"\\:"1 - High","2"\\:"2 - Medium","3"\\:"3 - Low"}\nproject.plugin.WorkflowStep.Service-Now-Incident-Create.select-priority-list={"1"\\:"1 - Critical","2"\\:"2 - High","3"\\:"3 - Moderate","4"\\:"4 - Low","5"\\:"5 - Planning"}\nproject.plugin.WorkflowStep.Service-Now-Incident-Create.select-urgency-list={"1"\\:"1 - High","2"\\:"2 - Medium","3"\\:"3 - Low"}\nproject.plugin.WorkflowStep.Service-Now-Incident-Create.url=https\\://XXX.service-now.com\n\n')])])]),a("p",[e._v("For "),a("code",[e._v("Assignment Group")]),e._v(" the list is loaded with an SN API call.")]),e._v(" "),a("h2",{attrs:{id:"service-now-incident-edit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-now-incident-edit","aria-hidden":"true"}},[e._v("#")]),e._v(" Service Now / Incident / Edit")]),e._v(" "),a("p",[e._v("Rundeck workflow step that edits an incident")]),e._v(" "),a("h3",{attrs:{id:"configuration-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-6","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("The Service Now connection credentials are set in the project.properties file\nfor your project.\nPassword it's a keystorage path to the password.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("project.plugin.WorkflowStep.Service-Now-Incident-Edit.login=admin\nproject.plugin.WorkflowStep.Service-Now-Incident-Edit.password-key-storage-path=keys/servicenow/pass\nproject.plugin.WorkflowStep.Service-Now-Incident-Edit.url=https\\://dev63229.service-now.com\n")])])]),a("p",[e._v("or in "),a("code",[e._v("framework.properties")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("servicenow.url=https://server.service-now.com\nservicenow.login=user\nservicenow.password-key-storage-path=keys/servicenow/pass\n")])])]),a("h3",{attrs:{id:"usage-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-5","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("To use the plugin, configure the following mandatory inputs.")]),e._v(" "),a("ul",[a("li",[e._v("Incident Number: Incident number to be updated")]),e._v(" "),a("li",[e._v("Comment: Comment on incident")])]),e._v(" "),a("p",[e._v("These inputs are optional and if left empty the default value of Service now it's going to be used")]),e._v(" "),a("ul",[a("li",[e._v("state: State code. If not set, the change will be in New status. The list can be dynamically loaded using project settings (see settings below)")]),e._v(" "),a("li",[e._v("urgency: A number representing the urgency of the incident (usually being 1 the most urgent). The list can be dynamically loaded using project settings (see settings below)")]),e._v(" "),a("li",[e._v("impact: A number representing the impact of the incident (usually being 1 the higher urgent). The list can be dynamically loaded using project settings (see settings below)")]),e._v(" "),a("li",[e._v("priority: A number representing the priority of the incident (calculated from urgency and impact).The list can be dynamically loaded using project settings (see settings below)")]),e._v(" "),a("li",[e._v("Assignment Group: list assigned groups. To populate the list dynamically, credentials need to be passed at the project level (see settings below)")])]),e._v(" "),a("h3",{attrs:{id:"adding-dynamic-list-data-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-dynamic-list-data-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Adding dynamic list data")]),e._v(" "),a("p",[e._v("With these settings, at project level, the fields urgency, impact, priority , Assignment Group, state can be loaded dynamically, for example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('project.plugin.WorkflowStep.Service-Now-Incident-Edit.login=admin\nproject.plugin.WorkflowStep.Service-Now-Incident-Edit.password-key-storage-path=keys/servicenow/pass\nproject.plugin.WorkflowStep.Service-Now-Incident-Edit.select-impact-list={"1"\\:"1 - High","2"\\:"2 - Medium","3"\\:"3 - Low"}\nproject.plugin.WorkflowStep.Service-Now-Incident-Edit.select-priority-list={"1"\\:"1 - Critical","2"\\:"2 - High","3"\\:"3 - Moderate","4"\\:"4 - Low","5"\\:"5 - Planning"}\nproject.plugin.WorkflowStep.Service-Now-Incident-Edit.select-urgency-list={"1"\\:"1 - High","2"\\:"2 - Medium","3"\\:"3 - Low"}\nproject.plugin.WorkflowStep.Service-Now-Incident-Edit.url=https\\://dev63229.service-now.com\n\n')])])]),a("p",[e._v("For "),a("code",[e._v("Assignment Group")]),e._v(" and "),a("code",[e._v("state")]),e._v(" the list is loaded with SN API call.")]),e._v(" "),a("h2",{attrs:{id:"service-now-incident-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-now-incident-view","aria-hidden":"true"}},[e._v("#")]),e._v(" Service Now / Incident / View")]),e._v(" "),a("p",[e._v("Rundeck workflow step that views an incident")]),e._v(" "),a("h3",{attrs:{id:"configuration-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-7","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("The Service Now connection credentials are set in the project.properties file\nfor your project.\nPassword it's a keystorage path to the password.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("project.plugin.WorkflowStep.Service-Now-Incident-View.login=admin\nproject.plugin.WorkflowStep.Service-Now-Incident-View.password=keys/servicenow/pass\nproject.plugin.WorkflowStep.Service-Now-Incident-View.url=https\\://dev63229.service-now.com\n")])])]),a("p",[e._v("or in "),a("code",[e._v("framework.properties")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("servicenow.url=https://server.service-now.com\nservicenow.login=user\nservicenow.password-key-storage-path=keys/servicenow/pass\n")])])]),a("h3",{attrs:{id:"usage-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-6","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("To use the plugin, configure the following mandatory inputs.")]),e._v(" "),a("ul",[a("li",[e._v("Incident Number: Incident number to be updated")])]),e._v(" "),a("h2",{attrs:{id:"service-now-change-check-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-now-change-check-state","aria-hidden":"true"}},[e._v("#")]),e._v(" Service Now / Change / Check State")]),e._v(" "),a("p",[e._v("Rundeck workflow step that checks the state of a change request")]),e._v(" "),a("h3",{attrs:{id:"configuration-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-8","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("The Service Now connection credentials are set in the project.properties file\nfor your project.\nPassword it's a keystorage path to the password.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("project.plugin.WorkflowStep.Service-Now-Change-Check-State.url=https://server.service-now.com\nproject.plugin.WorkflowStep.Service-Now-Change-Check-State.login=user\nproject.plugin.WorkflowStep.Service-Now-Change-Check-State.password-key-storage-path=keys/servicenow/pass\n")])])]),a("p",[e._v("or in "),a("code",[e._v("framework.properties")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("servicenow.url=https://server.service-now.com\nservicenow.login=user\nservicenow.password-key-storage-path=keys/servicenow/pass\n")])])]),a("h3",{attrs:{id:"usage-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-7","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("To use the plugin, configure the following mandatory inputs.")]),e._v(" "),a("ul",[a("li",[e._v("number: Number of the change.")]),e._v(" "),a("li",[e._v("State: State to be checked.")])]),e._v(" "),a("h2",{attrs:{id:"service-now-change-update-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-now-change-update-state","aria-hidden":"true"}},[e._v("#")]),e._v(" Service Now / Change / Update State")]),e._v(" "),a("p",[e._v("Rundeck workflow step that updates the state of a change request")]),e._v(" "),a("h3",{attrs:{id:"configuration-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-9","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("The Service Now connection credentials are set in the project.properties file\nfor your project.\nPassword it's a keystorage path to the password.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("project.plugin.WorkflowStep.Service-Now-Change-Update-State.url=https://server.service-now.com\nproject.plugin.WorkflowStep.Service-Now-Change-Update-State.login=user\nproject.plugin.WorkflowStep.Service-Now-Change-Update-State.password-key-storage-path=keys/servicenow/pass\n")])])]),a("p",[e._v("or in "),a("code",[e._v("framework.properties")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("servicenow.url=https://server.service-now.com\nservicenow.login=user\nservicenow.password-key-storage-path=keys/servicenow/pass\n")])])]),a("h3",{attrs:{id:"usage-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-8","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("To use the plugin, configure the following mandatory inputs.")]),e._v(" "),a("ul",[a("li",[e._v("number: Number of the change.")]),e._v(" "),a("li",[e._v("New State: New State State to be used.")])]),e._v(" "),a("h2",{attrs:{id:"service-now-change-create"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-now-change-create","aria-hidden":"true"}},[e._v("#")]),e._v(" Service Now / Change / Create")]),e._v(" "),a("p",[e._v("Rundeck workflow step that creates a change on Service Now")]),e._v(" "),a("h3",{attrs:{id:"configuration-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-10","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("The Service Now connection credentials are set in the project.properties file\nfor your project.\nPassword it's a keystorage path to the password.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("project.plugin.WorkflowStep.Service-Now-Change-Create.url=https://server.service-now.com\nproject.plugin.WorkflowStep.Service-Now-Change-Create.login=user\nproject.plugin.WorkflowStep.Service-Now-Change-Create.password-key-storage-path=keys/servicenow/pass\n")])])]),a("p",[e._v("or in "),a("code",[e._v("framework.properties")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("servicenow.url=https://server.service-now.com\nservicenow.login=user\nservicenow.password-key-storage-path=keys/servicenow/pass\n")])])]),a("h3",{attrs:{id:"usage-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-9","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("To use the plugin, configure the following mandatory inputs.")]),e._v(" "),a("ul",[a("li",[e._v("assignment group: The assignment group name or Id to assign.")]),e._v(" "),a("li",[e._v("Description: Short description to be used.")]),e._v(" "),a("li",[e._v("state: State code. If not set, the change will be in New status.")])])])},[],!1,null,null,null);t.default=s.exports}}]);