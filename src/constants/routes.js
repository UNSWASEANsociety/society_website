import React from "react";
import About from "../pages/About";
import Home from "../pages/Home";
import { Team } from "../pages/Team";
import Article from "../pages/Article";
import { Events } from "../pages/Events";

const routes = [
  { name: "Home", path: "/", component: <Home /> },
  { name: "About", path: "/about", component: <About /> },
  { name: "Our Team", path: "/team", component: <Team /> },
  { name: "Events", path: "/events", component: <Events /> },
  { name: "", path: "/article/:id", component: <Article /> },
  // { name: "Contact Us", path: "/contact-us", component: <Teams /> },
  // { name: "Privacy Policy", path: "/privacy-policy", component: <Teams /> },
  // { name: "FAQ", path: "/faq", component: <Teams /> },
];

export default routes;
