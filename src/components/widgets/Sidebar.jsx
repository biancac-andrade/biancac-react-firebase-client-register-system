import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="text-white">
      <ul>
        

        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "bg-secondary w-full block border-l-2 border-l-tertiary mr-2 py-3  text-sm"
              : "mr-2 text-sm py-3 "
          }
        >
          <li className="p-4 ">Home</li>
        </NavLink>

        <NavLink
          to="/create"
          className={({ isActive }) =>
            isActive
              ? "bg-secondary w-full block border-l-2 border-l-tertiary mr-2 py-3  text-sm"
              : "mr-2 text-sm py-3 pl-4"
          }
        >
          <li className="p-4">Cadastro</li>
        </NavLink>

        <NavLink
          to="/read"
          className={({ isActive }) =>
            isActive
              ? "bg-secondary w-full block border-l-2 border-l-tertiary mr-2 py-3  text-sm"
              : "mr-2 text-sm py-3 pl-4"
          }
        >
          <li className="p-4">Lista</li>
        </NavLink>

      </ul>
    </aside>
  );
};

export default Sidebar;
