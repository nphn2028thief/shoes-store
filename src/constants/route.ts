import { lazy } from "react";
import AuthLayout from "../layouts/auth_layout";
import MainLayout from "../layouts/main_layout";
import IRoute from "../types/route";
import EPath from "./path";

const HomePage = lazy(() => import("../pages/home_page"));
const AboutPage = lazy(() => import("../pages/about_page"));
const CategoryPage = lazy(() => import("../pages/category_page"));
const ContactPage = lazy(() => import("../pages/contact_page"));
const AuthPage = lazy(() => import("../pages/auth_page"));
const ProfilePage = lazy(() => import("../pages/profile_page"));
const TestPage = lazy(() => import("../pages/test_page"));
const NotFoundPage = lazy(() => import("../pages/not_found_page"));

const CRoute: IRoute[] = [
  {
    id: 1,
    name: "Home",
    path: EPath.HOME,
    page: HomePage,
    layout: MainLayout,
    // isPrivate: false,
    // isRestricted: false,
  },
  {
    id: 2,
    name: "About",
    path: EPath.ABOUT,
    page: AboutPage,
    layout: MainLayout,
    // isPrivate: false,
    // isRestricted: false,
  },
  {
    id: 3,
    name: "Category",
    path: EPath.CATEGORY_SLUG,
    page: CategoryPage,
    layout: MainLayout,
    // isPrivate: false,
    // isRestricted: false,
  },
  {
    id: 4,
    name: "Contact",
    path: EPath.CONTACT,
    page: ContactPage,
    layout: MainLayout,
    // isPrivate: false,
    // isRestricted: false,
  },
  {
    id: 5,
    name: "Sign In",
    path: EPath.SIGNIN,
    page: AuthPage,
    layout: AuthLayout,
    // isPrivate: false,
    // isRestricted: true,
  },
  {
    id: 6,
    name: "Profile",
    path: EPath.PROFILE,
    page: ProfilePage,
    layout: MainLayout,
    // isPrivate: true,
    // isRestricted: false,
  },
  {
    id: 99,
    name: "Test",
    path: EPath.TEST,
    page: TestPage,
    // isPrivate: false,
    // isRestricted: false,
  },
  {
    id: 7,
    name: "Not Found",
    path: EPath.NOTFOUND,
    page: NotFoundPage,
    // isPrivate: false,
    // isRestricted: false,
  },
];

export default CRoute;
