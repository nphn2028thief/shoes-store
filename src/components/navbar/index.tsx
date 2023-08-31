import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";

import logo from "~/assets/icons/logo.svg";
import Avatar from "../avatar";
import Wrapper from "../wrapper";
import NavbarItem from "./navbar_item";
import NavbarMobile from "./navbar_mobile";
import CPath from "~/constants/path";
import { useAppDispatch, useAppSelector } from "~/store";
import { setShowNavbarMobile } from "~/store/app/app_slice";
import { ICategory } from "~/types/category";
import { handleShowNavbarMobile } from "~/utils/function";

interface IProps {
  categories: ICategory[];
}

function Navbar(props: IProps) {
  const { categories } = props;

  const { user } = useAppSelector((state) => state.authSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(setShowNavbarMobile(false));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-navbar fixed left-0 top-0 right-0 border-b-1 border-solid border-ccc bg-white z-[990]">
      <Wrapper>
        <div className="flex justify-between items-center">
          <div
            className="flex md:hidden p-3 -mr-3 cursor-pointer"
            onClick={() => handleShowNavbarMobile(true, dispatch)}
          >
            <BiMenuAltLeft size={24} />
          </div>

          <Link to={CPath.HOME}>
            <div className="hidden md:inline-flex p-4 -ml-4">
              <img
                src={logo}
                alt="logo"
                className="w-12 md:w-15"
                loading="lazy"
              />
            </div>
          </Link>

          <NavbarItem categories={categories} />

          <div className="flex items-center gap-2">
            {user ? (
              <Avatar className="w-8 h-8" />
            ) : (
              <button className="px-5 py-1.5 text-white text-sm bg-black rounded-[9999px]" onClick={() => {}}>
                Sign In
              </button>
            )}
          </div>
        </div>
      </Wrapper>

      <NavbarMobile />
    </div>
  );
}

export default Navbar;
