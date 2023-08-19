type TComponent =
  | React.LazyExoticComponent<() => JSX.Element>
  | (() => JSX.Element);

interface IRoute {
  id: number;
  name: string;
  path: string;
  page: TComponent;
  layout?: (props: { children: JSX.Element }) => JSX.Element;
  // isPrivate: boolean;
  // isRestricted: boolean;
}

export default IRoute;
