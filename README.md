# example-pr-trigger-test
An example project showing how to setup a workflow to run Cypress tests when a PR is opened, and ensure that the test runs against the branch code (not main).

### Prerequisites

Create a 'tests' folder at the root level and store your tests within it.  
In this example we have a Cypress test script setup to run a schema validation check against an API endpoint.

### Set the trigger

``` yaml
on:
  workflow_dispatch:
  pull_request:
    branches:
      - '**'  # Run on all branches when a PR is opened or updated
```

The workflow can also be manually triggered via workflow_dispatch.
The pull_request event is set to trigger on all branches using branches: - '**', meaning it will run on any branch that has a pull request opened or updated.

### Checkout the branch code

``` yaml
    steps:
      - name: Checkout the code
        uses: actions/checkout@v3
        with:
          # Checkout the branch associated with the PR
          ref: ${{ github.head_ref }}
```
```ref: ${{ github.head_ref }}``` checks out the branch from which the PR is created, ensuring that the workflow tests the code from the correct branch associated with the pull request.

### Trigger the test via PR.
To trigger the test (in this example), change the content of the example.txt file and create a PR.  
The test will automatically trigger with results being reported back to the PR checks section.
