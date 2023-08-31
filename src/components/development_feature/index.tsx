import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import EPath from "~/constants/path";

function DevelopmentFeature() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-2 px-4">
      <p className="text-center text-xl lg:text-2xl">
        This feature is currently in development, please come back later!
      </p>
      <button
        className="flex items-center gap-2 px-5 py-2 text-white bg-black rounded"
        onClick={() => navigate(EPath.HOME)}
      >
        <span>
          <BiArrowBack />
        </span>
        <span className="text-sm md:text-base">Back To Home</span>
      </button>
    </div>
  );
}

export default DevelopmentFeature;
