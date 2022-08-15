# QA Lead - Take home test

## Test 1

* Create a BDD scenario and executable step definitions to test Tfl Unified API <https://api.tfl.gov.uk/>
  * Scenarios - Plan a journey from Point A to Point B (both within london, A inside London & B outside London)

Assumptions:

* Choose any mode of journey (tube/bus/overground) or a combination.
* The test preparation & execution should be on the API level
* Write in a language you are comfortable with. Demonstrate the test execution.

## Test 2

* Write and execute an automated test to test <https://www.mediawiki.org/wiki/API:Main_page>
  * Account set up
  * Token generation for data modifying application
  * Create/Edit a page

Assumptions:

* Choose a framework/approach best suited for the test, be able to justify/explain the rationale
* Choose any programming language of your choice

This is a project which includes CodeceptJS + Playwright setup using TypeScript.

I couldn't find token page so can't add those test. We can also add test to verify, JSON schema from API test.

There can be negative test-cases added, which I didn't on purpose as you can see they can be created as I'm using page-object pattern.

This can be extended further but I have created to give you sense of different tests. For example we get feedback through API to verify.

One thing which is important is that I should have been provided with Deleting the data as well, otherwise it will create garbage data all the time, which will make verification difficult as well.

Clone this repository to start:

```
git clone https://github.com/khanbhai89/codeceptjs_demo .
```

Install dependencies:

```
npm i
```

## Contents

* `codecept.conf.ts` - main configuration file
* `tests/regression.spec.ts` - E2E tests files
* `tests/apiTests.spec.ts` - API tests files
* `resources/pages/**.page.ts` - page objects
* `helpers/CustomHelper` - a custom helper
* `config/**` - config manager for ENV and credentials
* `.github/workflows/**` - runners for running Github Action or CI/CD
* `presettings.ts` - placeholder for bootstrap / teardown scripts
