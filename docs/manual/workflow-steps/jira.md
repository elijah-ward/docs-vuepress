% Jira Workflow Step Plugins (Enterprise)

## Jira / Issue / Assigned

Search assigned issues by user.

### Configuration

The Jira connection credentials are set in the `project.properties` file
for your project.
Password it's a keystorage path to the password.

```
project.plugin.WorkflowStep.jira-assigned-issue.login=admin@instance.com
project.plugin.WorkflowStep.jira-assigned-issue.password=keys/jira/password
project.plugin.WorkflowStep.jira-assigned-issue.url=https://instance.atlassian.net
```

### Usage

To use the plugin, configure the mandatory inputs.


* assignee: Issue assignee.
* fail: true to fail if there's no assigned issues.


## Jira / Issue / Check Exist

Check if the Jira Issue exist by key.

### Configuration

The Jira connection credentials are set in the `project.properties` file
for your project.
Password it's a keystorage path to the password.

```
project.plugin.WorkflowStep.jira-check-issue.login=admin@instance.com
project.plugin.WorkflowStep.jira-check-issue.password=keys/jira/password
project.plugin.WorkflowStep.jira-check-issue.url=https://instance.atlassian.net
```

### Usage

To use the plugin, configure the mandatory input.


* key: Jira issue ID.


## Jira / Issue / Comment

Append notification messages to a Jira issue.

### Configuration

The Jira connection credentials are set in the `project.properties` file
for your project.
Password it's a keystorage path to the password.

```
project.plugin.WorkflowStep.jira-comment-issue-step.login=admin@instance.com
project.plugin.WorkflowStep.jira-comment-issue-step.password=keys/jira/password
project.plugin.WorkflowStep.jira-comment-issue-step.url=https://instance.atlassian.net
```

### Usage

To use the plugin, configure the mandatory input.


* key: The Jira issue ID.
* message: Message to append, can include variables.


## Jira / Issue / Create

Creates a new Jira issue.

### Configuration

The Jira connection credentials are set in the `project.properties` file
for your project.
Password it's a keystorage path to the password.

```
project.plugin.WorkflowStep.jira-create-issue.login=admin@instance.com
project.plugin.WorkflowStep.jira-create-issue.password=keys/jira/password
project.plugin.WorkflowStep.jira-create-issue.url=https://instance.atlassian.net
```

### Usage

To use the plugin, configure the mandatory inputs.


* project: Jira Project ID.
* type: Type of the issue, default Incident
* summary: Issue summary
* description: Issue description

Optional inputs:

* assignee: Issue assignee
* reporter: Issue reporter


## Jira / Issue / Update

Updates a Jira Issue.

### Configuration

The Jira connection credentials are set in the `project.properties` file
for your project.
Password it's a keystorage path to the password.

```
project.plugin.WorkflowStep.jira-update-issue.login=admin@instance.com
project.plugin.WorkflowStep.jira-update-issue.password=keys/jira/password
project.plugin.WorkflowStep.jira-update-issue.url=https://instance.atlassian.net
```

### Usage

To use the plugin, configure the mandatory inputs.


* issue key: Jira Issue ID.
* transition: Transition name, in the case of Incidents these value can be Investigate, Pending, Resolve, Cancel or Close

Optional input:

* resolution: Resolution, only needed to Close or Resolve an Incident


