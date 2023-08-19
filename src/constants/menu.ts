import IMenu from "~/types/menu";
import CPath from "./path";

const CMenu: IMenu[] = [
  {
    id: 1,
    name: "Home",
    path: CPath.HOME,
    hasSibling: false,
  },
  {
    id: 2,
    name: "About",
    path: CPath.ABOUT,
    hasSibling: false,
  },
  {
    id: 3,
    name: "Categories",
    path: "",
    hasSibling: true,
  },
  {
    id: 4,
    name: "Contact",
    path: CPath.CONTACT,
    hasSibling: false,
  },
];

export default CMenu;
