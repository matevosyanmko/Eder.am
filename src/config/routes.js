// components
import HomePage from "../pages/homepage";
import AboutUs from "../pages/aboutUs";
import ContactUs from "../pages/contactUs";
import MasterServices from "../pages/masterServices";

export const Routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/about_us",
    component: AboutUs
  },
  {
    path: "/contact_us",
    component: ContactUs
  },
  {
    path: "/master_services",
    component: MasterServices
  }
];
