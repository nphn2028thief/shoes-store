import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "~/assets/icons/logo.svg";
import CPath from "~/constants/path";
import Wrapper from "../Wrapper";
import NavbarItem from "./navbar_item";
import Avatar from "../Avatar";

function Navbar() {
  return (
    <div className="h-navbar fixed left-0 top-0 right-0 border-b-1 border-solid border-ccc bg-white z-[999]">
      <Wrapper>
        <div className="flex justify-between items-center">
          <div className="flex md:hidden p-3 -mr-3 cursor-pointer">
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

          <NavbarItem />

          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Navbar;
