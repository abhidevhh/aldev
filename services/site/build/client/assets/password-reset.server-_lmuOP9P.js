import "litefs-js";
import { ensurePrimary } from "litefs-js/remix";
import { h as getDomainUrl, i as isResponse } from "./misc-C8XeqZPp.js";
import { p as prisma } from "./prisma.server-4ECDg2ZW.js";
import { a as sendPasswordResetEmail } from "./send-email.server-BAc9yAFl.js";
import { c as createVerification } from "./verification.server-Y2dETnWr.js";
async function createAndSendPasswordResetVerificationEmail({
  emailAddress,
  team,
  request
}) {
  const domainUrl = getDomainUrl(request);
  let verificationId = null;
  try {
    const { verification, code } = await createVerification({
      type: "PASSWORD_RESET",
      target: emailAddress
    });
    verificationId = verification.id;
    const verificationUrl = new URL("/reset-password", domainUrl);
    verificationUrl.searchParams.set("verification", verification.id);
    verificationUrl.searchParams.set("code", code);
    await sendPasswordResetEmail({
      emailAddress,
      verificationCode: code,
      verificationUrl: verificationUrl.toString(),
      domainUrl,
      team
    });
  } catch (error) {
    if (isResponse(error)) throw error;
    if (verificationId) {
      try {
        await ensurePrimary();
        await prisma.verification.delete({ where: { id: verificationId } });
      } catch (cleanupError) {
        console.error(
          "Failed to cleanup verification after password reset email failure",
          cleanupError
        );
      }
    }
    console.error("Failed to send password reset email", error);
  }
}
export {
  createAndSendPasswordResetVerificationEmail as c
};
//# sourceMappingURL=password-reset.server-_lmuOP9P.js.map
