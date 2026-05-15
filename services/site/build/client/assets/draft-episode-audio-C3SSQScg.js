import { c as createDraftAudioResponse } from "./draft-audio-response.server-PaAFU8qB.js";
import { p as prisma } from "./prisma.server-4ECDg2ZW.js";
import { requireAdminUser } from "./session.server-CVT4fZlB.js";
import "node:stream";
import "@react-router/node";
import "./abhi-call-audio-storage.server-BBLgNzCx.js";
import "@aws-sdk/client-s3";
import "./env.server-DPCBxZtL.js";
import "zod";
import "@epic-web/remember";
import "@prisma/adapter-better-sqlite3";
import "chalk";
import "p-props";
import "./favorites-BOCNblj8.js";
import "litefs-js";
import "litefs-js/remix";
import "node:path";
import "node:url";
import "@prisma/client/runtime/client";
import "react-router";
async function loader({
  request
}) {
  await requireAdminUser(request);
  const url = new URL(request.url);
  const callId = url.searchParams.get("callId");
  if (!callId) throw new Response("callId is required", {
    status: 400
  });
  const draft = await prisma.abhiCallEpisodeDraft.findUnique({
    where: {
      callId
    },
    select: {
      episodeAudioKey: true,
      episodeAudioContentType: true,
      episodeAudioSize: true
    }
  });
  if (!draft) throw new Response("Not found", {
    status: 404
  });
  if (!draft.episodeAudioKey) throw new Response("Not found", {
    status: 404
  });
  return await createDraftAudioResponse({
    request,
    key: draft.episodeAudioKey,
    contentType: draft.episodeAudioContentType,
    size: draft.episodeAudioSize,
    defaultContentType: "audio/mpeg"
  });
}
export {
  loader
};
//# sourceMappingURL=draft-episode-audio-C3SSQScg.js.map
