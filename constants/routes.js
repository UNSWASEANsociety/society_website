import React from "react";


const routes = [
  {
    name: "Home",
    path: "/",
    onHeader: true,
    onFooter: false,
  },
  {
    name: "About ASEAN",
    path: "/about",
    onHeader: true,
    onFooter: true,
  },
  {
    name: "Our Team",
    path: "/team",
    onHeader: true,
    onFooter: true,
  },
  {
    name: "Events",
    path: "/events",
    onHeader: true,
    onFooter: true,
  },
  {
    name: "",
    path: "/event/:id",
    onHeader: false,
    onFooter: false,
  },
  {
    name: "",
    path: "/testpage",
    onHeader: false,
    onFooter: false,
  },
  {
    name: "Contact Us",
    path: "/contact_us",
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
