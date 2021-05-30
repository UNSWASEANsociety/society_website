import React from "react";
import About from "../pages/About";
import Home from "../pages/Home";
import Team from "../pages/Team";
import Article from "../pages/Event";
import Events from "../pages/Events";
import TestPage from "../pages/TestPage";
import ContactUs from "../pages/ContactUs";
import FAQ from "../pages/FAQ";

const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
    onHeader: true,
    onFooter: false,
  },
  {
    name: "About ASEAN",
    path: "/about",
    component: <About />,
    onHeader: true,
    onFooter: true,
  },
  {
    name: "Our Team",
    path: "/team",
    component: <Team />,
    onHeader: true,
    onFooter: true,
  },
  {
    name: "Events",
    path: "/events",
    component: <Events />,
    onHeader: true,
    onFooter: true,
  },
  {
    name: "",
    path: "/article/:id",
    component: <Article />,
    onHeader: false,
    onFooter: false,
  },
  {
    name: "",
    path: "/testpage",
    component: <TestPage />,
    onHeader: false,
    onFooter: false,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
    onHeader: false,
    onFooter: true,
  },
  // {
  //   name: "FAQ",
  //   path: "/faq",
  //   component: <FAQ />,
  //   onHeader: false,
  //   onFooter: true,
  // },
  // {
  //   name: "Sponsors",
  //   path: "/sponsors",
  //   component: <TestPage />,
  //   onHeader: false,
  //   onFooter: true,
  // },

  // { name: "Contact Us", path: "/contact-us", component: <Teams /> },
  // { name: "Privacy Policy", path: "/privacy-policy", component: <Teams /> },
  // { name: "FAQ", path: "/faq", component: <Teams /> },
];

export default routes;
