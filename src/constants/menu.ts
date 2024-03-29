import { TbHome } from "react-icons/tb";
import { TbCategory2 } from "react-icons/tb";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineContactless } from "react-icons/md";

import EPath from "./path";
import IMenu from "~/types/menu";

const CMenu: IMenu[] = [
  {
    id: 1,
    name: "Home",
    path: EPath.HOME,
    icon: TbHome,
    hasSibling: false,
  },
  {
    id: 2,
    name: "About",
    path: EPath.ABOUT,
    icon: BsInfoCircle,
    hasSibling: false,
  },
  {
    id: 3,
    name: "Categories",
    path: "",
    icon: TbCategory2,
    hasSibling: true,
  },
  {
    id: 4,
    name: "Contact",
    path: EPath.CONTACT,
    icon: MdOutlineContactless,
    hasSibling: false,
  },
];

export default CMenu;
