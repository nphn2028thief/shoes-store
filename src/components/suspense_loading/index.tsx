import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "~/assets/icons/logo.svg";

function SuspenseLoading() {
  return (
    <div className="w-full min-h-[calc(100vh_-_var(--navbar-height))] flex justify-center items-center mt-[var(--navbar-height)]">
      <LazyLoadImage src={logo} alt="logo" className="w-[100px] md:w-[140px]" />
    </div>
  );
}

export default SuspenseLoading;
