/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface IProps {
  to: string;
  isActiveSibling?: boolean;
  activeClassName: string;
  className?: string;
  onClick: () => void;
  children: ReactNode;
}

function NavLinkCustom(props: IProps) {
  const {
    to,
    isActiveSibling = false,
    activeClassName,
    className,
    onClick,
    children,
  } = props;

  //   const isActive =

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${activeClassName} ${className}` : `${className}`
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
}

export default NavLinkCustom;
