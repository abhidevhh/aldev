import fs from "fs";
import os from "os";
import nodePath from "path";
import { PassThrough } from "stream";
import v8 from "v8";
import { createReadableStreamFromReadable } from "@react-router/node";
import { f as formatDate } from "./misc-C8XeqZPp.js";
import { requireAdminUser } from "./session.server-CVT4fZlB.js";
import "date-fns";
import "react-router";
import "zod";
import "litefs-js";
import "litefs-js/remix";
import "./env.server-DPCBxZtL.js";
import "./prisma.server-4ECDg2ZW.js";
import "@epic-web/remember";
import "@prisma/adapter-better-sqlite3";
import "chalk";
import "p-props";
import "./favorites-BOCNblj8.js";
import "node:path";
import "node:url";
import "@prisma/client/runtime/client";
async function loader({
  request
}) {
  await requireAdminUser(request);
  const host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  const tempDir = os.tmpdir();
  const filepath = nodePath.join(tempDir, `${host}-${formatDate(/* @__PURE__ */ new Date(), "yyyy-MM-dd HH_mm_ss_SSS")}.heapsnapshot`);
  const snapshotPath = v8.writeHeapSnapshot(filepath);
  if (!snapshotPath) {
    throw new Response("No snapshot saved", {
      status: 500
    });
  }
  const body = new PassThrough();
  const stream = fs.createReadStream(snapshotPath);
  stream.on("open", () => stream.pipe(body));
  stream.on("error", (err) => body.end(err));
  stream.on("end", () => body.end());
  return new Response(createReadableStreamFromReadable(body), {
    status: 200,
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Disposition": `attachment; filename="${nodePath.basename(snapshotPath)}"`,
      "Content-Length": (await fs.promises.stat(snapshotPath)).size.toString()
    }
  });
}
export {
  loader
};
//# sourceMappingURL=heapsnapshot-DSLHny6W.js.map
