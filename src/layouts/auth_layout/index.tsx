import ErrorBoundary from "~/components/error_boundaries";

interface IProps {
  children: JSX.Element;
}

function AuthLayout({ children }: IProps) {
  return <ErrorBoundary>{children}</ErrorBoundary>;
}

export default AuthLayout;
