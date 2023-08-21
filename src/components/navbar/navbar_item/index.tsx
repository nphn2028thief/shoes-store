import Tippy from "@tippyjs/react/headless";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import slugify from "slugify";
import NavLinkCustom from "~/components/navlink_custom";
import PopperWrapper from "~/components/popper_wrapper";
import CMenu from "~/constants/menu";
import { useAppSelector } from "~/store";
import { handleIconSibling } from "~/utils/function";

function NavbarItem() {
  const [showSiblingMenu, setShowSiblingMenu] = useState<boolean>(false);

  const { categories } = useAppSelector((state) => state.categorySlice);

  return (
    <div className="hidden md:flex items-center gap-1 text-black font-semibold">
      {CMenu.map((menu) => {
        const Icon = handleIconSibling(showSiblingMenu);

        if (menu.path === "") {
          return (
            <div key={menu.id}>
              <Tippy
                interactive
                visible={menu.hasSibling && showSiblingMenu}
                offset={[0, -4]}
                render={(attrs) => (
                  <PopperWrapper {...attrs}>
                    {categories.map((category) => (
                      <li key={category._id}>
                        <NavLink
                          to={`/category/${slugify(
                            category.name.toLowerCase()
                          )}`}
                          style={{ transition: "background-color 0.3s ease" }}
                          className={({ isActive }) =>
                            `flex justify-between items-center px-4 py-2 ${
                              isActive && `bg-gray-200/80`
                            } hover:bg-gray-200/80`
                          }
                        >
                          <span>{category.name}</span>
                          <span>({category.products.length})</span>
                        </NavLink>
                      </li>
                    ))}
                  </PopperWrapper>
                )}
                onClickOutside={() => setShowSiblingMenu(false)}
              >
                <NavLinkCustom
                  to=""
                  activeClassName="after:w-full"
                  className="w-full flex items-center gap-2 p-3 relative after:w-0 after:h-0.5 hover:after:w-full after:absolute after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:transition-width after:duration-500 after:ease-ease after:bg-black"
                  onClick={() => setShowSiblingMenu(!showSiblingMenu)}
                >
                  <span>{menu.name}</span>
                  {menu.hasSibling && <Icon fontWeight={600} />}
                </NavLinkCustom>
              </Tippy>
            </div>
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
