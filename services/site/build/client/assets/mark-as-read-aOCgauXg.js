import { invariantResponse } from "@epic-web/invariant";
import { data } from "react-router";
import { b as getBlogReadRankings, a as getRankingLeader, n as notifyOfTeamLeaderChangeOnPost, k as notifyOfOverallTeamLeaderChange } from "./blog.server-D7YFc1pI.js";
import { getClientSession } from "./client.server-CTs0DPxN.js";
import { d as addPostRead } from "./prisma.server-4ECDg2ZW.js";
import { getSession } from "./session.server-CVT4fZlB.js";
async function action({
  request
}) {
  const formData = await request.formData();
  const slug = formData.get("slug");
  invariantResponse(typeof slug === "string", "Missing slug");
  const session = await getSession(request);
  const user = await session.getUser();
  const [beforePostLeader, beforeOverallLeader] = await Promise.all([getBlogReadRankings({
    request,
    slug
  }).then(getRankingLeader), getBlogReadRankings({
    request
  }).then(getRankingLeader)]);
  if (user) {
    await addPostRead({
      slug,
      userId: user.id
    });
  } else {
    const client = await getClientSession(request, user);
    const clientId = client.getClientId();
    if (clientId) {
      await addPostRead({
        slug,
        clientId
      });
    }
  }
  const [afterPostLeader, afterOverallLeader] = await Promise.all([getBlogReadRankings({
    request,
    slug,
    forceFresh: true
  }).then(getRankingLeader), getBlogReadRankings({
    request,
    forceFresh: true
  }).then(getRankingLeader)]);
  if (afterPostLeader?.team && afterPostLeader.team !== beforePostLeader?.team) {
    void notifyOfTeamLeaderChangeOnPost({
      request,
      postSlug: slug,
      reader: user,
      newLeader: afterPostLeader.team,
      prevLeader: beforePostLeader?.team
    });
  }
  if (afterOverallLeader?.team && afterOverallLeader.team !== beforeOverallLeader?.team) {
    void notifyOfOverallTeamLeaderChange({
      request,
      postSlug: slug,
      reader: user,
      newLeader: afterOverallLeader.team,
      prevLeader: beforeOverallLeader?.team
    });
  }
  return data({
    success: true
  });
}
async function markAsRead({
  slug
}) {
  return fetch("/action/mark-as-read", {
    method: "POST",
    body: new URLSearchParams({
      slug
    })
  });
}
export {
  action as a,
  markAsRead as m
};
//# sourceMappingURL=mark-as-read-aOCgauXg.js.map
