import { useState } from "react";
import { NavLink } from "react-router-dom";
import CMenu from "~/constants/menu";
import { handleIconSibling } from "~/utils/function";

function NavbarItem() {
  const [showSiblingMenu, setShowSiblingMenu] = useState<boolean>(false);

  return (
    <div className="hidden md:flex items-center gap-1 text-black font-semibold">
      {CMenu.map((menu) => {
        const Icon = handleIconSibling(showSiblingMenu);

        if (menu.path === "") {
          return (
            <button
              key={menu.id}
              className="flex items-center gap-2 p-3"
              onClick={() => setShowSiblingMenu(!showSiblingMenu)}
            >
              <span>{menu.name}</span>
              {menu.hasSibling && <Icon fontWeight={600} />}
            </button>
          );
        }

        return (
          <NavLink key={menu.id} to={menu.path}>
            {({ isActive }) => (
              <div
                className={`w-full flex items-center gap-2 p-3 relative after:w-0 after:h-0.5 hover:after:w-full ${
                  isActive && "after:w-full"
                } after:absolute after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:transition-width after:duration-500 after:ease-ease after:bg-black`}
              >
                <span>{menu.name}</span>
              </div>
            )}
          </NavLink>
        );
      })}
    </div>
  );
}

export default NavbarItem;
