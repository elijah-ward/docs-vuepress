(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{230:function(e,t,s){"use strict";s.r(t);var n=s(0),o=Object(n.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"file-transfer-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#file-transfer-plugins","aria-hidden":"true"}},[e._v("#")]),e._v(" File Transfer Plugins")]),e._v(" "),s("p",[e._v("This plugin provides FTP/SFTP/HTTP file transfers via Workflow Steps.\nIt is available since 2.1.0 (Rundeck Enterprise Version History)")]),e._v(" "),s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),s("p",[s("strong",[e._v("Source")])]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("URL (required)")]),e._v(": URL for the source host. Supported protocols are: file, ftp, sftp, http, https.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Username")]),e._v(": Username for the source server. Required only if the protocol is not "),s("code",[e._v("file://")]),e._v(".")])])]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Authentication Type")]),e._v(": Source Authentication Type. Required only if the protocol is not "),s("code",[e._v("file://")]),e._v(" (Key authentication just enable for SFTP protocol)")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Password")]),e._v(": Password for the source FTP client. Required only if the protocol is not "),s("code",[e._v("file://")]),e._v(".")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Private Key")]),e._v(": Private Key path for the source FTP client (Just for SFTP protocol).")])])]),e._v(" "),s("p",[s("strong",[e._v("Destination")])]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("URL (required)")]),e._v(": URL for the destination file. Supported protocols are: file, ftp, sftp.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Username")]),e._v(": Username for the destination server. Required only if the protocol is not "),s("code",[e._v("file://")]),e._v(".")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Authentication Type")]),e._v(": Destination Authentication Type. Required only if the protocol is not "),s("code",[e._v("file://")]),e._v(" (Key authentication just enable for SFTP protocol)")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Password")]),e._v(": Password for the source FTP client. Required only if the protocol is not "),s("code",[e._v("file://")]),e._v(".")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Private Key")]),e._v(": Private Key path for the destination (Just for SFTP protocol).")])])]),e._v(" "),s("p",[s("strong",[e._v("Options")])]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("BackUp on Destination file exists?")]),e._v(": Should back up on the Destination file if already exits?.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("BackUp on Source?")]),e._v(": Should back up on the Source?.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Backup on Source Path")]),e._v(": Will use the same protocol, host, and credentials than the source.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Delete file after operation?")]),e._v(": Should the file be deleted after complete the operation?.")])])]),e._v(" "),s("h2",{attrs:{id:"ssh-keys-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh-keys-settings","aria-hidden":"true"}},[e._v("#")]),e._v(" SSH Keys settings")]),e._v(" "),s("h3",{attrs:{id:"sftp-host-keys-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sftp-host-keys-setup","aria-hidden":"true"}},[e._v("#")]),e._v(" SFTP Host Keys setup.")]),e._v(" "),s("p",[e._v("The SFTP endpoint of this plugin uses the SSH protocol for communication, which needs a trusted base of keys for identifying each host.\nThis key base is commonly known in the Linux world as the "),s("code",[e._v("$HOME/.ssh/known_hosts")]),e._v(" file.")]),e._v(" "),s("p",[e._v("This plugin uses the same file format to search for the host's keys, searching them at the "),s("code",[e._v("$RDECK_BASE/.ssh/known_hosts")]),e._v(" file.\nIf a server is not specified in this file, SFTP communication will not work. In this case, you will see an error like this in the log:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Error [JSchException] creating SFTP endpoint: UnknownHostKey: 10.10.10.4. RSA key fingerprint is 23:7a:96:8f:02:b5:0d:ad:ee:ec:69:ad:b8:c3:1b:30\n")])])]),s("h3",{attrs:{id:"installing-a-host-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-a-host-key","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing a host key.")]),e._v(" "),s("p",[e._v("To install a host key you need to retrieve the key first. This is easily done on a Linux server using the following command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ssh-keyscan -t rsa <SERVER ADDRESS>\n")])])]),s("p",[e._v("This command will output a text line.")]),e._v(" "),s("p",[e._v("For example, the command "),s("code",[e._v("ssh-keyscan -t rsa 10.10.10.4")]),e._v(" should output:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("10.10.10.4 ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDR8LIJso4j+8l5p5Kx4Vm3gZEFzeChihD2nRqJvXZqjpo64bs6AjT8ismwTjAlzJVeFTiRW5/Kj/HAk2ipVTaNbqdwSrKBKewu0BwSWuY84VWZGC4V1R2QUS6+nMeXdi+A0BJFW3rM6uyhb+EgtyOd4ZnwKAoF01FW76zvdY3O0erwcxLZHP8y92C/Qgy+2ii8xfVGrmUNkX+neoNisMllyr+UOXzpPWFmPgyCE7r7Cptishj66XFfQI+xh5HiVL4sbnGP3jX8fC3C802znZ9XgGVENxdwIZqWfc8JzsjfHF6HD7lY/zgS5r/JcxX5Zt4gGjmzy0inJRogWCwXI1+r\n")])])]),s("p",[e._v("Copy this line entirely (be very careful to copy all characters) and paste it into the "),s("code",[e._v("$RDECK_BASE/.ssh/known_hosts")]),e._v(" file.\nEnsure each hostkey text is one single line on the file. If the address reported at this text does not match the IP you need on your Rundeck server, you can change the IP address manually.\nYou must be careful to not modify any text character besides the server address.")]),e._v(" "),s("h3",{attrs:{id:"what-if-my-rundeck-server-is-a-windows-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-if-my-rundeck-server-is-a-windows-server","aria-hidden":"true"}},[e._v("#")]),e._v(" What if my Rundeck server is a windows server?")]),e._v(" "),s("p",[e._v("If Rundeck is running in a windows server, you have a few options:")]),e._v(" "),s("p",[e._v("You can run the above command on a Linux server (even the destination server is useful) and copy the text to your Rundeck’s known_hosts file.\nBe sure to set the correct address at the start of the line.")]),e._v(" "),s("p",[e._v("You can a windows SSH client to retrieve the hostkey. Be sure to retrieve the key in the correct “known_hosts” format.\nYou can install OpenSSH on Windows to provide the "),s("code",[e._v("sh-keyscan")]),e._v(" command.\nKnown Issues\nWhen using SFTP protocol, JSCH will search for the host key at "),s("code",[e._v("%RDECK_BASE%/.ssh/known_hosts")]),e._v(" file, however, the Java JVM and JSCH do not provide the default encryption algorithms used by OpenSSH (ecdsa-sha2-nistp256 as of 07-2016) resulting in failure on finding the server key even if the server is present in the known_hosts file.")]),e._v(" "),s("p",[e._v("As a workaround, be sure to extract the hostkey using the "),s("code",[e._v("-t rsa")]),e._v(" parameter for "),s("code",[e._v("sh-keyscan")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ssh-keyscan -t rsa <SERVER ADDRESS>\n")])])]),s("p",[e._v("If you DO need the use of strongest encryption methods (like ecdsa), you must install the Java Cryptography Extension (JCE) Unlimited Strength Jurisdiction Policy Files on your JVM.")]),e._v(" "),s("p",[e._v("More info on this issue "),s("a",{attrs:{href:"http://stackoverflow.com/questions/30846076/jsch-algorithm-negotiation-fail",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),s("h3",{attrs:{id:"copy-from-sftp-to-local"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copy-from-sftp-to-local","aria-hidden":"true"}},[e._v("#")]),e._v(" Copy from SFTP to Local")]),e._v(" "),s("p",[e._v("This job copy a file from remote machine to the Rundeck server using SFTP")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("- defaultTab: summary\n  description: 'Copy a file from SFTP server to rundeck'\n  executionEnabled: true\n  group: FileTransfer\n  loglevel: INFO\n  name: FileTransferSftp\n  nodeFilterEditable: false\n  scheduleEnabled: true\n  sequence:\n    commands:\n    - configuration:\n        backupDestinationFile: 'false'\n        backupSourceFile: 'false'\n        deleteFile: 'false'\n        destURLString: file:///var/lib/rundeck/\n        sourceAuthentication: password\n        sourcePassword: keys/node/user.password\n        sourceURLString: sftp://stfp-sever:/home/user/somefile.dat\n        sourceUsername: user\n      nodeStep: true\n      type: filetransfer\n    keepgoing: false\n    strategy: node-first\n")])])]),s("h3",{attrs:{id:"copy-from-local-to-ftp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copy-from-local-to-ftp","aria-hidden":"true"}},[e._v("#")]),e._v(" Copy from Local to FTP")]),e._v(" "),s("p",[e._v("This job copy a file from the Rundeck server to a remote machine using FTP")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("- defaultTab: summary\n  description: 'Copy a file from local to a FTP server'\n  executionEnabled: true\n  group: FileTransfer\n  loglevel: INFO\n  name: FileTransferFtp\n  nodeFilterEditable: false\n  scheduleEnabled: true\n  sequence:\n    commands:\n    - configuration:\n        backupDestinationFile: 'false'\n        backupSourceFile: 'false'\n        deleteFile: 'false'\n        destAuthentication: password\n        destPassword: keys/node/windows.password\n        destURLString: ftp://windows-server/tmp/\n        destUsername: Administrator\n        sourceURLString: file:///var/lib/rundeck/test.txt\n      nodeStep: true\n      type: filetransfer\n    keepgoing: false\n    strategy: node-first\n\n")])])])])},[],!1,null,null,null);t.default=o.exports}}]);