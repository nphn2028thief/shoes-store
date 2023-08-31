import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { IconType } from "react-icons";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import { RootState } from "~/store";
import { setShowNavbarMobile } from "~/store/app/app_slice";

export const handleIconSibling = (hasSibling: boolean): IconType => {
  if (hasSibling) {
    return BsChevronUp;
  }

  return BsChevronDown;
};

export const handleShowNavbarMobile = (
  value: boolean,
  dispatch: ThunkDispatch<RootState, void, Action>
) => {
  dispatch(setShowNavbarMobile(value));
};
