import { ReactNode } from "react";

interface IProps {
  className?: string;
  children: ReactNode;
}

function PopperWrapper(props: IProps) {
  const { className, children } = props;

  return (
    <ul
      className={`min-w-[210px] py-2 bg-white rounded-[10px] shadow-headless animate-tippy-fadeIn ${className}`}
    >
      {children}
    </ul>
  );
}

export default PopperWrapper;
