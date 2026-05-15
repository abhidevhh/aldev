import { UNSAFE_withComponentProps, redirect } from "react-router";
import { jsx } from "react/jsx-runtime";
import { g as getEpisodeFromParams, a as getEpisodePath } from "./abhi-call-BuPgipcO.js";
import { r as reuseUsefulLoaderHeaders } from "./misc-C8XeqZPp.js";
import { g as getServerTimeHeader } from "./prisma.server-4ECDg2ZW.js";
import { getEpisodes as getCachedEpisodes } from "./transistor.server-D--gFFsO.js";
import "./images-Ba5BiY9g.js";
import "cloudinary-build-url";
import "clsx";
import "emoji-regex";
import "date-fns";
import "@epic-web/remember";
import "@prisma/adapter-better-sqlite3";
import "chalk";
import "p-props";
import "./env.server-DPCBxZtL.js";
import "zod";
import "./favorites-BOCNblj8.js";
import "litefs-js";
import "litefs-js/remix";
import "node:path";
import "node:url";
import "@prisma/client/runtime/client";
import "@sindresorhus/slugify";
import "uuid";
import "./abort-utils.server-Bx3f6jnJ.js";
import "./cache.server-BLMuSPcw.js";
import "node:fs";
import "node:sqlite";
import "@epic-web/cachified";
import "lru-cache";
import "./session.server-CVT4fZlB.js";
import "./markdown.server-C6vYtRmU.js";
import "hast-util-to-string";
import "rehype-document";
import "rehype-format";
import "rehype-parse";
import "rehype-stringify";
import "remark-parse";
import "remark-rehype";
import "unified";
import "./user-info.server-8Jkdx2bO.js";
import "./fetch-with-timeout.server-BL1zZ7UJ.js";
import "./misc-react-C1aVPwIk.js";
import "@sentry/react-router";
import "md5-hash";
import "react";
const handle = {
  getSitemapEntries: () => null
};
async function loader({
  params,
  request
}) {
  const timings = {};
  const {
    season,
    episode: episodeParam
  } = params;
  if (!season || !episodeParam) {
    throw new Error("params.season or params.episode is not defined");
  }
  const episodes = await getCachedEpisodes({
    request,
    timings
  });
  const episode = getEpisodeFromParams(episodes, {
    season,
    episode: episodeParam
  });
  if (!episode) {
    return redirect("/calls");
  }
  return redirect(getEpisodePath(episode), {
    headers: {
      "Server-Timing": getServerTimeHeader(timings)
    }
  });
}
const headers = reuseUsefulLoaderHeaders;
const $episode = UNSAFE_withComponentProps(function Screen() {
  return /* @__PURE__ */ jsx("div", {
    children: "You should have been redirected... Weird"
  });
});
export {
  $episode as default,
  handle,
  headers,
  loader
};
//# sourceMappingURL=_episode-D1zOwBbc.js.map
