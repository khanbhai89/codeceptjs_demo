import JourneyRequest from "../resources/api/Journey.request";
import { JourneyArguments } from "../types/JourneyArguments";

// You can convert following JSON to use multiple arguments to create different tests

const testJourney: JourneyArguments = {
  timeIs: "Arriving",
  journeyPreference: "LeastInterchange",
  mode: "bus",
  accessibilityPreference: "NoRequirements",
  walkingSpeed: "slow",
  cyclePreference: "None",
  bikeProficiency: "Easy",
};

Feature("API Tests").retry(2);

Scenario("API Test from London to Manchester", async ({ I }) => {
  await JourneyRequest.planJourney("london", "manchester", testJourney);
  I.seeResponseCodeIs(300);
  I.seeResponseContainsKeys([
    "$type",
    "fromLocationDisambiguation",
    "journeyVector",
    "recommendedMaxAgeMinutes",
    "searchCriteria",
    "toLocationDisambiguation",
    "viaLocationDisambiguation",
  ]);
})
  .tag("apiTest")
  .tag("journey")
  .tag("regression");

Scenario("API Test from Oxford Street to Baker Street", async ({ I }) => {
  await JourneyRequest.planJourney(
    "Oxford Street",
    "Baker Street",
    testJourney
  );
  I.seeResponseCodeIs(300);
  I.seeResponseContainsKeys([
    "$type",
    "fromLocationDisambiguation",
    "journeyVector",
    "recommendedMaxAgeMinutes",
    "searchCriteria",
    "toLocationDisambiguation",
    "viaLocationDisambiguation",
  ]);
})
  .tag("apiTest")
  .tag("journey")
  .tag("regression");
