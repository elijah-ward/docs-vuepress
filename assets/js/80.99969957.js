(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{597:function(e,t,r){"use strict";r.r(t);var o=r(0),a=Object(o.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"backup-and-recovery"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#backup-and-recovery","aria-hidden":"true"}},[e._v("#")]),e._v(" Backup and Recovery")]),e._v(" "),r("h2",{attrs:{id:"backup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#backup","aria-hidden":"true"}},[e._v("#")]),e._v(" Backup")]),e._v(" "),r("p",[e._v("While running, export the Job definitions if you do not have these in source control:")]),e._v(" "),r("p",[e._v("You can use the "),r("a",{attrs:{href:"https://rundeck.github.io/rundeck-cli/",target:"_blank",rel:"noopener noreferrer"}},[e._v("rd"),r("OutboundLink")],1),e._v(" tool.")]),e._v(" "),r("p",[e._v("(1) Export the jobs. You will have to do this for each project")]),e._v(" "),r("pre",[r("code",[e._v("``` bash\nrd jobs list -f /path/to/backup/dir/project1/jobs.xml -p project1\nrd jobs list -f /path/to/backup/dir/project2/jobs.xml -p project2\n...\n```\n")])]),e._v(" "),r("p",[e._v("(2) Stop the server. See: "),r("router-link",{attrs:{to:"/administration/maintenance/startup.html"}},[e._v("startup and shutdown")]),e._v(". (Rundeck data file backup should only be done with the server down.)")],1),e._v(" "),r("pre",[r("code",[e._v("``` bash\nrundeckd stop\n```\n")])]),e._v(" "),r("p",[e._v("(3) Copy the data files. (Assumes file datastore configuration). The\nlocation of the data directory depends on the installation method:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("RPM install: "),r("code",[e._v("/var/lib/rundeck/data")])])]),e._v(" "),r("li",[r("p",[e._v("Launcher install: "),r("code",[e._v("$RDECK_BASE/server/data")])]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" -r data /path/to/backup/dir\n")])])])])]),e._v(" "),r("p",[e._v("(4) Copy the log (execution output) files.")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("RPM install: "),r("code",[e._v("/var/lib/rundeck/logs")])])]),e._v(" "),r("li",[r("p",[e._v("Launcher install: "),r("code",[e._v("$RDECK_BASE/var/logs")])]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" -r logs /path/to/backup/dir\n")])])])])]),e._v(" "),r("p",[e._v("(5) Start the server")]),e._v(" "),r("pre",[r("code",[e._v("``` bash\nrundeckd start\n```\n")])]),e._v(" "),r("h2",{attrs:{id:"recovery"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recovery","aria-hidden":"true"}},[e._v("#")]),e._v(" Recovery")]),e._v(" "),r("p",[e._v("(1) Stop the server. See: "),r("router-link",{attrs:{to:"/administration/maintenance/startup.html"}},[e._v("startup and shutdown")]),e._v(". (Rundeck recovery should only be done with the server down.)")],1),e._v(" "),r("pre",[r("code",[e._v("``` bash\nrundeckd stop\n```\n")])]),e._v(" "),r("p",[e._v("(2) Restore data/logs dir from backup (Refer to above for appropriate log/data path):")]),e._v(" "),r("pre",[r("code",[e._v("``` bash\ncp -r /path/to/backup/logs logspath\ncp -r /path/to/backup/data datapath\n```\n")])]),e._v(" "),r("p",[e._v("(3) Start the server:")]),e._v(" "),r("pre",[r("code",[e._v("``` bash\nrundeckd start\n```\n")])]),e._v(" "),r("p",[e._v("(4) Reload the Job definitions. You will have to do this for each project:")]),e._v(" "),r("pre",[r("code",[e._v("``` bash\nrd jobs load -f /path/to/backup/dir/project1/jobs.xml -p project1\nrd jobs load -f /path/to/backup/dir/project2/jobs.xml -p project2\n```\n")])]),e._v(" "),r("h2",{attrs:{id:"project-import-and-export"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#project-import-and-export","aria-hidden":"true"}},[e._v("#")]),e._v(" Project Import and Export")]),e._v(" "),r("p",[e._v("As of Rundeck 1.4.4, you can export a Project's database contents into an archive file, and later import it into another project.")]),e._v(" "),r("p",[e._v("You can use this mechanism for:")]),e._v(" "),r("ul",[r("li",[e._v("backup")]),e._v(" "),r("li",[e._v("migration from one database backend to another")]),e._v(" "),r("li",[e._v("upgrading from one rundeck version to another")])]),e._v(" "),r("h3",{attrs:{id:"export-an-archive"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#export-an-archive","aria-hidden":"true"}},[e._v("#")]),e._v(" Export an archive")]),e._v(" "),r("p",[e._v('To export, visit the "Admin" link in the Rundeck page header.')]),e._v(" "),r("p",[e._v('Click on the link under "Export Archive" to download an archive containing the project Jobs, Executions and History.')]),e._v(" "),r("p",[e._v("This archive can be imported into any other Rundeck project.")]),e._v(" "),r("p",[e._v("The archive will contain:")]),e._v(" "),r("ul",[r("li",[e._v("All Job definitions from the project")]),e._v(" "),r("li",[e._v("All Executions from the project (both Job and Adhoc executions)")]),e._v(" "),r("li",[e._v("All Execution log files (output logs)")]),e._v(" "),r("li",[e._v("All History reports from the project")])]),e._v(" "),r("p",[e._v("Note that the archive "),r("strong",[e._v("will not contain")]),e._v(":")]),e._v(" "),r("ul",[r("li",[e._v("The Project config file "),r("code",[e._v("project.properties")]),e._v(" located under your "),r("code",[e._v("$RDECK_BASE/projects/[name]/etc")])]),e._v(" "),r("li",[e._v("Resource definitions (such as "),r("code",[e._v("resources.xml")]),e._v(" or resources received from external providers.)")])]),e._v(" "),r("p",[e._v("You should back up those contents separately if necessary.")]),e._v(" "),r("h3",{attrs:{id:"import-an-archive"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#import-an-archive","aria-hidden":"true"}},[e._v("#")]),e._v(" Import an archive")]),e._v(" "),r("p",[e._v('To import the contents of an exported archive, visit the "Admin" link in the Rundeck page header.')]),e._v(" "),r("p",[e._v('Click on "Import Archive" to display the import form.')]),e._v(" "),r("p",[e._v('Choose the rundeck archive file to import (should end with ".rdproject.jar").')]),e._v(" "),r("p",[e._v('Click "Import".')]),e._v(" "),r("p",[e._v("The import process:")]),e._v(" "),r("ul",[r("li",[e._v("Creates any Jobs in the archive not found in this project with a new unique UUID")]),e._v(" "),r("li",[e._v("Updates any Jobs in the archive that match Jobs found in the project (group and name match)")]),e._v(" "),r("li",[e._v("Creates new Executions for the imported Jobs, and creates the output log files on disk")]),e._v(" "),r("li",[e._v("Creates new History reports for imported Executions and Jobs")])]),e._v(" "),r("p",[e._v("Note that because the archive does not contain the project configuration or resource definitions, you\nwill have to configure those separately for the new or updated project.")])])},[],!1,null,null,null);t.default=a.exports}}]);