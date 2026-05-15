import { generateRegistrationOptions } from "@simplewebauthn/server";
import { data } from "react-router";
import { p as prisma } from "./prisma.server-4ECDg2ZW.js";
import { requireUser } from "./session.server-CVT4fZlB.js";
import { g as getWebAuthnConfig, p as passkeyCookie, P as PasskeyCookieSchema } from "./webauthn.server-D5_e0Uo_.js";
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
import "./misc-C8XeqZPp.js";
import "date-fns";
async function loader({
  request
}) {
  const user = await requireUser(request);
  const passkeys = await prisma.passkey.findMany({
    where: {
      userId: user.id
    },
    select: {
      id: true
    }
  });
  const config = getWebAuthnConfig(request);
  const options = await generateRegistrationOptions({
    rpName: config.rpName,
    rpID: config.rpID,
    userName: user.email,
    userID: new TextEncoder().encode(user.id),
    userDisplayName: user.firstName,
    attestationType: "none",
    excludeCredentials: passkeys,
    authenticatorSelection: config.authenticatorSelection
  });
  return data({
    options
  }, {
    headers: {
      "Set-Cookie": await passkeyCookie.serialize(PasskeyCookieSchema.parse({
        challenge: options.challenge,
        userId: options.user.id
      }))
    }
  });
}
export {
  loader
};
//# sourceMappingURL=generate-registration-options-BqUQ7kJh.js.map
