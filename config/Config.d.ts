declare module "node-config-ts" {
  interface IConfig {
    baseUrl: string;
    apiURL: string;
    admin: User;
  }
  interface User {
    username: string;
    password: string;
  }

  export const config: Config;
  export type Config = IConfig;
}
