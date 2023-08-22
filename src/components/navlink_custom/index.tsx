/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, forwardRef } from "react";

interface IProps {
  isActiveSibling?: boolean;
  activeClassName: string;
  className?: string;
  onClick: () => void;
  children: ReactNode;
}

const NavLinkCustom = forwardRef<HTMLButtonElement, IProps>(function (
  props,
  ref
) {
  const {
    isActiveSibling = false,
    activeClassName,
    className,
    onClick,
    children,
  } = props;

  return (
    <button
      ref={ref}
      className={
        isActiveSibling ? `${activeClassName} ${className}` : `${className}`
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
});

export default NavLinkCustom;
