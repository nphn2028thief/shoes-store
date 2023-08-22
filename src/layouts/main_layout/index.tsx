import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "~/components/loading";
import { ICategory } from "~/types/category";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

interface IProps {
  children: JSX.Element;
}

function MainLayout({ children }: IProps) {
  const {
    isLoading,
    isError,
    error,
    data: categories,
  } = useQuery<ICategory[], Error>({
    queryKey: ["category"],
    queryFn: async ({ queryKey }) => {
      const res = await axios.get(`http://localhost:5000/api/${queryKey[0]}`);
      return res.data;
    },
    keepPreviousData: true,
    refetchOnWindowFocus: false
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
