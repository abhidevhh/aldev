import { UNSAFE_withComponentProps } from "react-router";
import { jsx } from "react/jsx-runtime";
import { B as ButtonLink } from "./button-DM7tjcWR.js";
import { e as externalLinks } from "./external-links-BEDnFUME.js";
import { d as getDiscordAuthorizeURL } from "./misc-C8XeqZPp.js";
import { c as useRootData } from "./root-BxL3HGNa.js";
import "clsx";
import "./misc-react-C1aVPwIk.js";
import "@sentry/react-router";
import "md5-hash";
import "react";
import "./images-Ba5BiY9g.js";
import "cloudinary-build-url";
import "emoji-regex";
import "date-fns";
import "@tanstack/react-hotkeys";
import "framer-motion";
import "spin-delay";
import "litefs-js";
import "litefs-js/remix";
import "@reach/dialog";
import "./icons-CVhRJVV_.js";
import "./typography-DDpAXXrz.js";
import "./arrow-button-CkCxU4sX.js";
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
import "node:path";
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
const index = UNSAFE_withComponentProps(function DiscordIndex() {
  const {
    requestInfo,
    user
  } = useRootData();
  const authorizeURL = user ? getDiscordAuthorizeURL(requestInfo.origin) : externalLinks.discord;
  return /* @__PURE__ */ jsx(ButtonLink, {
    variant: "primary",
    href: authorizeURL,
    className: "mr-auto",
    children: "Join Discord"
  });
});
export {
  index as default
};
//# sourceMappingURL=index-DATVc1GI.js.map
