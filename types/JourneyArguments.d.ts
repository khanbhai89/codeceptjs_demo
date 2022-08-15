export type JourneyArguments = {
  timeIs?: "Arriving" | "Departing";
  journeyPreference?: "LeastInterchange" | "LeastTime" | "LeastWalking";
  mode?: "bus" | "tube" | "overground";
  accessibilityPreference?:
    | "noSolidStairs"
    | "NoRequirements"
    | "NoEscalators"
    | "noElevators"
    | "stepFreeToVehicle"
    | "stepFreeToPlatform";
  walkingSpeed?: "slow" | "average" | "fast";
  cyclePreference?:
    | "None"
    | "allTheWay"
    | "leaveAtStation"
    | "takeOnTransport"
    | "cycleHire";
  bikeProficiency?: "Easy" | "Moderate" | "Fast";
};
