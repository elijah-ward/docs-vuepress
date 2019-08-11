(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{540:function(e,r,t){"use strict";t.r(r);var n=t(0),o=Object(n.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"version-2-2-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version-2-2-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Version 2.2.2")]),e._v(" "),t("h1",{attrs:{id:"release-2-2-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#release-2-2-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Release 2.2.2")]),e._v(" "),t("p",[e._v("=============")]),e._v(" "),t("p",[e._v("Date: 2014-09-19")]),e._v(" "),t("p",[e._v("This release fixes a number of bugs and addresses several potential security issues:")]),e._v(" "),t("ol",[t("li",[e._v("Require a unique token for each form request from the GUI, which prevents replay and CSRF attacks")]),e._v(" "),t("li",[e._v("Updated all pages to prevent unencoded data from being written to the response, preventing XSS style attacks.")]),e._v(" "),t("li",[e._v("Prevent access to the /api URLs via the web GUI.")]),e._v(" "),t("li",[e._v("Some plugins (Resource model, Node Executor and File Copier) now support using Password fields displayed in the Project config page. The field values once set are never revealed in clear text via the GUI.")])]),e._v(" "),t("p",[e._v("Please see the Notes below for some configuration information\nrelated to these changes.")]),e._v(" "),t("p",[t("strong",[e._v("A big Thank You to one of our clients for sponsoring the work for these enhancements.")])]),e._v(" "),t("p",[t("em",[e._v("Security Notes:")])]),e._v(" "),t("p",[e._v('The new form tokens used in all form requests\nby default will expire in 30 minutes.\nThis means that if your session timeout is larger than 30 minutes\nand you attempt to e.g. run a job\nafter your web page has been sitting open for longer than that,\nyou will see an "Invalid token" error.\nIf this becomes a problem for you\nyou can either change the expiration time for these tokens,\nor switch to using non-expiring tokens.\nSee [Administration - Configuration File Reference - Security](/administration/configuration/config-file-reference.md#security].')]),e._v(" "),t("p",[e._v("To add a Password field definition to your plugin,\nsee [Plugin Development - Description Properties](/developer/01-plugin-development.md#description-properties].\n(Note that currently using property annotations is not supported\nfor the three plugin types that can use Password properties.)")]),e._v(" "),t("p",[t("em",[e._v("Upgrade notes:")])]),e._v(" "),t("p",[e._v("See the "),t("router-link",{attrs:{to:"/upgrading/upgrading.html"}},[e._v("Upgrading Guide")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"contributors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contributors","aria-hidden":"true"}},[e._v("#")]),e._v(" Contributors")]),e._v(" "),t("ul",[t("li",[e._v("Andreas Knifh (knifhen)")]),e._v(" "),t("li",[e._v("Daniel Serodio (dserodio)")]),e._v(" "),t("li",[e._v("Greg Schueler (gschueler)")])]),e._v(" "),t("h2",{attrs:{id:"bug-reporters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug-reporters","aria-hidden":"true"}},[e._v("#")]),e._v(" Bug Reporters")]),e._v(" "),t("ul",[t("li",[e._v("adolfocorreia")]),e._v(" "),t("li",[e._v("ahonor")]),e._v(" "),t("li",[e._v("arjones85")]),e._v(" "),t("li",[e._v("danpilch")]),e._v(" "),t("li",[e._v("dennis-benzinger-hybris")]),e._v(" "),t("li",[e._v("dserodio")]),e._v(" "),t("li",[e._v("garyhodgson")]),e._v(" "),t("li",[e._v("gschueler")]),e._v(" "),t("li",[e._v("jerome83136")]),e._v(" "),t("li",[e._v("knifhen")]),e._v(" "),t("li",[e._v("majkinetor")]),e._v(" "),t("li",[e._v("rfletcher")]),e._v(" "),t("li",[e._v("schicky")])]),e._v(" "),t("h2",{attrs:{id:"issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#issues","aria-hidden":"true"}},[e._v("#")]),e._v(" Issues")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/934",target:"_blank",rel:"noopener noreferrer"}},[e._v("dynamic node filter string incorrectly includes name: prefix"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/931",target:"_blank",rel:"noopener noreferrer"}},[e._v("aclpolicy files are listed in random order in Configure page"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/925",target:"_blank",rel:"noopener noreferrer"}},[e._v('Improve "Authenticating Users" docs re. logging'),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/919",target:"_blank",rel:"noopener noreferrer"}},[e._v("Security: allow plugins to specify password properties that are obscured in project config page"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/915",target:"_blank",rel:"noopener noreferrer"}},[e._v("Job Variable Length is too low"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/910",target:"_blank",rel:"noopener noreferrer"}},[e._v("Config toggle: Hide error page stacktrace"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/909",target:"_blank",rel:"noopener noreferrer"}},[e._v("Security: CSRF prevention"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/908",target:"_blank",rel:"noopener noreferrer"}},[e._v("Security: prevent XSS issues"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/907",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cannot pass multiple values to multivalued option with enforced values"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/905",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rundeck 2.1.1 scheduling bug"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/904",target:"_blank",rel:"noopener noreferrer"}},[e._v("Selectively Disable metrics servlets features"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/903",target:"_blank",rel:"noopener noreferrer"}},[e._v("Broken Link in Documentation"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/901",target:"_blank",rel:"noopener noreferrer"}},[e._v("Machine tag style attributes don't get replaced "),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/900",target:"_blank",rel:"noopener noreferrer"}},[e._v("Scheduled job with retry never completes 2.2.1"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/898",target:"_blank",rel:"noopener noreferrer"}},[e._v("API docs state latest version is 11, but it is 12"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/896",target:"_blank",rel:"noopener noreferrer"}},[e._v("NPE: Cannot get property 'nodeSet' on null object since upgrade to 2.2.1-1"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/894",target:"_blank",rel:"noopener noreferrer"}},[e._v("Powershell and script-exec - extension problem"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/892",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ldap nestedGroup examples"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/883",target:"_blank",rel:"noopener noreferrer"}},[e._v('"Retry failed nodes" does not seem to work, when using dynamic nodes filters'),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/861",target:"_blank",rel:"noopener noreferrer"}},[e._v("UI job status incorrect"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/844",target:"_blank",rel:"noopener noreferrer"}},[e._v("Odd page when not allowing node info access"),t("OutboundLink")],1)])])])},[],!1,null,null,null);r.default=o.exports}}]);