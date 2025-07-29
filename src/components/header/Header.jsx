import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Links } from "../../Static/Static";

function Header() {
  const { pathname } = useLocation();

  const isBlack = pathname.startsWith("/users");

  return (
    <header className={`${isBlack ? "bg-black" : "bg-black"}   text-white`}>
      <nav className="container mx-auto h-20 flex gap-6 items-center justify-between">
        <Link to={"/"}>
          <div className="text-xl font-bold">Logoo</div>
        </Link>

        <ul className="flex gap-6">
          {Links?.map((link) => (
            <li key={link.id}>
              <NavLink
                className={({ isActive }) =>
                  `text-base uppercase ${isActive ? "text-blue-800 font-bold underline" : ""}`
                }
                to={link.path}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
