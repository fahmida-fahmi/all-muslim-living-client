import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import React from "react"; // Add this line
import Root from "../Root";
import About from "../components/ABout-Us/About";
import FAQ from "../components/Fqa";
import Guide from "../components/Guide/Guide";
import Contact from "../components/Contact/Contact";
import DashboardLayoutBasic from "../components/User Dashboard/Dashboard/DashboardNav";
import EditBioData from "../components/User Dashboard/Dashboard/Edit Bio Data/EditBioData";
import IgnoreList from "../components/User Dashboard/IgnoreList/IgnoreList";
import MyPurchased from "../components/User Dashboard/MyPurchased/MyPurchased";
import Reports from "../components/User Dashboard/SupportReport/SupportReport";
import {Settings} from "../components/User Dashboard/Settings/Settings";
import Delete from "../components/User Dashboard/Delete/Delete";
import  LoginOption  from "../Shared/LogInfo/LogInOption";
import DashboardHome from "../components/User Dashboard/Dashboard/Home/Home";
import DashboardLayout from "../components/User Dashboard/Dashboard/DashboardNav";
import PurchasePackages from "../components/PurchasedInfo/ConnectionDetails";
import PurchasePackagesBoxOnly from "../components/PurchasedInfo/ConnectionDetails";
// import BiodataCard from '../components/BioDatas/BioDatas';
import AllBioCards from "../components/BioDatas/AllBioCard/AllBioCards";
import SingleBioDataDetails from "../components/BioDatas/BioDataDetails/SingleBioDataDetails";
import SingleBioDataDetailsSkeleton from "../components/Skeleton/SingleBioDataDetailsSkeleton";
import BioDataDownload from "../components/BioDatas/Download/BioDataDownload";
import Fav from "../components/User Dashboard/FavList/FavList";
import FavLists from "../components/User Dashboard/FavList/FavList";
import LoginForm from "../Shared/LogInfo/LogForm";
import Register from "../components/Register/Register";
import PrivateRoute from "../Shared/privateRout/PrivateRoute";
import TermsAndConditions from "../components/TermsNConditions/TermsAndConditions";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import PaymentSuccess from "../components/PurchasedInfo/PaymentSuccess";
import PaymentFailed from "../components/PurchasedInfo/PaymentFailed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/login-options",
        element: <LoginOption />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/logout",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "aboutUs",
        element: <About />,
      },
      {
        path: "connections",
        element: <PurchasePackagesBoxOnly />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "guide",
        element: <Guide />,
      },
      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "allBiodatas",
        element: <AllBioCards />,
      },
      {
        path: "biodatas/:id",
        element: <SingleBioDataDetails />,
      },
      {
        path: "skeleton",
        element: <SingleBioDataDetailsSkeleton />,
      },
      {
        path: "download/:id",
        element: <BioDataDownload />,
      },
      {
        path: "terms",
        element: <TermsAndConditions />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "success/:trans_id",
        element: <PaymentSuccess />,
      },
      {
        path: "failed/:trans_id",
        element: <PaymentFailed />,
      }
    ],
    // children: [

    //   {
    //     path:'/login',
    //     element: <Login/>
    //   },
    // ]
  },
  {
    path: "/profile",
    element: <DashboardLayout />,
    
    // element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        path: "dashboard",
        element: <DashboardHome />,
      },
      {
        path: "editBioData",
        element: <EditBioData />,
      },
      {
        path: "ignoreLists",
        element: <IgnoreList />,
      },
      {
        path: "favLists",
        element: <FavLists />,
      },
      {
        path: "myPurchased",
        element: <MyPurchased />,
      },
      {
        path: "support-Report",
        element: <Reports />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "deleteBiodata",
        element: <Delete />,
      },
      {
        path: "logout",
        element: <LoginOption />,
      },
      {
        path: "connections",
        element: <PurchasePackages />,
      },
    ],
  },
]);

export default router;
