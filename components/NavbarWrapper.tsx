import { auth0 } from "@/lib/auth0";
import Navbar from "./Navbar";

export default async function NavbarWrapper() {
  let isAuthenticated = false;
  try {
    const session = await auth0.getSession();
    isAuthenticated = !!session;
  } catch {
    // No request context during static build — default to unauthenticated
  }
  return <Navbar isAuthenticated={isAuthenticated} />;
}
