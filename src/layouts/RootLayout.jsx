import { NavLink, ScrollRestoration, Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const RootLayout = () => {
  return (
    <div className="root-layout">
      <ScrollRestoration />
      <header className="w-full bg-white-smoke absolute left-0 top-0">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
