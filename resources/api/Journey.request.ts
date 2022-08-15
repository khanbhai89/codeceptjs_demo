import { config } from "node-config-ts";
import { JourneyArguments } from "../../types/JourneyArguments";

const { I } = inject();

class JourneyRequest {
  headers = {
    acceptJson: { Accept: "application/json" },
    acceptApiJson: { Accept: "application/vnd.api+json" },
    contentTypeJson: { "Content-Type": "application/json" },
    userAgent: { "User-Agent": "bdd-test" },
  };

  async planJourney(from: string, to: string, details?: JourneyArguments) {
    const args = new URLSearchParams(details).toString();
    const data = {
      url: `${config.apiURL}Journey/JourneyResults/${from}/to/${to}?${args}`,
      headers: {
        ...this.headers.acceptJson,
        ...this.headers.userAgent,
        ...this.headers.contentTypeJson,
      },
    };
    const res = await I.sendGetRequest(data.url, data?.headers ?? []);
    I.assertStatusCode(res.status, 300);
  }
}

export default new JourneyRequest();
