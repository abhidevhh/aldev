import { data } from "react-router";
import { a as getAllUserData } from "./prisma.server-4ECDg2ZW.js";
import { requireUser } from "./session.server-CVT4fZlB.js";
import { b as getUserInfo } from "./user-info.server-8Jkdx2bO.js";
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
import "./images-Ba5BiY9g.js";
import "cloudinary-build-url";
import "clsx";
import "emoji-regex";
import "./misc-C8XeqZPp.js";
import "date-fns";
import "./cache.server-BLMuSPcw.js";
import "node:fs";
import "node:sqlite";
import "@epic-web/cachified";
import "lru-cache";
import "./fetch-with-timeout.server-BL1zZ7UJ.js";
import "./misc-react-C1aVPwIk.js";
import "react/jsx-runtime";
import "@sentry/react-router";
import "md5-hash";
import "react";
async function loader({
  request
}) {
  const user = await requireUser(request);
  const sqlite = await getAllUserData(user.id);
  const cache = await getUserInfo(user, {
    request
  });
  return data({
    sqlite,
    cache
  });
}
export {
  loader
};
//# sourceMappingURL=download_._json-D1Big7OB.js.map
