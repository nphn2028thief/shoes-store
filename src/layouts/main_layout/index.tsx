import { useQuery } from "@tanstack/react-query";

import axiosClient from "~/api/axios_client";
import Loading from "~/components/loading";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import ErrorBoundary from "~/components/error_boundaries";
import { useAppDispatch } from "~/store";
import { setCategories } from "~/store/category/cagetory_slice";
import { ICategory } from "~/types/category";

interface IProps {
  children: JSX.Element;
}

function MainLayout({ children }: IProps) {
  const dispatch = useAppDispatch();

  const {
    isLoading,
    isError,
    error,
    data: categories,
  } = useQuery<ICategory[], Error>({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await axiosClient.get("category");
      dispatch(setCategories(res.data));
      return res.data;
    },
    retry: 1,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <span>Categories error: {error.message}</span>;
  }

  return (
    <ErrorBoundary>
      <Navbar categories={categories} />
      <div className="h-[calc(100vh_-_var(--navbar-height))] mt-[var(--navbar-height)]">{children}</div>
      <Footer />
    </ErrorBoundary>
  );
}

export default MainLayout;