import { useQuery } from "@tanstack/react-query";

import axiosClient from "~/api/axios_client";
import Loading from "~/components/loading";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
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
    <>
      <Navbar categories={categories} />
      <div className="mt-[var(--navbar-height)]">{children}</div>
      <Footer />
    </>
  );
}

export default MainLayout;