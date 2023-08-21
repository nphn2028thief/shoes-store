import { LazyLoadImage } from "react-lazy-load-image-component";
import fallback from "~/assets/images/fallback.jpg";
import { useAppSelector } from "~/store";

interface IProps {
  className: string;
}

function Avatar({ className }: IProps) {
  const { user } = useAppSelector((state) => state.authSlice);

  return (
    <LazyLoadImage
      src={user ? user.avatar : fallback}
      alt="avatar"
      className={`${className} rounded-full cursor-pointer`}
      loading="lazy"
    />
  );
}

export default Avatar;
