import { UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, data } from "react-router";
import { jsx } from "react/jsx-runtime";
import { A as ArrowLink } from "./arrow-button-CkCxU4sX.js";
import { G as GeneralErrorBoundary, g as getNotFoundSuggestions } from "./not-found-suggestions.server-BVZachkn.js";
import { F as FourOhFour, o as ErrorPage, p as Facepalm } from "./root-BxL3HGNa.js";
import "clsx";
import "framer-motion";
import "react";
import "./icons-CVhRJVV_.js";
import "./typography-DDpAXXrz.js";
import "./misc-react-C1aVPwIk.js";
import "@sentry/react-router";
import "md5-hash";
import "./images-Ba5BiY9g.js";
import "cloudinary-build-url";
import "emoji-regex";
import "./misc-C8XeqZPp.js";
import "date-fns";
import "node:fs/promises";
import "node:path";
import "match-sorter";
import "yaml";
import "@tanstack/react-hotkeys";
import "spin-delay";
import "litefs-js";
import "litefs-js/remix";
import "@reach/dialog";
import "./button-DM7tjcWR.js";
import "error-stack-parser";
import "./grid-Bsvu4qfo.js";
import "./cloudinary-video-DeT-8neH.js";
import "lru-cache";
import "mdx-bundler/client/index.js";
import "./theme-DZDN90gJ.js";
import "@conform-to/zod/v4";
import "zod";
import "@epic-web/client-hints";
import "@epic-web/client-hints/color-scheme";
import "@epic-web/client-hints/time-zone";
import "@epic-web/invariant";
import "./form-elements-D3OfaKUp.js";
import "./external-links-BEDnFUME.js";
import "downshift";
import "./promotification-Diq2ZmfA.js";
import "cookie";
import "./spacer-CSktuGpg.js";
import "./client.server-CTs0DPxN.js";
import "uuid";
import "./env.server-DPCBxZtL.js";
import "./login.server-Bn92r_Ja.js";
import "./abort-utils.server-Bx3f6jnJ.js";
import "./cache.server-BLMuSPcw.js";
import "node:fs";
import "node:sqlite";
import "@epic-web/cachified";
import "@epic-web/remember";
import "./session.server-CVT4fZlB.js";
import "./prisma.server-4ECDg2ZW.js";
import "@prisma/adapter-better-sqlite3";
import "chalk";
import "p-props";
import "./favorites-BOCNblj8.js";
import "node:url";
import "@prisma/client/runtime/client";
import "./seo-Cmh0SehJ.js";
import "./theme.server-DYWqeJkP.js";
import "./user-info.server-8Jkdx2bO.js";
import "./fetch-with-timeout.server-BL1zZ7UJ.js";
import "./header-section-dW7xkFeO.js";
import "./hero-section-l0-8eHNr.js";
async function loader({
  request
}) {
  const accept = request.headers.get("accept") ?? "";
  const wantsHtml = accept.includes("text/html") || accept.includes("application/xhtml+xml");
  if (!wantsHtml || request.method.toUpperCase() !== "GET") {
    throw new Response("Not found", {
      status: 404
    });
  }
  const pathname = new URL(request.url).pathname;
  const suggestions = await getNotFoundSuggestions({
    request,
    pathname,
    limit: 8
  });
  const data$1 = {};
  if (suggestions) {
    data$1.possibleMatches = suggestions.matches;
    data$1.possibleMatchesQuery = suggestions.query;
  }
  throw data(data$1, {
    status: 404,
    headers: {
      "Cache-Control": "private, max-age=60"
    }
  });
}
const $ = UNSAFE_withComponentProps(function NotFound() {
  return /* @__PURE__ */ jsx(ErrorBoundary, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2() {
  return /* @__PURE__ */ jsx(GeneralErrorBoundary, {
    statusHandlers: {
      400: () => /* @__PURE__ */ jsx(ErrorPage, {
        heroProps: {
          title: "400 - Oh no, you did something wrong.",
          subtitle: `If you think I did something wrong, let me know...`,
          image: /* @__PURE__ */ jsx(Facepalm, {
            className: "rounded-lg",
            aspectRatio: "3:4"
          }),
          action: /* @__PURE__ */ jsx(ArrowLink, {
            href: "/",
            children: "Go home"
          })
        }
      }),
      404: ({
        error
      }) => /* @__PURE__ */ jsx(FourOhFour, {
        possibleMatches: error.data.possibleMatches,
        possibleMatchesQuery: error.data.possibleMatchesQuery
      })
    }
  });
});
export {
  ErrorBoundary,
  $ as default,
  loader
};
//# sourceMappingURL=_-B6B5De97.js.map
