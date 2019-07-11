(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{218:function(e,n,t){"use strict";t.r(n);var a=t(0),s=Object(a.a)({},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"planning-for-the-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#planning-for-the-project","aria-hidden":"true"}},[e._v("#")]),e._v(" Planning for the project")]),e._v(" "),t("p",[e._v('The administrator decides to create a project called "anvils."\nto manage the activities of the anvils restart.\nThe anvils project will contain definitions about the nodes used\nby the anvils application, as well as, a set a jobs\nthat reference these nodes. The administrator will use Rundeck\naccess control policies to govern which teams have access to\nperform each of the procedures.')]),e._v(" "),t("p",[e._v("The administrator decides to formalize the role of each node in\nthe application stack by introducing tags. Tags will be used within\nthe Jobs to target each kind of node rather than reference\nspecific hosts names or IP addresses. This makes the jobs reusable\nacross different environments.")]),e._v(" "),t("p",[e._v("The administrator will also use the built in\n"),t("router-link",{attrs:{to:"/administration/projects/node-execution/ssh.html"}},[e._v("SSH node executor")]),e._v(" for\nthe project since SSH is already used to execute remote commands.")],1),e._v(" "),t("h2",{attrs:{id:"create-the-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-the-project","aria-hidden":"true"}},[e._v("#")]),e._v(" Create the project")]),e._v(" "),t("p",[e._v('The administrator can create the project using the\n[rd] command line tool. Logged in on the\nrundeck server as the user "rundeck", the administrator executes:')]),e._v(" "),t("div",{staticClass:"language-{.bash} extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rd projects create -p anvils\n")])])]),t("p",[e._v('This initializes the "anvils" project in Rundeck.')]),e._v(" "),t("p",[e._v("Of course, the administrator could also create the project\nfrom the projects menu in the Rundeck GUI.")]),e._v(" "),t("p",[e._v("The project has been created but contains no jobs and only\none node definition, one entry for the Rundeck server node.")]),e._v(" "),t("h2",{attrs:{id:"declare-node-definitions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#declare-node-definitions","aria-hidden":"true"}},[e._v("#")]),e._v(" Declare node definitions")]),e._v(" "),t("p",[e._v("Modeling the anvils nodes deployed in the live environment is\nadministrator's next step.")]),e._v(" "),t("p",[e._v("The anvils application environment has several components spread\nacross different servers. Anvils is a three tier\napplication and has web, application and database components,\neach component installed on a separate host.")]),e._v(" "),t("p",[e._v("Additionally, the administrator decides to incorporate a recent\nconvention to use different unix logins to execute commands\nto control each functional application component.\nEach component will run using under a separate unix login\nto help isolate each component at the system level.")]),e._v(" "),t("p",[e._v("With this information in hand, the administrator prepares the project\nresource model using the [resource-XML]\ndocument format. The file listing\nbelow contains the node definitions for the five nodes --\nwww1, www2, app1, app2, db1:")]),e._v(" "),t("p",[e._v("File listing: /var/rundeck/projects/anvils/nodes/resources.xml")]),e._v(" "),t("div",{staticClass:"language-{.xml .numberLines} extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<?xml version="1.0" encoding="UTF-8"?>\n<project>\n  <node name="www1.anvils.com" description="A www server node." tags="www"\n    hostname="192.168.50.2" username="www1"\n    osFamily="unix" osName="Linux">\n    <attribute name="anvils-location" value="US-East"/>\n    <attribute name="anvils-customer" value="acme.com"/>\n  </node>\n  <node name="www2.anvils.com" description="A www server node." tags="www"\n    hostname="192.168.50.2" username="www2"\n    osFamily="unix" osName="Linux">\n    <attribute name="anvils-location" value="US-East"/>\n    <attribute name="anvils-customer" value="acme.com"/>\n  </node>\n  <node name="app1.anvils.com" description="A app server node." tags="app"\n    hostname="192.168.50.2" username="app1"\n    osFamily="unix" osName="Linux">\n    <attribute name="anvils-location" value="US-East"/>\n    <attribute name="anvils-customer" value="acme.com"/>\n  </node>\n  <node name="app2.anvils.com" description="A app server node." tags="app"\n    hostname="192.168.50.2" username="app2"\n    osFamily="unix" osName="Linux">\n    <attribute name="anvils-location" value="US-East"/>\n    <attribute name="anvils-customer" value="acme.com"/>\n  </node>\n  <node name="db1.anvils.com" description="A db server node." tags="db"\n    hostname="192.168.50.2" username="db"\n    osFamily="unix" osName="Linux">\n    <attribute name="anvils-location" value="US-East"/>\n    <attribute name="anvils-customer" value="acme.com"/>\n  </node>\n</project>\n')])])]),t("p",[e._v("Reviewing the XML content one sees the XML data define\nseveral nodes and tags describing the three kinds of application components.")]),e._v(" "),t("p",[e._v("A logical name for each node is defined\nwith the "),t("code",[e._v("name")]),e._v(' attribute (eg name="www1.anvils.com").\nThe address used by SSH is set with '),t("code",[e._v("hostname")]),e._v(" while the login\nused to execute commands has been specified with the\n"),t("code",[e._v("username")]),e._v(' attribute (username="www1" vs\nusername="db"). The value for the '),t("code",[e._v("tags")]),e._v(' attribute\nreflects the server role (tags="web" vs tags="app").')]),e._v(" "),t("p",[e._v("You will also notice there are two ways to define attributes using inline attribute names like "),t("code",[e._v("osName")]),e._v(" or a separate xml element like "),t("code",[e._v("anvils-location")]),e._v(". It's purely up to your preference which format you use.")]),e._v(" "),t("blockquote",[t("p",[e._v("Note, this tutorial is a trivial sized example so to conserve space (and VMs) the nodes are located on the same VM (each node uses the same hostname but a different username).")])]),e._v(" "),t("p",[e._v('A node in rundeck can model a single host on the\nnetwork and represents a single management endpoint. In the end,\nthe ssh node executor plugin formulates an ssh command string similar to:\n"ssh username@hostname command". The ssh identity is resolved via configuration\nat run time. In this example, the project default is used as specified in the\n[project.properties] configuration file.\n(e.g., project.ssh-keypath=/var/lib/rundeck/.ssh/id_rsa).')]),e._v(" "),t("p",[e._v("See [ssh-plugins guide](/administration/projects/node-execution/ssh.md#configuring-remote-machine-for-ssh] to learn about configuring remote machines for ssh.")]),e._v(" "),t("p",[e._v("This example uses the built in ssh plugin but you are not restricted to using\nssh. There are other node executor plugins that invoke remote actions via\nother tools (eg, salt, mcollective, winrm, chef knife, etc).")]),e._v(" "),t("h2",{attrs:{id:"configure-the-model-source"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-model-source","aria-hidden":"true"}},[e._v("#")]),e._v(" Configure the model source")]),e._v(" "),t("p",[e._v("To make Rundeck aware of the new resource file containing the anvils nodes,\nthe administrator modifies the\n"),t("router-link",{attrs:{to:"/administration/configuration/config-file-reference.html#project.properties"}},[e._v("project.properties")]),e._v("\nconfiguration file to declare a new resource model source.")],1),e._v(" "),t("p",[e._v("Below a directory type source is configured:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("resources.source.2.config.directory=/var/rundeck/projects/anvils/nodes\nresources.source.2.type=directory\n")])])]),t("p",[e._v("This is the second source (hence: resource.source.2) as the first one defined\nwas created by the rd-project create action.")]),e._v(" "),t("p",[e._v("New project sources can also be added in the Configure page:")]),e._v(" "),t("p",[t("img",{attrs:{src:"/figures/fig0609.png",alt:"Anvils model sources"}})]),e._v(" "),t("h2",{attrs:{id:"managing-node-sources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#managing-node-sources","aria-hidden":"true"}},[e._v("#")]),e._v(" Managing Node Sources")]),e._v(" "),t("p",[e._v("See "),t("router-link",{attrs:{to:"/administration/projects/resource-model-sources/"}},[e._v("Managing Node Sources")]),e._v("\nto learn more about configuring Rundeck to read node data from external providers.")],1),e._v(" "),t("p",[t("router-link",{attrs:{to:"/manpages/man5/resource-v13.html"}},[e._v("resource-XML")]),e._v("\n[rd]: https://rundeck.github.io/rundeck-cli/\n[tip1]: http://www.thegeekstuff.com/2008/11/3-steps-to-perform-ssh-login-without-password-using-ssh-keygen-ssh-copy-id/")],1)])},[],!1,null,null,null);n.default=s.exports}}]);