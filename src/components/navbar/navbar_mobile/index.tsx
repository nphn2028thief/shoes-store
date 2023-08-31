import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import slugify from "slugify";

import NavLinkCustom from "~/components/navlink_custom";
import CMenu from "~/constants/menu";
import EPath from "~/constants/path";
import { useAppDispatch, useAppSelector } from "~/store";
import { handleIconSibling, handleShowNavbarMobile } from "~/utils/function";

function NavbarMobile() {
  const { pathname } = useLocation();

  const [showSiblingMenu, setShowSiblingMenu] = useState<boolean>(false);

  const { showNavbarMobile } = useAppSelector((state) => state.appSlice);
  const { categories } = useAppSelector((state) => state.categorySlice);
  const dispatch = useAppDispatch();

  const isActive = pathname.includes(EPath.CATEGORY.split("/")[1]);

  return (
    <AnimatePresence>
      {showNavbarMobile && (
        <>
          <motion.div
            initial={{ translateX: "-100%" }}
            animate={{ translateX: 0 }}
            exit={{ translateX: "-100%" }}
            transition={{ duration: 0.3 }}
            className={`w-3/4 md:w-3/5 fixed top-0 bottom-0 pl-4 py-4 bg-white z-[992]`}
          >
            <button
              style={{ padding: "12px" }}
              className="w-full flex items-center gap-2 font-semibold hover:bg-black/5"
              onClick={() => {}}
            >
              <span>
                <FiLogIn size={18} />
              </span>
              <span>Sign In</span>
            </button>

            <div className="w-full h-[1px] my-4 bg-ccc" />

            {CMenu.map((menu) => {
              const Icon = menu.icon;
              const ArrowIcon = handleIconSibling(showSiblingMenu);

              if (menu.path === "") {
                return (
                  <div key={menu.id}>
                    <NavLinkCustom
                      isActiveSibling={isActive}
                      activeClassName="bg-black/5"
                      className="w-full flex items-center gap-2 p-3 font-semibold transition-all duration-300 rounded hover:bg-black/5"
                      onClick={() => setShowSiblingMenu(!showSiblingMenu)}
                    >
                      <span>{<Icon />}</span>
                      <span>{menu.name}</span>
                      {menu.hasSibling && <ArrowIcon fontWeight={600} />}
                    </NavLinkCustom>

                    <AnimatePresence>
                      {showSiblingMenu && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4"
                        >
                          {categories.map((category) => (
                            <NavLink
                              key={category._id}
                              to={`/category/${slugify(category.name)}`}
                              onClick={() =>
                                handleShowNavbarMobile(false, dispatch)
                              }
                            >
                              {({ isActive }) => (
                                <div
                                  className={`px-4 py-2 transition-all duration-300 rounded hover:bg-black/5 ${
                                    isActive && "bg-black/5"
                                  }`}
                                >
                                  {category.name}
                                </div>
                              )}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <NavLink
                  key={menu.id}
                  to={menu.path}
                  onClick={() => {
                    handleShowNavbarMobile(false, dispatch);
                    setShowSiblingMenu(false);
                  }}
                >
                  {({ isActive }) => (
                    <div
                      className={`w-full flex items-center gap-2 p-3 font-semibold transition-all duration-300 rounded hover:bg-black/5 ${
                        isActive && "bg-black/5"
                      }`}
                    >
                      <span>{<Icon size={18} />}</span>
                      <span>{menu.name}</span>
                    </div>
                  )}
                </NavLink>
              );
            })}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 bg-black/30 z-[991]`}
            onClick={() => handleShowNavbarMobile(false, dispatch)}
          />
        </>
      )}
    </AnimatePresence>
  );
}

export default NavbarMobile;
