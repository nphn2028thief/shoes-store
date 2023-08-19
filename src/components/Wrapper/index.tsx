interface IProps {
  className?: string;
  children: JSX.Element;
}

function Wrapper(props: IProps) {
  const { className, children } = props;

  return (
    <div
      className={`max-w-[1280px] w-full h-full px-5 md:px-10 mx-auto ${className}`}
    >
      {children}
    </div>
  );
}

export default Wrapper;
