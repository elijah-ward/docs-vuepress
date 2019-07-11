(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{215:function(e,a,t){"use strict";t.r(a);var s=t(0),r=Object(s.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"rundeck-enterprise-as-a-tomcat-servlet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rundeck-enterprise-as-a-tomcat-servlet","aria-hidden":"true"}},[e._v("#")]),e._v(" Rundeck Enterprise as a Tomcat servlet")]),e._v(" "),t("h2",{attrs:{id:"installation-on-linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-on-linux","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation on Linux")]),e._v(" "),t("ul",[t("li",[e._v("Install Tomcat on your environment, as a service or just using the binaries (as for this example).")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://rundeck.org/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download"),t("OutboundLink")],1),e._v(" the latest version of Rundeck war file and place it in $tomcat.base/webapps/ as e.g. rundeck.war")]),e._v(" "),t("li",[e._v("Create $tomcat.base/bin/setenv.sh")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$ cat setenv.sh\n   JAVA_OPTS="$JAVA_OPTS -XX:MaxPermSize=512m -Xmx2048m -Xms512m -server -Drdeck.base=/path/to/rundeck.base -Drundeck.config.location=/path/to/rundeck.base/server/config/rundeck-config.properties"\n')])])]),t("ul",[t("li",[e._v("Create /path/to/rundeck.base")]),e._v(" "),t("li",[e._v("Start Tomcat")]),e._v(" "),t("li",[e._v("Go to http://localhost:8080/rundeck, then at login screen: stop Tomcat")]),e._v(" "),t("li",[e._v("Edit $rdeck.base/server/config/rundeck-config.properties to match Tomcat's url:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("grails.serverURL=http://localhost:8080/rundeck\n")])])]),t("ul",[t("li",[e._v("Edit $rdeck.base/etc/framework.properties to match Tomcat's url:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("framework.server.name = localhost\nframework.server.hostname = localhost\nframework.server.port = 8080\nframework.server.url = http://localhost:8080/rundeck\n")])])]),t("ul",[t("li",[e._v("Start Tomcat")]),e._v(" "),t("li",[e._v("Go to http://localhost:8080/rundeck and login.")])]),e._v(" "),t("h2",{attrs:{id:"installation-on-windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-on-windows","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation on Windows")]),e._v(" "),t("ul",[t("li",[e._v("Install Tomcat on your environment, as a service or just using the binaries (as for this example).")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://rundeck.org/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download"),t("OutboundLink")],1),e._v(" the latest version of Rundeck war file and place it in tomcat.base\\webapps\\ as e.g. rundeck.war")]),e._v(" "),t("li",[e._v("Create tomcat.base\\bin\\setenv.bat")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('setenv.bat content:\n   set "JRE_HOME=C:\\Program Files\\Java\\jre1.8.0_181"\n   set "JAVA_OPTS=-XX:MaxPermSize=512m -Xmx2048m -Xms512m -server -Drdeck.base=C:\\path\\to\\rundeck.base -Drundeck.config.location=C:\\path\\to\\rundeck.base\\server\\config\\rundeck-config.properties"\n')])])]),t("ul",[t("li",[e._v("Create C:\\path\\to\\rundeck.base")]),e._v(" "),t("li",[e._v("Start Tomcat")]),e._v(" "),t("li",[e._v("Go to http://localhost:8080/rundeck, then at login screen: stop Tomcat")]),e._v(" "),t("li",[e._v("Edit rdeck.base\\server\\config\\rundeck-config.properties to match Tomcat's url:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("grails.serverURL=http://localhost:8080/rundeck\n")])])]),t("ul",[t("li",[e._v("Edit rdeck.base\\etc\\framework.properties to match Tomcat's url:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("framework.server.name = localhost\nframework.server.hostname = localhost\nframework.server.port = 8080\nframework.server.url = http://localhost:8080/rundeck\n")])])]),t("ul",[t("li",[e._v("Start Tomcat")]),e._v(" "),t("li",[e._v("Go to http://localhost:8080/rundeck and login.")])]),e._v(" "),t("h2",{attrs:{id:"custom-jndi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#custom-jndi","aria-hidden":"true"}},[e._v("#")]),e._v(" Custom JNDI")]),e._v(" "),t("h3",{attrs:{id:"using-jndi-resource-database-connection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-jndi-resource-database-connection","aria-hidden":"true"}},[e._v("#")]),e._v(" Using JNDI Resource Database Connection")]),e._v(" "),t("p",[e._v("This setting allow Rundeck to use JNDI database connections instead of the default grails settings.")]),e._v(" "),t("ul",[t("li",[e._v("Add the following entry on "),t("code",[e._v("$tomcat.base/conf/server.xml")]),e._v(" under the "),t("code",[e._v("<GlobalNamingResources>")]),e._v(" tag:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('\x3c!-- Global JNDI resources\n      Documentation at /docs/jndi-resources-howto.html\n --\x3e\n <GlobalNamingResources>\n   \x3c!-- Editable user database that can also be used by\n        UserDatabaseRealm to authenticate users\n   --\x3e\n   <Resource name="UserDatabase" auth="Container"\n             type="org.apache.catalina.UserDatabase"\n             description="User database that can be updated and saved"\n             factory="org.apache.catalina.users.MemoryUserDatabaseFactory"\n             pathname="conf/tomcat-users.xml" />\n\n<Resource name="jdbc/rundeckdb"\n                 global="jdbc/rundeckdb"\n                 auth="Container"\n                 type="javax.sql.DataSource"\n   maxActive="100"\n                maxIdle="30"\n                maxWait="10000"\n                username="rundeckuser"\n                password="password"\n                driverClassName="com.mysql.jdbc.Driver"\n                url="jdbc:mysql://localhost:3306/rundeckdb"/>\n\n</GlobalNamingResources>\n')])])]),t("ul",[t("li",[e._v("Add the Resource link on "),t("code",[e._v("$tomcat.base/conf/context.xml")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<ResourceLink name="jdbc/rundeckdb"\n                        global="jdbc/rundeckdb"\n                        type="javax.sql.DataSource"/>\n')])])]),t("ul",[t("li",[e._v("on "),t("code",[e._v("$rundeck.base/server/config/rundeck-config.properties")]),e._v(" add the "),t("code",[e._v("dataSource.jndiName")]),e._v(" entry:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("dataSource.jndiName=java:/comp/env/jdbc/rundeckdb\n")])])]),t("p",[e._v("This will replace the dataSource.* entries")]),e._v(" "),t("h3",{attrs:{id:"using-jndi-database-to-manage-the-authentication"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-jndi-database-to-manage-the-authentication","aria-hidden":"true"}},[e._v("#")]),e._v(" Using JNDI Database to manage the authentication")]),e._v(" "),t("p",[e._v("To use a custom authentication method using database tables:")]),e._v(" "),t("ul",[t("li",[e._v("It is necessary to have tables like this:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("create table users (\nuser_name varchar(15) not null primary key,\nuser_pass varchar(15) not null\n);\n\ncreate table user_roles (\nuser_name varchar(15) not null,\nrole_name varchar(15) not null,\nprimary key (user_name, role_name)\n);\n\ninsert into users('samuel','samuel');\ninsert into user_roles values('samuel','user');\ninsert into user_roles values('samuel','admin');\n")])])]),t("ul",[t("li",[e._v("Define the Resource connection in "),t("code",[e._v("$tomcat.base/conf/server.xml")]),e._v(":")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('\x3c!-- Global JNDI resources\n      Documentation at /docs/jndi-resources-howto.html\n --\x3e\n <GlobalNamingResources>\n   \x3c!-- Editable user database that can also be used by\n        UserDatabaseRealm to authenticate users\n   --\x3e\n   <Resource name="UserDatabase" auth="Container"\n             type="org.apache.catalina.UserDatabase"\n             description="User database that can be updated and saved"\n             factory="org.apache.catalina.users.MemoryUserDatabaseFactory"\n             pathname="conf/tomcat-users.xml" />\n\n    <Resource name="jdbc/testDB"\n                       auth="Container"\n                       type="javax.sql.DataSource"\n                       maxActive="100"\n                       maxIdle="30"\n                       maxWait="10000"\n                       username="rundeckauth"\n                       password="password"\n                       driverClassName="com.mysql.jdbc.Driver"\n                       url="jdbc:mysql://localhost:3306/userauthdb?autoReconnect=true"/>\n\n  </GlobalNamingResources>\n')])])]),t("ul",[t("li",[e._v("Define the JNDI entry in "),t("code",[e._v("$tomcat.base/conf/server.xml")]),e._v(":")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('     \x3c!-- Use the LockOutRealm to prevent attempts to guess user passwords\n          via a brute-force attack --\x3e\n     <Realm className="org.apache.catalina.realm.LockOutRealm">\n       \x3c!-- This Realm uses the UserDatabase configured in the global JNDI\n            resources under the key "UserDatabase".  Any edits\n            that are performed against this UserDatabase are immediately\n            available for use by the Realm.  --\x3e\n       <Realm className="org.apache.catalina.realm.UserDatabaseRealm"\n              resourceName="UserDatabase"/>\n     </Realm>\n\n     <Realm className="org.apache.catalina.realm.DataSourceRealm"\n                  dataSourceName="jdbc/testDB"\n     userTable="users"\n     userNameCol="user_name"\n     userCredCol="user_pass"\n     userRoleTable="user_roles"\n     roleNameCol="role_name"/>\n')])])]),t("p",[e._v("Further information:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://tomcat.apache.org/tomcat-7.0-doc/realm-howto.html#DataSourceRealm",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://tomcat.apache.org/tomcat-7.0-doc/realm-howto.html#DataSourceRealm"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://tomcat.apache.org/tomcat-7.0-doc/jndi-datasource-examples-howto.html#MySQL_DBCP_Example",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://tomcat.apache.org/tomcat-7.0-doc/jndi-datasource-examples-howto.html#MySQL_DBCP_Example"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"users-authentication"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#users-authentication","aria-hidden":"true"}},[e._v("#")]),e._v(" Users authentication")]),e._v(" "),t("p",[e._v("Note for Linux and Windows installations: users are no longer in Tomcat's configuration files, at this point, users should be configured as in a "),t("a",{attrs:{href:"https://rundeck.org/docs/administration/security/authenticating-users.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("launcher installation"),t("OutboundLink")],1),e._v(" and java options should be append to the setenv.sh or setenv.bat file:")]),e._v(" "),t("h2",{attrs:{id:"known-issue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#known-issue","aria-hidden":"true"}},[e._v("#")]),e._v(" Known issue")]),e._v(" "),t("p",[e._v("If ldap/AD authentication is configured, you will need to copy below file (use proper path on Windows) and then restart Tomcat:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cp $tomcat.base/webapps/rundeck/WEB-INF/lib-provided/jetty-util-9.4.11.v20180605.jar $tomcat.base/webapps/rundeck/WEB-INF/lib/\n")])])])])},[],!1,null,null,null);a.default=r.exports}}]);