# cypress-ui-cucumber-allure-typescript-circleci

## Prerequisite

1. Install Node.js Latest LTS Version from https://nodejs.org/en/download/
2. Install VS Code from https://code.visualstudio.com/download
3. Follow the installation steps in https://github.com/MihanEntalpo/allure-single-html-file#installation to merge allure report to single file

## First Time Setup

Run `npm ci` command to install all dependencies

## Formatting files with Prettier

-   To auto-format the files <br /> `npx prettier --write .`
-   To check the file format <br /> `npx prettier --check .`

## Running the tests

-   Set the environment by setting CYPRESS_BASE_URL environment variable
-   Update user details at <br /> `fixtures/login/users.json` for non admin roles
-   For admin roles, set below environment variables
	| Variable                   | Sample Value                         |
	| -------------------------- | ------------------------------------ |
	| CYPRESS_BASE_URL           | https://cloud-dev.test.com        |
	| CYPRESS_PA_ST_HCAAS_USER   | pa_st_hcaas@test.awsapps.com       |
	| CYPRESS_PA_ST_ONLY_USER    | pa_st_only@test.awsapps.com        |
	| CYPRESS_PA_HCAAS_ONLY_USER | pa_hcaas_only@test.awsapps.com     |
	| CYPRESS_PA_LCA_USER 		 | pa_lca@test.awsapps.com     		|
	| CYPRESS_PORTAL_PASSWORD    | P@ssw0rd                             |
-   Run below command to open Cypress window <br /> `npm run cy:open`
-   Run below command to run the tests in CI mode

    -   Headless Mode <br /> `npm run cy:exec`
    -   In Chrome Browser <br /> `npm run cy:exec -- --headed --browser chrome`
    -   To run a specific feature file <br />
        `npm run cy:exec -- --spec "cypress/e2e/customers/NOTES.feature"`
    -   To run a specific feature file in Edge browser <br />
        `npm run cy:exec -- --spec "cypress/e2e/customers/NOTES.feature" --headed --browser edge`
	-   To run all features for a specific role
		`npm run cy:exec -- --spec "cypress/e2e/admin_st_only/Admin_ST_ONLY.features" --browser chrome`
-   Run below command to filter the tests by tags
    -   To the the scenarios which has @GIMLET tag <br />
        `npm run cy:tags -- TAGS=@GIMLET`
    -   To the the scenarios which has @GIMLET tag in Chrome browser <br />
        `npm run cy:tags -- TAGS=@GIMLET --headed --browser chrome`
    -   To the the scenarios which has both @GIMLET & @sanity tags in Firefox
        browser <br />
        `npm run cy:tags -- TAGS='@GIMLET and @sanity' --headed --browser firefox`
    -   To the the scenarios which has @regression tag but not the @ignore tag
        in Edge browser <br />
        `npm run cy:tags -- TAGS='@regression and not @ignore' --headed --browser edge`

## Allure Reports

-   Clear Report <br /> `npm run report:clear`
-   Generate Report <br /> `npm run report:generate`
-   Open Report <br /> `npm run report:open`

## Further help

See
[Setting Up GitHub for Development](https://confluence-eng-sjc1.cisco.com/conf/display/CXFEE/Setting+up+GitHub+for+development#SettingupGitHubfordevelopment-7.SettingupauthorizationtoaccessnewNPMregistry).

Visit the [TypeScript style guide](https://ts.dev/style) to go in-depth on our
TS best practices.
