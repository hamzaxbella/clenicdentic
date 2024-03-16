import { NavLink, ScrollRestoration, Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const RootLayout = () => {
  return (
    <div className="root-layout">
      <ScrollRestoration />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
