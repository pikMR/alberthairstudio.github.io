import { defineConfig, envField } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

const SERVER_PORT = 3000;
// the url to access your blog during local development
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
// the url to access your blog after deploying it somewhere (Eg. Netlify)
// const LIVE_URL = "https://pikmr.github.io/alberthairstudio.github.io/";
// this is the astro command your npm script runs
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
// let BASE_URL = LOCALHOST_URL;
// When you're building your site in local or in CI, you could just set your URL manually
if (isBuild) {
  // BASE_URL = LIVE_URL;
}

// https://astro.build/config
export default defineConfig({
  server: { port: SERVER_PORT },
  site: isBuild
    ? "https://pikmr.github.io"
    : LOCALHOST_URL,
  base: isBuild ? "alberthairstudio.github.io" : "",
  integrations: [sitemap()],
  adapter: netlify(),
  env: {
    // this is the environment variable that will be used in your astro files
    schema: {
      URL_DOWNLOAD_APP: envField.string({
        context: "client",
        access: "public",
        default: "https://www.downloadpro.com/app",
      }),
      URL_REQUEST_BOOKING: envField.string({
        context: "client",
        access: "public",
        default: "https://www.requestpro.com/booking",
      }),
    },
  },
});

// export default defineConfig({
//   output: "server",
//   adapter: netlify()
// });