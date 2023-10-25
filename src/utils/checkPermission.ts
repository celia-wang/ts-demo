import Cookies from "js-cookie";

export default function CookiePermission() {
  return !!Cookies.get("token");
}
