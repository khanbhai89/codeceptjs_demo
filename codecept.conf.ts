require("ts-node/register");
const { setHeadlessWhen } = require("@codeceptjs/configure");
const { bootstrap } = require("./presettings.ts");

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: "./tests/**.spec.ts",
  output: "./output",
  helpers: {
    Playwright: {
      url: "https://www.mediawiki.org/wiki/MediaWiki/",
      show: true,
      windowSize: "1200x900",
      browser: "chromium",
    },
    CustomHelper: {
      require: "./helpers/CustomHelper.ts",
    },
    REST: {
      endpoint: "https://api.tfl.gov.uk/",
      onRequest: () => {
        //request.headers.auth = "123";
      },
    },
    JSONResponse: {},
    AssertWrapper: {
      require: "codeceptjs-assert",
    },
  },
  bootstrap,
  include: {
    I: "./steps_file.ts",
  },
  name: "typescript-boilerplate",
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
    customLocator: {
      enabled: true,
      attribute: "data-test-id",
    },
  },
  require: ["ts-node/register"],
};
