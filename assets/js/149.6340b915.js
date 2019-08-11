(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{578:function(e,r,t){"use strict";t.r(r);var n=t(0),o=Object(n.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"version-2-0-2-snapshot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version-2-0-2-snapshot","aria-hidden":"true"}},[e._v("#")]),e._v(" Version 2.0.2-SNAPSHOT")]),e._v(" "),t("h1",{attrs:{id:"release-2-0-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#release-2-0-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Release 2.0.2")]),e._v(" "),t("p",[e._v("=============")]),e._v(" "),t("p",[e._v("Date: 2014-03-13")]),e._v(" "),t("p",[e._v("This is a bugfix release.")]),e._v(" "),t("p",[t("em",[e._v("Important Upgrade Note")]),e._v(": This bug "),t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/661",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 661"),t("OutboundLink")],1),e._v("\nis caused by the VARCHAR length being too small for a database column.  Unfortunately grails won't\nautomatically update the VARCHAR size when you upgrade.")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("If you are using a different database (mysql, etc.), you will have\nto update your schema manually.")])]),e._v(" "),t("li",[t("p",[e._v("If you are using H2, you can use this\nscript to update your database:")]),e._v(" "),t("ol",[t("li",[e._v("Shutdown rundeck")]),e._v(" "),t("li",[e._v("Run "),t("a",{attrs:{href:"https://gist.github.com/gschueler/9534814#file-rundeck-2-0-2-h2-upgrade-sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("rundeck-2.0.2-h2-upgrade.sh"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Start rundeck")])])])]),e._v(" "),t("h2",{attrs:{id:"contributors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contributors","aria-hidden":"true"}},[e._v("#")]),e._v(" Contributors")]),e._v(" "),t("ul",[t("li",[e._v("David Wittman")]),e._v(" "),t("li",[e._v("Greg Schueler")]),e._v(" "),t("li",[e._v("Alex Honor")])]),e._v(" "),t("h2",{attrs:{id:"issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#issues","aria-hidden":"true"}},[e._v("#")]),e._v(" Issues")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/702",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grammar fix in Job editor view"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/698",target:"_blank",rel:"noopener noreferrer"}},[e._v('Import of an Exported Rundeck Project Results in "No such property: year for class: java.lang.String"'),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/695",target:"_blank",rel:"noopener noreferrer"}},[e._v("Plugin development guide broken into per plugin pages"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/691",target:"_blank",rel:"noopener noreferrer"}},[e._v("Custom Attributes unusable in dynamic filters"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/690",target:"_blank",rel:"noopener noreferrer"}},[e._v(" Required options are not visible when the job page is refreshed"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/684",target:"_blank",rel:"noopener noreferrer"}},[e._v("[2.0.1] Option field is split when use Run Again... button"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/678",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rundeck 2.0.1 - cron settings reset in ui"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/675",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rundeck 2.0.1 - Improve look of unauthorized access pages"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/674",target:"_blank",rel:"noopener noreferrer"}},[e._v("Activity page: can show activity for wrong project"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/673",target:"_blank",rel:"noopener noreferrer"}},[e._v("Project import: failure if execution workflow has nodeStep jobref"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/672",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rundeck 2.0.1 - Can not hide 'Command' / adhoc section"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/670",target:"_blank",rel:"noopener noreferrer"}},[e._v("Update upstart init script to allow service stop command"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/669",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rundeck can't be stopped/restarted on Ubuntu"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/668",target:"_blank",rel:"noopener noreferrer"}},[e._v("Show all tags button doesn't work correctly on Job run page"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/661",target:"_blank",rel:"noopener noreferrer"}},[e._v("rundeck 2.0.1 - change target nodes - sql error when run is activated "),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/658",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rundeck 2.0.1 - remove UUID doesn't work when uploading job definition "),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/657",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rundeck 2.0.1 - 2013 copyright in footer"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/656",target:"_blank",rel:"noopener noreferrer"}},[e._v("Export archive failed with NullPointerException in Rundeck 2.0.0"),t("OutboundLink")],1)])])])},[],!1,null,null,null);r.default=o.exports}}]);