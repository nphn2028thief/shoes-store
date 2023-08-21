import { lazy } from "react";
import AuthLayout from "../layouts/auth_layout";
import MainLayout from "../layouts/main_layout";
import IRoute from "../types/route";
import CPath from "./path";

const HomePage = lazy(() => import("../pages/home_page"));
const AboutPage = lazy(() => import("../pages/about_page"));
const ContactPage = lazy(() => import("../pages/contact_page"));
const AuthPage = lazy(() => import("../pages/auth_page"));
const ProfilePage = lazy(() => import("../pages/profile_page"));
const NotFoundPage = lazy(() => import("../pages/not_found_page"));

const CRoute: IRoute[] = [
  {
    id: 1,
    name: "Home",
    path: CPath.HOME,
    page: HomePage,
    layout: MainLayout,
    // isPrivate: false,
    // isRestricted: false,
  },
  {
    id: 2,
    name: "About",
    path: CPath.ABOUT,
    page: AboutPage,
    layout: MainLayout,
    // isPrivate: false,
    // isRestricted: false,
  },
  {
    id: 3,
    name: "Contact",
    path: CPath.CONTACT,
    page: ContactPage,
    layout: MainLayout,
    // isPrivate: false,
    // isRestricted: false,
  },
  {
    id: 4,
    name: "Sign In",
    path: CPath.SIGNIN,
    page: AuthPage,
    layout: AuthLayout,
    // isPrivate: false,
    // isRestricted: true,
  },
  {
    id: 5,
    name: "Profile",
    path: CPath.PROFILE,
    page: ProfilePage,
    layout: MainLayout,
    // isPrivate: true,
    // isRestricted: false,
  },
  {
    id: 6,
    name: "Not Found",
    path: CPath.NOTFOUND,
    page: NotFoundPage,
    // isPrivate: false,
    // isRestricted: false,
  },
];

export default CRoute;
