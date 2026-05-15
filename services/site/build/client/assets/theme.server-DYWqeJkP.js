import * as cookie from "cookie";
const cookieName = "en_theme";
function getTheme(request) {
  const cookieHeader = request.headers.get("cookie");
  const parsed = cookieHeader ? cookie.parse(cookieHeader)[cookieName] : "light";
  if (parsed === "light" || parsed === "dark") return parsed;
  return null;
}
function setTheme(theme) {
  if (theme === "system") {
    return cookie.serialize(cookieName, "", { path: "/", maxAge: -1 });
  } else {
    return cookie.serialize(cookieName, theme, { path: "/" });
  }
}
export {
  getTheme as g,
  setTheme as s
};
//# sourceMappingURL=theme.server-DYWqeJkP.js.map
