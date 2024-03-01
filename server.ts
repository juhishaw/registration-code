import { createCookieSessionStorage, logDevReady } from "@remix-run/cloudflare";
import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "@remix-run/dev/server-build";

if (process.env.NODE_ENV === "development") {
  logDevReady(build);
}

export const onRequest = createPagesFunctionHandler({
  build,
  getLoadContext: (context) => {
    const sessionStorage = createCookieSessionStorage({
      cookie: {
        name: '__session',
        httpOnly: true,
        path: '/',
        sameSite: 'lax',
        secrets: [context.env.SESSION_SECRET || 'dev-secret'],
        secure: context.env.NODE_ENV === 'production',
      },
    })
    return {
      env: context.env,
      sessionStorage,
    }
  },
  mode: build.mode,
});
