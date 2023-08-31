import { IconType } from "react-icons";

interface IMenu {
  id: number;
  name: string;
  path: string;
  icon: IconType
  hasSibling: boolean;
}

export default IMenu;
