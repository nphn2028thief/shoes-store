interface IProps {
  children: JSX.Element;
}

function AuthLayout({ children }: IProps) {
  return <div>{children}</div>;
}

export default AuthLayout;
