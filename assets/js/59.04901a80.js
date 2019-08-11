(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{523:function(e,t,r){"use strict";r.r(t);var a=r(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"security-mode-for-microsoft-sql-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#security-mode-for-microsoft-sql-server","aria-hidden":"true"}},[e._v("#")]),e._v(" Security mode for Microsoft SQL Server")]),e._v(" "),r("p",[e._v("Tested version")]),e._v(" "),r("ul",[r("li",[e._v("Rundeck 3.0.6 TEAM")]),e._v(" "),r("li",[e._v("SQL Server 2017 Express")]),e._v(" "),r("li",[e._v("Windows 2012 R2")]),e._v(" "),r("li",[e._v("Java 1.8")])]),e._v(" "),r("p",[e._v("To enable security mode with SQL Server when executing rundeck.")]),e._v(" "),r("p",[e._v('Copy the "sqljdbc_auth.dll" file to correct folder')]),e._v(" "),r("p",[e._v("32 Bit: "),r("code",[e._v("\\JDBC_SQL_Server\\sqljdbc_4.1\\enu\\auth\\x86\\sqljdbc_auth.dll")])]),e._v(" "),r("p",[e._v("64 Bit: "),r("code",[e._v("\\JDBC_SQL_Server\\sqljdbc_4.1\\enu\\auth\\x64\\sqljdbc_auth.dll")])]),e._v(" "),r("p",[e._v("If is java 32 bits, the dll ( 32 bits ) should be copied to "),r("code",[e._v("c:\\windows\\")])]),e._v(" "),r("p",[e._v("If is java 64 bits, the dll ( 64 bits ) should be copied to "),r("code",[e._v("c:\\windows\\system32")])]),e._v(" "),r("p",[e._v("Some common errors may occur like the following")]),e._v(" "),r("p",[e._v("1.- Library not found")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("\ncom.microsoft.sqlserver.jdbc.SQLServerException: This driver is not configured for integrated authentication. ClientConnectionId:9dee6baf-4f79-4b42-984b-7f623e310e1d\n\n")])])]),r("p",[e._v("2.- If Rundeck was started from a different domain than the database server this error may occurs.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("\ncom.microsoft.sqlserver.jdbc.SQLServerException: Login failed. The login is from an untrusted domain and cannot be used with Integrated authentication. ClientConnectionId:933d902b-1a74-429c-974c-5c20d9a588d0\n        at com.microsoft.sqlserver.jdbc.SQLServerException.makeFromDatabaseError(SQLServerException.java:259)\n\n")])])]),r("p",[e._v('One solution is to use "localhost" in the jdbc connection')]),e._v(" "),r("p",[e._v("3.- Different arquitecture error")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("Configuring Spring Security Core ...\n... finished configuring Spring Security Core\n\n2018-10-12 23:54:37.224  WARN --- [           main] c.m.s.jdbc.internals.AuthenticationJNI   : Failed to load the sqljdbc_auth.dll cause : C:\\Windows\\sqljd\nbc_auth.dll: Can't load AMD 64-bit .dll on a IA 32-bit platform\n2018-10-12 23:54:51.724 ERROR --- [           main] o.a.tomcat.jdbc.pool.ConnectionPool      : Unable to create initial connections of pool.\n\n")])])]),r("p",[e._v("Example configuration in rundeck.config")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("##############Config BD SQL Server Example ###########\n\n   rundeck.projectsStorageType=db\n    dataSource.dbCreate = update\n    dataSource.driverClassName = com.microsoft.sqlserver.jdbc.SQLServerDriver\n\n#. Non Secure mode\n#.    dataSource.url = jdbc:sqlserver://<IP_Address>;DatabaseName=rundeckdb\n\n#. Secure mode\n    dataSource.url = jdbc:sqlserver://localhost;integratedSecurity=true;DatabaseName=rundeckdb\n\n    dataSource.username = rundeckuser\n    dataSource.password = rundeckpass\n\n#################################\n")])])])])},[],!1,null,null,null);t.default=n.exports}}]);