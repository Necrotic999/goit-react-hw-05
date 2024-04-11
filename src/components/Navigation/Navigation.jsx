import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import css from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.nav_link, isActive && css.active);
};

const Navigation = () => {
  return (
    <>
      <header className={css.header}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/movies">
          Movies
        </NavLink>
      </header>
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </>
  );
};

export default Navigation;
