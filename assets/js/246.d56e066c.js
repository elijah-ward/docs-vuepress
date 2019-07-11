(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{202:function(e,o,t){"use strict";t.r(o);var r=t(0),n=Object(r.a)({},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"job-workflows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#job-workflows","aria-hidden":"true"}},[e._v("#")]),e._v(" Job Workflows")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("The Job's most basic feature is its ability to execute one or more\nsteps. This sequence of steps is called a "),t("em",[e._v("workflow")]),e._v(".")]),e._v(" "),t("p",[e._v("The steps of the Job workflow are displayed when viewing a Job's\ndetail from a Job listing or within the Job editor form.")]),e._v(" "),t("h2",{attrs:{id:"workflow-definition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workflow-definition","aria-hidden":"true"}},[e._v("#")]),e._v(" Workflow definition")]),e._v(" "),t("p",[e._v("Workflows can be defined within the Rundeck graphical console or as an\nXML or YAML document that is loaded to the server.")]),e._v(" "),t("p",[e._v("The graphical console provides an authoring environment where steps\ncan be added, edited, removed or reordered.")]),e._v(" "),t("p",[e._v("Users preferring to define Jobs in a text format should refer to the two format definitions:")]),e._v(" "),t("ul",[t("li",[e._v("XML: "),t("router-link",{attrs:{to:"/manpages/man5/job-v20.html"}},[e._v("job-xml")])],1),e._v(" "),t("li",[e._v("YAML: "),t("router-link",{attrs:{to:"/manpages/man5/job-yaml-v12.html"}},[e._v("job-yaml")])],1)]),e._v(" "),t("p",[e._v("It is also possible to author Jobs inside the graphical console\nand then export the definition as a file using the\n"),t("code",[e._v("rd")]),e._v(" CLI tool ([rd]), or via the API.")]),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"#command-line-tools-and-api-access"}},[e._v("Command Line Tools and API Acccess")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"workflow-control-settings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workflow-control-settings","aria-hidden":"true"}},[e._v("#")]),e._v(" Workflow control settings")]),e._v(" "),t("p",[e._v("Workflow execution is controlled by two important settings: "),t("em",[e._v("Keepgoing")]),e._v("\nand "),t("em",[e._v("Strategy")]),e._v(".")]),e._v(" "),t("p",[t("img",{attrs:{src:"/figures/fig0401.png",alt:"Workflow controls"}})]),e._v(" "),t("p",[t("em",[e._v("Keepgoing")]),e._v(": This manages what to do if a step incurs an error:")]),e._v(" "),t("ul",[t("li",[e._v("Stop at the failed step: Fail immediately (default).")]),e._v(" "),t("li",[e._v("Run remaining steps before failing: Continue to next steps and fail the job at the end.")])]),e._v(" "),t("p",[e._v("The default is to fail immediately but depending on the procedure at\nhand you can choose to have the execution continue.")]),e._v(" "),t("p",[t("em",[e._v("Strategy")]),e._v(": Controls the order of execution of steps and command\ndispatch to nodes: "),t("em",[e._v("Node-oriented")]),e._v(" and "),t("em",[e._v("Step-oriented")]),e._v(".")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("Node-oriented")]),e._v(": Executes the full workflow on each node before the\nnext node. (default)")]),e._v(" "),t("li",[t("em",[e._v("Step-oriented")]),e._v(": Executes each step on all nodes before the next\nnode.")])]),e._v(" "),t("p",[e._v("The following illustrations contrast the strategies showing how three\nsteps proceed across two nodes.")]),e._v(" "),t("p",[e._v("Node-oriented flow illustrated:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('1.   NodeA    step#1\n2.     "      step#2\n3.     "      step#3\n4.   NodeB    step#1\n5.     "      step#2\n6.     "      step#3\n')])])]),t("p",[e._v("Step-oriented flow illustrated:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('1.   NodeA    step#1\n2.   NodeB      "\n3.   NodeA    step#2\n4.   NodeB      "\n5.   NodeA    step#1\n6.   NodeB      "\n')])])]),t("p",[e._v("The process you are automating will determine which strategy is\ncorrect, though the node-oriented flow is more commonplace.")]),e._v(" "),t("p",[e._v("For more complex workflow strategy rules, see "),t("router-link",{attrs:{to:"/manual/workflow-strategies/ruleset.html"}},[e._v("Ruleset Workflow Strategy Plugin")])],1),e._v(" "),t("h2",{attrs:{id:"workflow-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workflow-steps","aria-hidden":"true"}},[e._v("#")]),e._v(" Workflow steps")]),e._v(" "),t("p",[e._v("The following sections describe how to construct a workflow as a set\nof steps of different types.")]),e._v(" "),t("p",[e._v("When creating a new Job definition, the Workflow form will be set with\ndefaults and have no workflow steps defined. The workflow editor will\nhave a form open asking to choose a step type to add.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/figures/fig0402.png",alt:"Add a step"}})]),e._v(" "),t("p",[e._v('To add new steps simply press the "Add a step" link inside the workflow\neditor form. This will prompt you with a dialog asking which kind of\nstep you would like to add. Each kind of step has its own\nform. When you are done filling out the form, press "Save" to add it\nto the sequence. Pressing "Cancel" will close the form and leave the\nsequence unchanged.')]),e._v(" "),t("p",[t("img",{attrs:{src:"/figures/fig0403.png",alt:"Add a step form"}})]),e._v(" "),t("p",[e._v("New steps are always added to the end of the sequence. See\n"),t("a",{attrs:{href:"#reordering-steps"}},[e._v("Reordering steps")]),e._v("\nfor directions on moving steps into a new order.")]),e._v(" "),t("p",[e._v('Each step can have a "Description" to give it a more logical name or description to be displayed in the Rundeck GUI.')]),e._v(" "),t("p",[e._v("The next several sections describe the specification of each kind of\nworkflow step.")]),e._v(" "),t("p",[t("strong",[e._v("Types of Steps")])]),e._v(" "),t("p",[e._v("Steps in a workflow can be either "),t("em",[e._v("Node Steps")]),e._v(" or "),t("em",[e._v("Workflow Steps")]),e._v(".")]),e._v(" "),t("ul",[t("li",[e._v("Node Steps operate once on each Node, which could be multiple times within a workflow. For a full list of Node Steps, see "),t("router-link",{attrs:{to:"/manual/job-plugins.html#node-steps"}},[e._v("Job Plugins - Node Steps")])],1),e._v(" "),t("li",[e._v("Workflow Steps operate only once in the workflow. For a full list of Workflow Steps, see "),t("router-link",{attrs:{to:"/manual/job-plugins.html#workflow-steps"}},[e._v("Workflow Steps")])],1)]),e._v(" "),t("h2",{attrs:{id:"reordering-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reordering-steps","aria-hidden":"true"}},[e._v("#")]),e._v(" Reordering steps")]),e._v(" "),t("p",[e._v("The order of the Workflow steps can be modified by hovering over any\nstep and then clicking and dragging the double arrow icon to the\ndesired position. A blue horizontal bar helps highlight the position\nwhere the Job will land.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/figures/fig0408.png",alt:"Job step reorder"}})]),e._v(" "),t("p",[e._v("After releasing the select Job, it will land in the desired position\nand the step order will be updated.")]),e._v(" "),t("p",[e._v('If you wish to Undo the step reordering, press the "Undo" link above\nthe steps.')]),e._v(" "),t("p",[e._v('The "Redo" button can be pressed to reapply the last undone change.')]),e._v(" "),t("p",[e._v('Press the "Revert All Changes" button to go back to the original step order.')]),e._v(" "),t("h2",{attrs:{id:"error-handlers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#error-handlers","aria-hidden":"true"}},[e._v("#")]),e._v(" Error Handlers")]),e._v(" "),t("p",[e._v('Each step in a Workflow can have an associated "Error Handler" action. This handler\nis a secondary step of any of the available types that will execute if the Workflow\nstep fails. Error Handler steps can be used to recover the workflow from failure, or\nsimply to execute a secondary action.')]),e._v(" "),t("p",[e._v("This provides a few different ways to deal with a step's failure:")]),e._v(" "),t("ul",[t("li",[e._v("Print additional information about a failure")]),e._v(" "),t("li",[e._v("Roll back a change")]),e._v(" "),t("li",[e._v("Recover the workflow from failure, and continue normally")])]),e._v(" "),t("p",[e._v('When a Workflow step has a failure, the behavior depends on whether it has an Error Handler or not,\nand the value of the "keepgoing" setting for the Workflow, and the value of the "keepgoingOnSuccess" for the Error Handler.')]),e._v(" "),t("ul",[t("li",[e._v("When a step fails "),t("strong",[e._v("without an Error Handler")]),e._v(" "),t("ol",[t("li",[e._v('the Workflow is marked as "failed"')]),e._v(" "),t("li",[e._v("If "),t("code",[e._v('keepgoing="false"')]),e._v(" "),t("ol",[t("li",[e._v("then the entire Workflow stops")])])]),e._v(" "),t("li",[e._v("Otherwise, the remaining Workflow steps are executed in order")]),e._v(" "),t("li",[e._v('the Workflow ends with a "failed" result status')])])])]),e._v(" "),t("p",[e._v('If you define an Error Handler for a step, then the behavior changes. The handler can recover the step\'s failure by executing successfully, and a secondary option "keepgoingOnSuccess" will\nlet you override the Workflow\'s "keepgoing" value if it is false.')]),e._v(" "),t("ul",[t("li",[e._v("When a step fails "),t("strong",[e._v("with an Error Handler")]),e._v(" "),t("ol",[t("li",[e._v("The Error Handler is executed")]),e._v(" "),t("li",[e._v("If the Error Handler was successful and has "),t("code",[e._v('keepgoingOnSuccess="true"')]),e._v(" "),t("ol",[t("li",[e._v("The workflow "),t("code",[e._v("keepgoing")]),e._v(" is ignored,")]),e._v(" "),t("li",[e._v("The Workflow failure status is "),t("em",[e._v("not")]),e._v(" marked, and it will continue to the next step")])])]),e._v(" "),t("li",[e._v("Else if "),t("code",[e._v('keepgoing="false"')]),e._v(" "),t("ol",[t("li",[e._v('The Workflow is marked as "failed"')]),e._v(" "),t("li",[e._v("Then the entire Workflow stops")])])]),e._v(" "),t("li",[e._v("Else if "),t("code",[e._v('keepgoing="true"')]),e._v(" "),t("ol",[t("li",[e._v('If the Error Handler failed then the Workflow is marked as "failed"')]),e._v(" "),t("li",[e._v("Otherwise, the Workflow is "),t("em",[e._v("not")]),e._v(" additionally marked")])])]),e._v(" "),t("li",[e._v("the remaining Workflow steps are executed in order (including other triggered Error Handlers)")]),e._v(" "),t("li",[e._v("when the Workflow ends, its status depends on if it is marked")])])])]),e._v(" "),t("p",[e._v("Essentially, the result status of the Error Handler becomes the result status of its Step, if the Workflow\nhas "),t("code",[e._v('keepgoing="true"')]),e._v(" or if the Error Handler overrides it with "),t("code",[e._v('keepgoingOnSuccess="true"')]),e._v(". If the Error Handler succeeds, then the step is not considered to have failed. This\nincludes scripts, commands, job references, etc. (Scripts and commands must have an exit status of "),t("code",[e._v("0")]),e._v(" to\nreturn success.)")]),e._v(" "),t("p",[e._v("It is a good practice, when you are defining Error Handlers, to "),t("strong",[e._v("always")]),e._v(" have them fail (e.g. scripts/commands return a non-zero exit-code), unless you specifically want them to be used for Recovery.")]),e._v(" "),t("blockquote",[t("p",[e._v('Note, Error-handlers can be attached to either Node Steps or Workflow Steps, and the type of step and the Strategy of the Workflow determines what type of Error-handler steps can be attached to a step. The only restriction is in the case that the Workflow is "Node-oriented", which means that the workflow is executed independently for each node. In this case, Node Steps can only have other Node steps as Error Handlers. In other cases, the Error Handler can be other Workflow steps.')])]),e._v(" "),t("p",[e._v('To add an error handler press the "+ error handler" button on the step you want to handle.\nThe form presented includes the normal set of steps you can add to a workflow.')]),e._v(" "),t("p",[t("img",{attrs:{src:"/figures/fig0410.png",alt:"Adding an error handler"}})]),e._v(" "),t("p",[e._v("The example below shows an error handler that calls a script by URL.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/figures/fig0411.png",alt:"Example error handler"}})]),e._v(" "),t("h3",{attrs:{id:"context-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context-information","aria-hidden":"true"}},[e._v("#")]),e._v(" Context information")]),e._v(" "),t("p",[e._v("When the Error-handler step is executed, its execution context will contain some information about the nature\nof the failure that occurred for the original step.")]),e._v(" "),t("p",[e._v("In the case where a Node Step has a Workflow Step as an Error Handler, then the failure data for multiple nodes is rolled up into a single failure reason to be used by the Workflow Step.")]),e._v(" "),t("p",[e._v("See the section on "),t("a",{attrs:{href:"#context-variables"}},[e._v("Context Variables")]),e._v(" for more information.")]),e._v(" "),t("h2",{attrs:{id:"save-the-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#save-the-changes","aria-hidden":"true"}},[e._v("#")]),e._v(" Save the changes")]),e._v(" "),t("p",[e._v('Once the Workflow steps have been defined and order, changes are\npermanently saved after pressing the "Create" button if new or the\n"Update" button if the Job is being modified.')]),e._v(" "),t("h2",{attrs:{id:"context-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context-variables","aria-hidden":"true"}},[e._v("#")]),e._v(" Context Variables")]),e._v(" "),t("p",[e._v('When a Job step is executed, it has a set of "context" variables that you can access in the Job step. There are several sets of context variables, including: the Job context '),t("code",[e._v("job")]),e._v(", the Node context "),t("code",[e._v("node")]),e._v(", and the Option context "),t("code",[e._v("option")]),e._v(".")]),e._v(" "),t("p",[e._v("Job context variables:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("job.name")]),e._v(": Name of the Job")]),e._v(" "),t("li",[t("code",[e._v("job.group")]),e._v(": Group of the Job")]),e._v(" "),t("li",[t("code",[e._v("job.id")]),e._v(": ID of the Job")]),e._v(" "),t("li",[t("code",[e._v("job.execid")]),e._v(": ID of the current Execution")]),e._v(" "),t("li",[t("code",[e._v("job.executionType")]),e._v(" : Execution type, can be "),t("code",[e._v("user")]),e._v(", "),t("code",[e._v("scheduled")]),e._v(" or "),t("code",[e._v("user-scheduled")]),e._v(" for "),t("code",[e._v("Run Job Later")]),e._v(" executions")]),e._v(" "),t("li",[t("code",[e._v("job.username")]),e._v(": Username of the user executing the Job")]),e._v(" "),t("li",[t("code",[e._v("job.project")]),e._v(": Project name")]),e._v(" "),t("li",[t("code",[e._v("job.loglevel")]),e._v(": Logging level, one of: 'ERROR','WARN','INFO','VERBOSE','DEBUG'")]),e._v(" "),t("li",[t("code",[e._v("job.user.email")]),e._v(": Executing user's email address set in "),t("router-link",{attrs:{to:"/manual/10-user.html"}},[e._v("User profile")]),e._v(".")],1),e._v(" "),t("li",[t("code",[e._v("job.retryAttempt")]),e._v(": A number indicating the attempt, if this execution is a "),t("a",{attrs:{href:"#retry"}},[e._v("retry")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("job.wasRetry")]),e._v(": "),t("code",[e._v("true")]),e._v(" if this execution is a retry, otherwise "),t("code",[e._v("false")]),e._v(". See: "),t("a",{attrs:{href:"#retry"}},[e._v("retry")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("job.threadcount")]),e._v(": Threadcount (number of nodes run at once) of the Job")]),e._v(" "),t("li",[t("code",[e._v("job.filter")]),e._v(": The filter used to select the nodes for this job (if applicable)")])]),e._v(" "),t("p",[e._v("Node context variables:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("node.name")]),e._v(": Name of the Node being executed on")]),e._v(" "),t("li",[t("code",[e._v("node.hostname")]),e._v(": Hostname of the Node")]),e._v(" "),t("li",[t("code",[e._v("node.username")]),e._v(": Username of the remote user")]),e._v(" "),t("li",[t("code",[e._v("node.description")]),e._v(": Description of the node")]),e._v(" "),t("li",[t("code",[e._v("node.tags")]),e._v(": Comma-separated list of tags")]),e._v(" "),t("li",[t("code",[e._v("node.os-*")]),e._v(": OS properties of the Node: "),t("code",[e._v("name")]),e._v(","),t("code",[e._v("version")]),e._v(","),t("code",[e._v("arch")]),e._v(","),t("code",[e._v("family")])]),e._v(" "),t("li",[t("code",[e._v("node.*")]),e._v(": All Node attributes defined on the Node.")])]),e._v(" "),t("p",[e._v("Additional Error-handler context variables:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("result.reason")]),e._v(": A code indicating the reason the step failed\n"),t("ul",[t("li",[e._v("Common reason code strings used by node execution of commands or scripts:\n"),t("ul",[t("li",[t("code",[e._v("NonZeroResultCode")]),e._v(" - the execution returned a non-zero code")]),e._v(" "),t("li",[t("code",[e._v("SSHProtocolFailure")]),e._v(" - SSH protocol failure")]),e._v(" "),t("li",[t("code",[e._v("HostNotFound")]),e._v(" - host not found")]),e._v(" "),t("li",[t("code",[e._v("ConnectionTimeout")]),e._v(" - connection timeout")]),e._v(" "),t("li",[t("code",[e._v("ConnectionFailure")]),e._v(" - connection failure (e.g. refused)")]),e._v(" "),t("li",[t("code",[e._v("IOFailure")]),e._v(" - IO error")]),e._v(" "),t("li",[t("code",[e._v("AuthenticationFailure")]),e._v(" - authentication was refused or incorrect")])])]),e._v(" "),t("li",[e._v("Reason code strings used by Job references\n"),t("ul",[t("li",[t("code",[e._v("JobFailed")]),e._v(" - referenced Job workflow failed")]),e._v(" "),t("li",[t("code",[e._v("NotFound")]),e._v(" - referenced Job not found")]),e._v(" "),t("li",[t("code",[e._v("Unauthorized")]),e._v(" - referenced Job not authorized")]),e._v(" "),t("li",[t("code",[e._v("InvalidOptions")]),e._v(" - referenced Job input options invalid")]),e._v(" "),t("li",[t("code",[e._v("NoMatchedNodes")]),e._v(" - referenced Job node dispatch filters had no match")])])]),e._v(" "),t("li",[e._v("Reason code used from a failed Node Step if the handler is a Workflow Step\n"),t("ul",[t("li",[t("code",[e._v("NodeDispatchFailure")]),e._v(" - one or more nodes failed the step")])])])])]),e._v(" "),t("li",[t("code",[e._v("result.message")]),e._v(": A string describing the failure")]),e._v(" "),t("li",[t("code",[e._v("result.resultCode")]),e._v(": Exit code from an execution (if available)")]),e._v(" "),t("li",[t("code",[e._v("result.failedNodes")]),e._v(": Comma-separated list of node names that failed for a "),t("code",[e._v("NodeDispatchFailure")])])]),e._v(" "),t("p",[e._v("Option context variables are referred to as "),t("code",[e._v("option.NAME")]),e._v(" (more about "),t("router-link",{attrs:{to:"/manual/job-options.html"}},[e._v("Job Options")]),e._v(".)")],1),e._v(" "),t("h3",{attrs:{id:"context-variable-usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context-variable-usage","aria-hidden":"true"}},[e._v("#")]),e._v(" Context Variable Usage")]),e._v(" "),t("p",[e._v("Context variables can be used in a few ways in a Job step, with slightly different syntaxes:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Commands, Script Arguments and Job Reference Arguments")]),e._v(" "),t("p",[e._v(": ${ctx.name}")])]),e._v(" "),t("li",[t("p",[e._v("Inline Script Content ("),t("em",[e._v("see note")]),e._v(")")]),e._v(" "),t("p",[e._v(": @ctx.name@")]),e._v(" "),t("blockquote",[t("p",[e._v('Note, The "Inline Script Content" variable expansion is '),t("strong",[e._v("not")]),e._v(' available for "Script File" steps. The Script File is not rewritten at all when used for execution.')])]),e._v(" "),t("blockquote",[t("p",[e._v("Note: This can be disabled, see [Administrator Guide > Configuration File Reference > framework.properties](/administration/configuration/config-file-reference.md#framework.properties].")])])]),e._v(" "),t("li",[t("p",[e._v("Environment Variables ("),t("em",[e._v("see note")]),e._v(")")]),e._v(" "),t("p",[e._v(": $RD_CTX_NAME")]),e._v(" "),t("p",[e._v("The syntax for Environment variables is that all letters become uppercase, punctuation is replaced with underscore, and the name is prefixed with "),t("code",[e._v("RD_")]),e._v(".")]),e._v(" "),t("blockquote",[t("p",[e._v("Note, See the chapter (/administration/projects/node-execution/ssh.md#configuring-remote-machine-for-ssh]] for information about requirements of the SSH server.")])])])]),e._v(" "),t("h3",{attrs:{id:"command-line-tools-and-api-access"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command-line-tools-and-api-access","aria-hidden":"true"}},[e._v("#")]),e._v(" Command Line Tools and API access")]),e._v(" "),t("p",[e._v("Jobs can be exported or imported in XML or Yaml format using the API or the "),t("code",[e._v("rd")]),e._v(" CLI tool.")]),e._v(" "),t("ul",[t("li",[e._v("(/api/rundeck-api.md#exporting-jobs])")]),e._v(" "),t("li",[e._v("(/api/rundeck-api.md#importing-jobs])")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://rundeck.github.io/rundeck-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("RD CLI Tool"),t("OutboundLink")],1)])])])},[],!1,null,null,null);o.default=n.exports}}]);