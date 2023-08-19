import { IconType } from "react-icons";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export const handleIconSibling = (hasSibling: boolean): IconType => {
  if (hasSibling) {
    return BsChevronUp;
  }

  return BsChevronDown;
};
