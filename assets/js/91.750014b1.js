(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{212:function(e,a,t){"use strict";t.r(a);var r=t(0),o=Object(r.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"upgrade-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-guide","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrade Guide")]),e._v(" "),t("p",[e._v("Updated April 15, 2015")]),e._v(" "),t("h2",{attrs:{id:"upgrading-to-rundeck-2-11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-to-rundeck-2-11","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrading to Rundeck 2.11")]),e._v(" "),t("p",[e._v("(If you are upgrading from a version earlier than 2.10.x, please peruse the rest of this document for any other issues regarding intermediate versions.)")]),e._v(" "),t("p",[e._v("Potentially breaking changes:")]),e._v(" "),t("p",[t("strong",[e._v("RPM spec:")])]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("rundeck")]),e._v(" user/group is now created within system UID ranges "),t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/3195",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3195"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("ACLs: Edit Project Configuration/Nodes GUI access level requirements changed:")])]),e._v(" "),t("p",[e._v('Previously: GUI actions "Project > Edit Configuration" and "Project > Edit Nodes" required '),t("code",[e._v("admin")]),e._v(" project access. Now: only "),t("code",[e._v("configure")]),e._v(" level access is required.")]),e._v(" "),t("p",[e._v("NOTE: API behavior was always this way, so this change simply aligns the access requirements.")]),e._v(" "),t("p",[e._v("Potential security implications:")]),e._v(" "),t("ul",[t("li",[e._v("users/roles granted "),t("code",[e._v("configure")]),e._v(" access to a project will now be able to modify Project Nodes or Configuration via the GUI")]),e._v(" "),t("li",[e._v("the same users/roles would already have this access if using the API")])]),e._v(" "),t("p",[e._v("See: "),t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/3084",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3084"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("strong",[e._v("ACLs: Job Definition visibility")])]),e._v(" "),t("p",[e._v("A new ACL access level "),t("code",[e._v("view")]),e._v(" is a subset of the "),t("code",[e._v("read")]),e._v(' access level for jobs, and does not allow users to view the "Definition" tab of a Job, or download the XML/YAML definitions.')]),e._v(" "),t("p",[e._v("ACLs which allow "),t("code",[e._v("read")]),e._v(" to Jobs, will work as before. To disallow Job Definition viewing/downloading, you should change your ACLs to only allow "),t("code",[e._v("view")]),e._v(" access.")]),e._v(" "),t("p",[t("strong",[e._v("Project Storage Type is now "),t("code",[e._v("db")]),e._v(" by default:")])]),e._v(" "),t("p",[e._v("If you want to continue using filesystem storage for project config/readme/motd files, you will need to set this in your "),t("code",[e._v("rundeck-config.properties")]),e._v(" before upgrading:")]),e._v(" "),t("pre",[t("code",[e._v("rundeck.projectsStorageType=filesystem\n")])]),e._v(" "),t("p",[e._v("Upgrading an existing "),t("code",[e._v("filesystem")]),e._v(" configuration to "),t("code",[e._v("db")]),e._v(" is automatic, and project configs/readme/motd will be loaded into DB storage at system startup.")]),e._v(" "),t("p",[e._v('To encrypt the DB storage, you will need to [enable encryption for the "Project Configuration" storage layer](/administration/configuration/plugins/bundled-plugins.md#jasypt-encryption-plugin].')]),e._v(" "),t("h2",{attrs:{id:"upgrading-to-rundeck-2-8-1-from-2-8-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-to-rundeck-2-8-1-from-2-8-0","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrading to Rundeck 2.8.1 from 2.8.0")]),e._v(" "),t("h3",{attrs:{id:"important-note"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#important-note","aria-hidden":"true"}},[e._v("#")]),e._v(" Important Note")]),e._v(" "),t("p",[e._v("If you have previously installed Rundeck 2.8.0, using Mysql or H2 database, the 2.8.1 update\nwill not work correctly. A DB schema change was required to fix a bug with Postgres and other databases:\n("),t("code",[e._v("user")]),e._v(" is a reserved word).")]),e._v(" "),t("p",[e._v("If you upgrade from 2.7.x to 2.8.1 (skipping 2.8.0), or install 2.8.1 from scratch, you will "),t("em",[e._v("not")]),e._v(" encounter this problem.")]),e._v(" "),t("p",[e._v("Use the following methods to update your DB schema for Mysql or H2 if you are upgrading from 2.8.0 to 2.8.1:")]),e._v(" "),t("h4",{attrs:{id:"mysql-upgrade-to-2-8-1-from-2-8-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-upgrade-to-2-8-1-from-2-8-0","aria-hidden":"true"}},[e._v("#")]),e._v(" Mysql upgrade to 2.8.1 from 2.8.0")]),e._v(" "),t("ol",[t("li",[e._v("Stop Rundeck")]),e._v(" "),t("li",[e._v("Run the following SQL script, to rename the "),t("code",[e._v("user")]),e._v(" column in the "),t("code",[e._v("job_file_record")]),e._v(" table to "),t("code",[e._v("rduser")]),e._v(".")])]),e._v(" "),t("div",{staticClass:"language-{.sql} extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("use rundeck;\nalter table job_file_record change column user rduser varchar(255) not null;\n")])])]),t("p",[e._v("After running this script, you can proceed with the 2.8.1 upgrade.")]),e._v(" "),t("h4",{attrs:{id:"h2-upgrade-to-2-8-1-from-2-8-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#h2-upgrade-to-2-8-1-from-2-8-0","aria-hidden":"true"}},[e._v("#")]),e._v(" H2 upgrade to 2.8.1 from 2.8.0")]),e._v(" "),t("p",[e._v("For H2, you will need to do the following:")]),e._v(" "),t("ol",[t("li",[e._v("Shut down Rundeck.")]),e._v(" "),t("li",[e._v("(backup your H2 database contents, see "),t("router-link",{attrs:{to:"/administration/maintenance/backup.html"}},[e._v("Backup and Recovery")]),e._v(".")],1),e._v(" "),t("li",[e._v("Use the h2 "),t("a",{attrs:{href:"http://h2database.com/javadoc/org/h2/tools/RunScript.html",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("RunScript")]),t("OutboundLink")],1),e._v(" command\nto run the following SQL script.")])]),e._v(" "),t("p",[e._v("To run the script you will need:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("URL defining the location of your H2 database. This is the same as the "),t("code",[e._v("dataSource.url")]),e._v(" defined in\nyour "),t("code",[e._v("rundeck-config.properties")]),e._v(".")]),e._v(" "),t("ul",[t("li",[e._v("For RPM/DEB installs it is "),t("code",[e._v("jdbc:h2:file:/var/lib/rundeck/data/rundeckdb")]),e._v(".")]),e._v(" "),t("li",[e._v("For a Launcher install, it will include your "),t("code",[e._v("$RDECK_BASE")]),e._v(" path. It can be relative to your current\nworking directory, such as "),t("code",[e._v("jdbc:h2:file:$RDECK_BASE/server/data/grailsdb")]),e._v(".")])])]),e._v(" "),t("li",[t("p",[e._v("File path to the "),t("code",[e._v("h2-1.4.x.jar")]),e._v(" jar file, which is in the expanded war contents of the Rundeck install.")]),e._v(" "),t("ul",[t("li",[e._v("For RPM/DEB installs it is "),t("code",[e._v("/var/lib/rundeck/exp/webapp/WEB-INF/lib/h2-1.4.193.jar")]),e._v(".")]),e._v(" "),t("li",[e._v("For launcher install it will under your "),t("code",[e._v("$RDECK_BASE")]),e._v(", such as:\n"),t("code",[e._v("$RDECK_BASE/server/exp/webapp/WEB-INF/lib/h2-1.4.193.jar")])])])])]),e._v(" "),t("p",[e._v("Save this into a file "),t("code",[e._v("upgrade-2.8.1.sql")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-{.sql} extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("alter table job_file_record rename column user to rduser;\n")])])]),t("p",[e._v("Run this command:")]),e._v(" "),t("div",{staticClass:"language-{.bash} extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("H2_JAR_FILE=... #jar file location\nH2_URL=...      #jdbc URL\njava -cp $H2_JAR_FILE org.h2.tools.RunScript  \\\n  -url $H2_URL \\\n  -user sa \\\n  -script upgrade-2.8.1.sql\n")])])]),t("p",[e._v("This command should complete with a 0 exit code (and no output).")]),e._v(" "),t("p",[e._v("You can now upgrade to 2.8.1.")]),e._v(" "),t("p",[t("strong",[e._v("Error output")])]),e._v(" "),t("p",[e._v("If you see output containing "),t("code",[e._v('Column "USER" not found;')]),e._v(" then you have already run this script successfully.")]),e._v(" "),t("p",[e._v("If you see output containing "),t("code",[e._v('Table "JOB_FILE_RECORD" not found')]),e._v(", then you probably did not have 2.8.0 installed,\nyou should be able to upgrade from 2.7 without a problem.")]),e._v(" "),t("h2",{attrs:{id:"upgrading-to-rundeck-2-8-from-earlier-versions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-to-rundeck-2-8-from-earlier-versions","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrading to Rundeck 2.8 from earlier versions")]),e._v(" "),t("h3",{attrs:{id:"java-8-is-required"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-8-is-required","aria-hidden":"true"}},[e._v("#")]),e._v(" Java 8 is required")]),e._v(" "),t("p",[e._v("Rundeck server now requires Java 8.")]),e._v(" "),t("h2",{attrs:{id:"upgrading-to-rundeck-2-7-from-2-6-x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-to-rundeck-2-7-from-2-6-x","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrading to Rundeck 2.7 from 2.6.x")]),e._v(" "),t("h3",{attrs:{id:"java-8-is-required-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-8-is-required-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Java 8 is required")]),e._v(" "),t("p",[e._v("Well, not technically "),t("em",[e._v("required")]),e._v(" for Rundeck server so much as heavily frowned upon. You should upgrade, consider Java 7 no longer supported. We may switch to actually requiring it soon.")]),e._v(" "),t("h3",{attrs:{id:"default-database-h2-upgraded-to-1-4-x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#default-database-h2-upgraded-to-1-4-x","aria-hidden":"true"}},[e._v("#")]),e._v(" Default database (H2) upgraded to 1.4.x")]),e._v(" "),t("p",[e._v('The new version uses a different storage format ("mv_store") so switching back to 2.6 after creating a DB with 2.7 may not work.')]),e._v(" "),t("p",[e._v("In-place upgrade with the old storage format do seem to work, however if necessary to keep compatibility with an existing older h2 database, you can update your dataSource.url in rundeck-config.properties to add "),t("code",[e._v(";mv_store=false")])]),e._v(" "),t("pre",[t("code",[e._v("dataSource.url = jdbc:h2:file:/path;MVCC=true;mv_store=false\n")])]),e._v(" "),t("ul",[t("li",[e._v("You can remove "),t("code",[e._v(";TRACE_LEVEL_FILE=4")]),e._v(" from the dataSource.url in rundeck-config.properties")])]),e._v(" "),t("h3",{attrs:{id:"cli-tools-are-gone"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cli-tools-are-gone","aria-hidden":"true"}},[e._v("#")]),e._v(" CLI tools are gone")]),e._v(" "),t("p",[e._v('We have removed the "rd-*" and "dispatch" and "run" tools from the install, although the "rd-acl" tool is still available.')]),e._v(" "),t("p",[e._v('You should use the new "rd" tool available separately, see '),t("a",{attrs:{href:"https://rundeck.github.io/rundeck-cli/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://rundeck.github.io/rundeck-cli/"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("However, "),t("code",[e._v("rd")]),e._v(" "),t("em",[e._v("does")]),e._v(" require Java 8. (See, gotcha.)")]),e._v(" "),t("h3",{attrs:{id:"debian-rpm-startup-script-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debian-rpm-startup-script-changes","aria-hidden":"true"}},[e._v("#")]),e._v(" Debian/RPM startup script changes")]),e._v(" "),t("p",[e._v("The file "),t("code",[e._v("/etc/rundeck/profile")]),e._v(" was modified and will probably not work with your existing install.\n(This change was snafu'd into 2.6.10 and reverted in 2.6.11)")]),e._v(" "),t("p",[e._v("If you have customized "),t("code",[e._v("/etc/rundeck/profile")]),e._v(", look at the new contents and move your custom env var changes to a file in "),t("code",[e._v("/etc/sysconfig/rundeckd")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"inline-script-token-expansion-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inline-script-token-expansion-changes","aria-hidden":"true"}},[e._v("#")]),e._v(" Inline script token expansion changes")]),e._v(" "),t("p",[e._v("(This is another change tha had some hiccups in the 2.6.10 release.)")]),e._v(" "),t("p",[e._v("You must now use "),t("code",[e._v("@@")]),e._v(" (two at-signs) to produce a literal "),t("code",[e._v("@")]),e._v(" in an inline script when it might be interpreted as a token, i.e. "),t("code",[e._v("@word@")]),e._v(" looks like a token, but "),t("code",[e._v("@word space@")]),e._v(" is ok.")]),e._v(" "),t("p",[e._v("You can globally disable inline script token expansion, see [framework.properties](/administration/configuration/config-file-reference.md#framework.properties].")]),e._v(" "),t("h3",{attrs:{id:"jetty-embedded-server-was-upgraded-to-9-0-x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jetty-embedded-server-was-upgraded-to-9-0-x","aria-hidden":"true"}},[e._v("#")]),e._v(" Jetty embedded server was upgraded to 9.0.x")]),e._v(" "),t("p",[e._v('If you are using the default "realm.properties" login mechanism, the default JAAS configuration for file-based authentication will need to be modified to use correct class name in your '),t("code",[e._v("jaas-loginmodule.conf")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("old value")]),e._v(": "),t("code",[e._v("org.eclipse.jetty.plus.jaas.spi.PropertyFileLoginModule")])]),e._v(" "),t("li",[e._v("Replace with: "),t("code",[e._v("org.eclipse.jetty.jaas.spi.PropertyFileLoginModule")])])]),e._v(" "),t("h2",{attrs:{id:"upgrading-to-rundeck-2-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-to-rundeck-2-5","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrading to Rundeck 2.5")]),e._v(" "),t("h3",{attrs:{id:"java-7-required"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-7-required","aria-hidden":"true"}},[e._v("#")]),e._v(" Java 7 required")]),e._v(" "),t("p",[e._v("Java 7 is now required for Rundeck 2.5, and Java 8 can be used. Java 6 will not work.")]),e._v(" "),t("h3",{attrs:{id:"scheduled-jobs-with-required-option-default-values"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scheduled-jobs-with-required-option-default-values","aria-hidden":"true"}},[e._v("#")]),e._v(" Scheduled Jobs with required option default values")]),e._v(" "),t("p",[e._v('A bug in Rundeck previously allowed Jobs to saved with a schedule\neven if an Option marked "required" did not have a default value.\nThe result was that the scheduler would fail to execute the job silently.')]),e._v(" "),t("p",[e._v("In Rundeck 2.5 this is now considered a validation error when creating or importing the job definition,\nso any scheduled jobs with required options need to have a default value set.")]),e._v(" "),t("h3",{attrs:{id:"rd-project-create-of-existing-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rd-project-create-of-existing-project","aria-hidden":"true"}},[e._v("#")]),e._v(" rd-project create of existing project")]),e._v(" "),t("p",[e._v("If "),t("code",[e._v("rd-project -a create -p projectname")]),e._v(" is executed for an existing project, this will now fail.")]),e._v(" "),t("h3",{attrs:{id:"database-schema"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#database-schema","aria-hidden":"true"}},[e._v("#")]),e._v(" Database schema")]),e._v(" "),t("p",[e._v("This release adds some new DB tables but does not alter the schema of other tables.")]),e._v(" "),t("h3",{attrs:{id:"project-definitions-stored-in-db"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#project-definitions-stored-in-db","aria-hidden":"true"}},[e._v("#")]),e._v(" Project definitions stored in DB")]),e._v(" "),t("p",[e._v("Rundeck 2.4 and earlier used the filesystem to store Projects and their configuration.\nRundeck 2.5 can now use the DB to store project definition and configuration,\nbut this is not enabled by default.")]),e._v(" "),t("p",[e._v("If you have projects that exist on the filesystem, when you upgrade to Rundeck 2.5, these projects\nand their configuration files can be automatically imported into the DB. This means that\nthe contents of "),t("code",[e._v("project.properties")]),e._v(" will be copied to the DB,\nusing Rundeck's "),t("router-link",{attrs:{to:"/administration/configuration/storage-facility.html"}},[e._v("Storage Facility")]),e._v(".")],1),e._v(" "),t("p",[e._v("In addition, there is "),t("em",[e._v("no encryption by default")]),e._v(", if you want the contents of your project.properties\nto be encrypted in the DB, you must configure\n[Storage Converter Plugins](/administration/configuration/plugins/configuring.md#storage-converter-plugins]\nto use an encryption plugin. There is now a [Jasypt Encryption Plugin](/administration/configuration/plugins/bundled-plugins.md#jasypt-encryption-plugin] included with Rundeck which can be used.")]),e._v(" "),t("p",[t("strong",[e._v("Enable project DB storage")]),e._v(":")]),e._v(" "),t("p",[e._v("You can configure Rundeck to use the Database by adding the following to\n"),t("code",[e._v("rundeck-config.properties")]),e._v(" before starting it up:")]),e._v(" "),t("pre",[t("code",[e._v("rundeck.projectsStorageType=db\n")])]),e._v(" "),t("p",[e._v("When importing previously created filesystem projects, the contents of these files are imported to the DB:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("etc/project.properties")])]),e._v(" "),t("li",[t("code",[e._v("readme.md")])]),e._v(" "),t("li",[t("code",[e._v("motd.md")])])]),e._v(" "),t("p",[e._v("In addition, after importing, the "),t("code",[e._v("project.properties")]),e._v(" file will be renamed to "),t("code",[e._v("project.properties.imported")]),e._v(".")]),e._v(" "),t("p",[e._v("If desired, you can switch back to using filesystem projects by doing this:")]),e._v(" "),t("ol",[t("li",[e._v("set "),t("code",[e._v("rundeck.projectsStorageType=filesystem")]),e._v(" in "),t("code",[e._v("rundeck-config.properties")])]),e._v(" "),t("li",[e._v("rename each "),t("code",[e._v("project.properties.imported")]),e._v(" file back to "),t("code",[e._v("project.properties")])])]),e._v(" "),t("h3",{attrs:{id:"web-xml-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-xml-changes","aria-hidden":"true"}},[e._v("#")]),e._v(" web.xml changes")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("web.xml")]),e._v(" file has changed significantly from 2.4.x to Rundeck 2.5.x.")]),e._v(" "),t("p",[e._v("For this reason, if you have modified your "),t("code",[e._v("web.xml")]),e._v(" file, located at\n"),t("code",[e._v("/var/lib/rundeck/exp/webapp/WEB-INF/web.xml")]),e._v(",\nfor example to change the "),t("code",[e._v("<security-role><role-name>user</role-name><security-role>")]),e._v(",\nthen you may need to back it up, and re-apply the changes you made after upgrading to 2.5.x.")]),e._v(" "),t("p",[e._v('If you receive a "Service Unavailable" error on startup, and the service.log file contains this message:')]),e._v(" "),t("pre",[t("code",[e._v("java.lang.ClassNotFoundException: org.codehaus.groovy.grails.web.sitemesh.GrailsPageFilter\n")])]),e._v(" "),t("p",[e._v("Then that means your web.xml file is out of date. Replace it with the one from 2.5 installation,\nthen re-apply your changes to "),t("code",[e._v("<role-name>")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"upgrading-to-rundeck-2-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-to-rundeck-2-1","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrading to Rundeck 2.1")]),e._v(" "),t("h3",{attrs:{id:"database-schema-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#database-schema-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Database schema")]),e._v(" "),t("p",[e._v("If you are upgrading from 2.0.x, be sure to perform backups prior to upgrading.\nThis release adds a new DB table\nbut does not alter the schema of other tables.")]),e._v(" "),t("h3",{attrs:{id:"acl-policy-additions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acl-policy-additions","aria-hidden":"true"}},[e._v("#")]),e._v(" ACL policy additions")]),e._v(" "),t("p",[e._v("Project access via API has been improved, and new authorizations are now required for project access. See [Adminstration - Access Control Policy](/administration/security/authorization.md#application-scope-resources-and-actions].")]),e._v(" "),t("ul",[t("li",[e._v("project access adds "),t("code",[e._v("configure")]),e._v(","),t("code",[e._v("delete")]),e._v(","),t("code",[e._v("import")]),e._v(","),t("code",[e._v("export")]),e._v(" actions")]),e._v(" "),t("li",[t("code",[e._v("admin")]),e._v(" access still allows all actions")])]),e._v(" "),t("p",[e._v("Example allowing explicit actions:")]),e._v(" "),t("pre",[t("code",[e._v("context:\n  application: 'rundeck'\nfor:\n  resource:\n    - equals:\n        kind: 'project'\n      allow: [create] # allow creating new projects\n  project:\n    - equals:\n        name: 'myproject'\n      allow: [read,configure,delete,import,export,admin] # access to 'myproject'\nby:\n  group: admin\n")])]),e._v(" "),t("p",[e._v("The storage facility for uploading public/private keys requires authorization to use. The default "),t("code",[e._v("admin.aclpolicy")]),e._v(" and "),t("code",[e._v("apitoken.aclpolicy")]),e._v(" provide this access, but if you have custom policies you may want to allow access to these actions.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("storage")]),e._v(" can allow "),t("code",[e._v("create")]),e._v(","),t("code",[e._v("update")]),e._v(","),t("code",[e._v("read")]),e._v(", or "),t("code",[e._v("delete")])]),e._v(" "),t("li",[e._v("you can match on "),t("code",[e._v("path")]),e._v(" or "),t("code",[e._v("name")]),e._v(" to narrow the access")])]),e._v(" "),t("p",[e._v("The default apitoken aclpolicy file allows this access:")]),e._v(" "),t("pre",[t("code",[e._v("context:\n  application: 'rundeck'\nfor:\n  storage:\n    - match:\n        path: '(keys|keys/.*)'\n      allow: '*' # allow all access to manage stored keys\nby:\n  group: api_token_group\n")])]),e._v(" "),t("h2",{attrs:{id:"upgrading-to-rundeck-2-0-from-1-6-x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-to-rundeck-2-0-from-1-6-x","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrading to Rundeck 2.0 from 1.6.x")]),e._v(" "),t("p",[e._v("Rundeck 2.0 has some under-the-hood changes, so please follow this guide when upgrading from Rundeck 1.6.x.")]),e._v(" "),t("p",[e._v("The first step is always to make a backup of all important data for your existing Rundeck installation. Refer to the "),t("router-link",{attrs:{to:"/administration/maintenance/backup.html"}},[e._v("Administration - Backup and Recovery")]),e._v(" section.")],1),e._v(" "),t("h2",{attrs:{id:"clean-install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clean-install","aria-hidden":"true"}},[e._v("#")]),e._v(" Clean install")]),e._v(" "),t("p",[e._v("The most direct upgrade method is to use the project export/import method and a clean install of Rundeck 2.0.")]),e._v(" "),t("p",[e._v("Before shutting down your 1.6.x installation, perform "),t("strong",[e._v("Project Export")]),e._v(" for each project you wish to migrate:")]),e._v(" "),t("ol",[t("li",[e._v("Select your project")]),e._v(" "),t("li",[e._v("Click the "),t("em",[e._v("Configure")]),e._v(" tab in the header.")]),e._v(" "),t("li",[e._v("Click the link under "),t("em",[e._v("Export Project Archive")]),e._v(" to save it to your local disk.")]),e._v(" "),t("li",[e._v("Make a copy of all project files under the projects directory for the project, e.g. "),t("code",[e._v("$RDECK_BASE/projects/NAME")]),e._v(" (launcher) or "),t("code",[e._v("/var/rundeck/projects/NAME")]),e._v(" (RPM/Deb). This includes the project.properties configuration as well as resources files.")])]),e._v(" "),t("p",[e._v("Perform a "),t("em",[e._v("clean")]),e._v(" install Rundeck 2.0 (no cheating!).")]),e._v(" "),t("p",[e._v("Then Import the projects you exported:")]),e._v(" "),t("ol",[t("li",[e._v("Create a new project, or select an existing project.")]),e._v(" "),t("li",[e._v("Click the "),t("em",[e._v("gear icon")]),e._v(" for the Configure page in the header.")]),e._v(" "),t("li",[e._v("Click the "),t("em",[e._v("Import Archive")]),e._v(" Tab")]),e._v(" "),t("li",[e._v("Under "),t("em",[e._v("Choose a Rundeck Archive")]),e._v(" pick the archive file you downloaded earlier")]),e._v(" "),t("li",[e._v("Click "),t("em",[e._v("Import")])])]),e._v(" "),t("p",[e._v("Finally, restore the project files for the imported project.")]),e._v(" "),t("h2",{attrs:{id:"upgrading-jaas-properties-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-jaas-properties-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrading JAAS properties file")]),e._v(" "),t("p",[e._v("If you are not doing a clean install, and you want to maintain your JAAS login module configuration, you may have to change your jaas.conf file.")]),e._v(" "),t("p",[e._v("The default jaas-loginmodule.conf file included with Rundeck 1.6.x uses the "),t("code",[e._v("org.mortbay.jetty.plus.jaas.spi.PropertyFileLoginModule")]),e._v(" class. You will have to change your file to specify "),t("code",[e._v("org.eclipse.jetty.jaas.spi.PropertyFileLoginModule")]),e._v(' ("org.eclipse").')]),e._v(" "),t("p",[e._v("Modify the "),t("code",[e._v("$RDECK_BASE/server/config/jaas-loginmodule.conf")]),e._v(" (launcher install) or "),t("code",[e._v("/etc/rundeck/jaas-loginmodule.conf")]),e._v(" (RPM/Deb install).")]),e._v(" "),t("h2",{attrs:{id:"upgrading-an-existing-h2-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-an-existing-h2-database","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrading an existing H2 Database")]),e._v(" "),t("p",[e._v("If you want to migrate your existing H2 Database, you will have to download an additional jar file to enable upgrading to the newer H2 version used in Rundeck 2.0.")]),e._v(" "),t("p",[e._v("Download the "),t("code",[e._v("h2mig_pagestore_addon.jar")]),e._v(" file linked on this page:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://www.h2database.com/html/advanced.html#database_upgrade",target:"_blank",rel:"noopener noreferrer"}},[e._v("H2 Database Upgrade"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Direct link: "),t("a",{attrs:{href:"http://h2database.com/h2mig_pagestore_addon.jar",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://h2database.com/h2mig_pagestore_addon.jar"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("Copy the file to "),t("code",[e._v("$RDECK_BASE/server/lib")]),e._v(" (launcher jar) or "),t("code",[e._v("/var/lib/rundeck/bootstrap")]),e._v(" (RPM/Deb install).")]),e._v(" "),t("h2",{attrs:{id:"upgrading-an-existing-mysql-or-other-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-an-existing-mysql-or-other-database","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrading an existing Mysql or other Database")]),e._v(" "),t("p",[e._v("Rundeck 2.0 will add some columns to the existing tables, but should allow in-place migration of the mysql database.")]),e._v(" "),t("p",[e._v("However, make sure you take appropriate backups of your data prior to upgrading.")])])},[],!1,null,null,null);a.default=o.exports}}]);