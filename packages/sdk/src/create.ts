import { DEVELOPMENT_MODE, WINDOW_EXISTS } from "./config/constants";
import { createUrql } from "./extensions/urql";
import { AuthService } from "./services/auth";

export type OriunSdkConfig = {
  apiUri: string;
}

export function createOriunSdk(config: OriunSdkConfig) {
  const oriunClient = createUrql(config.apiUri);

  const authService = new AuthService(oriunClient);

  const client = {
    auth: authService,
    _internal: { oriunClient }
  }

  if (DEVELOPMENT_MODE && WINDOW_EXISTS) {
    (window as any).__ORIUN_CLIENT__ = client;
  }

  return client;
}
