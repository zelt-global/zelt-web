import { auth0 } from "@/lib/auth0";
import Navbar from "./Navbar";

export default async function NavbarWrapper() {
  const session = await auth0.getSession();
  return <Navbar isAuthenticated={!!session} />;
}
