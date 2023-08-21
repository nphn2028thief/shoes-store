import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

interface IProps {
  children: JSX.Element;
}

function MainLayout({ children }: IProps) {
  return (
    <>
      <Navbar />
      <div className="mt-[var(--navbar-height)]">{children}</div>
      <Footer />
    </>
  );
}

export default MainLayout;
