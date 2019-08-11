(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{397:function(e,t,r){"use strict";r.r(t);var i=r(0),o=Object(i.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"vmware-step-plugins-enterprise"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vmware-step-plugins-enterprise","aria-hidden":"true"}},[e._v("#")]),e._v(" VMWare Step Plugins (Enterprise)")]),e._v(" "),r("h2",{attrs:{id:"clone-vm-workflow-step"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#clone-vm-workflow-step","aria-hidden":"true"}},[e._v("#")]),e._v(" Clone VM Workflow Step")]),e._v(" "),r("p",[e._v("This workflow step plugin clones existing VMs.")]),e._v(" "),r("p",[e._v("Configuration")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Source VM Name")]),e._v(": VM Name that will be clone")]),e._v(" "),r("li",[r("strong",[e._v("New VM Name")]),e._v(": Destination VM Name")]),e._v(" "),r("li",[r("strong",[e._v("DataCenter")]),e._v(": DataCenter Name. If the DataCenter is not set, the VM will be searching on the root folder")])]),e._v(" "),r("p",[e._v("Authentication Options")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("URL Server")]),e._v(": URL of the Server, eg: https://vmware-server")]),e._v(" "),r("li",[r("strong",[e._v("Username")]),e._v(": Login Username")]),e._v(" "),r("li",[r("strong",[e._v("Password")]),e._v(": Username Password")]),e._v(" "),r("li",[r("strong",[e._v("Ignore SSL certificate")]),e._v(": Connecting with the server ignoring the SSL certificate. If this is false, you will need to add the certificate to the truststore ("),r("router-link",{attrs:{to:"/administration/projects/resource-model-sources/vmware.html#connecting-using-certificate]"}},[e._v("see here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"create-vm-workflow-step"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-vm-workflow-step","aria-hidden":"true"}},[e._v("#")]),e._v(" Create VM Workflow Step")]),e._v(" "),r("p",[e._v("This workflow step plugin creates a new VM.")]),e._v(" "),r("p",[e._v("Configuration")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Source VM Name")]),e._v(": VM Name that will be clone")]),e._v(" "),r("li",[r("strong",[e._v("DataCenter Name")]),e._v(": DataCenter name where the new VM will be created")]),e._v(" "),r("li",[r("strong",[e._v("VMWare Host")]),e._v(": (Optional) If the host is not defined, it will take the first on the DataCenter")]),e._v(" "),r("li",[r("strong",[e._v("DataStore Name")]),e._v(": (Optional) If DataStore, it will take one from the host")]),e._v(" "),r("li",[r("strong",[e._v("Network Name")]),e._v(": Network name of the new VM")]),e._v(" "),r("li",[r("strong",[e._v("NIC Name")]),e._v(": NIC Name of the new VM")]),e._v(" "),r("li",[r("strong",[e._v("Memory Size (MB)")]),e._v(": Memory Size of the new VM")]),e._v(" "),r("li",[r("strong",[e._v("Number CPU")]),e._v(": Number CPU of the new VM")]),e._v(" "),r("li",[r("strong",[e._v("Guest OS ID")]),e._v(": Guest OS ID of the new VM")]),e._v(" "),r("li",[r("strong",[e._v("Disk Type")]),e._v(": Disk Type (persistent, independent_persistent)")]),e._v(" "),r("li",[r("strong",[e._v("Disk Size (MB)")]),e._v(": Size of the new disk (MB)")]),e._v(" "),r("li",[r("strong",[e._v("ISO file")]),e._v(': (Optional) If this field is defined, the VM will mount this disk (format "[datastore] path")')]),e._v(" "),r("li",[r("strong",[e._v("Power ON")]),e._v(": Power ON after the VM is created")])]),e._v(" "),r("p",[e._v("Authentication Options")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("URL Server")]),e._v(": URL of the Server, eg: https://vmware-server")]),e._v(" "),r("li",[r("strong",[e._v("Username")]),e._v(": Login Username")]),e._v(" "),r("li",[r("strong",[e._v("Password")]),e._v(": Username Password")]),e._v(" "),r("li",[r("strong",[e._v("Ignore SSL certificate")]),e._v(": Connecting with the server ignoring the SSL certificate. If this is false, you will need to add the certificate to the truststore ("),r("router-link",{attrs:{to:"/administration/projects/resource-model-sources/vmware.html#connecting-using-certificate]"}},[e._v("see here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"re-config-vm-workflow-step"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#re-config-vm-workflow-step","aria-hidden":"true"}},[e._v("#")]),e._v(" Re-Config VM Workflow Step")]),e._v(" "),r("p",[e._v("This workflow step plugin re-config a VM.")]),e._v(" "),r("p",[e._v("Configuration")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Source VM Name")]),e._v(": VM Name that will be modify")]),e._v(" "),r("li",[r("strong",[e._v("DataCenter Name")]),e._v(": DataCenter Name. If the DataCenter is not set, the VM will be searching on the root folder")]),e._v(" "),r("li",[r("strong",[e._v("Memory Size (MB)")]),e._v(": new Memory Size")]),e._v(" "),r("li",[r("strong",[e._v("Number CPU")]),e._v(": new CPU number")]),e._v(" "),r("li",[r("strong",[e._v("Network Operation")]),e._v(": Add or Remove network device")]),e._v(" "),r("li",[r("strong",[e._v("Network Name")]),e._v(": Network Name to add or remove")]),e._v(" "),r("li",[r("strong",[e._v("Disk Operation")]),e._v(": Add or Remove disk device")]),e._v(" "),r("li",[r("strong",[e._v("Disk Name")]),e._v(": Disk Name to add or remove")]),e._v(" "),r("li",[r("strong",[e._v("Disk Type")]),e._v(": Disk Type of the new disk")]),e._v(" "),r("li",[r("strong",[e._v("Disk Size")]),e._v(": Disk Size (MB) of the new disk")])]),e._v(" "),r("p",[e._v("Authentication Options")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("URL Server")]),e._v(": URL of the Server, eg: https://vmware-server")]),e._v(" "),r("li",[r("strong",[e._v("Username")]),e._v(": Login Username")]),e._v(" "),r("li",[r("strong",[e._v("Password")]),e._v(": Username Password")]),e._v(" "),r("li",[r("strong",[e._v("Ignore SSL certificate")]),e._v(": Connecting with the server ignoring the SSL certificate. If this is false, you will need to add the certificate to the truststore ("),r("router-link",{attrs:{to:"/administration/projects/resource-model-sources/vmware.html#connecting-using-certificate]"}},[e._v("see here")]),e._v(".")],1)])])},[],!1,null,null,null);t.default=o.exports}}]);