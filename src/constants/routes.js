import React from "react"
import About from "../pages/About";
import Home from "../pages/Home";
import { Teams } from "../pages/Teams";

const routes = [
    { name: "Home", path: "/", component: <Home /> },
    { name: "About", path: "/about", component: <About /> },
    { name: "Teams", path: "/teams", component: <Teams /> },
    { name: "Contact Us", path: "/contact-us", component: <Teams /> },
  ];

export default routes;