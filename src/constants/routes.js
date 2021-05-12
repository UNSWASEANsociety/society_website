import React from "react"
import About from "../pages/About";
import Home from "../pages/Home";
import { Teams } from "../pages/Teams";

const routes = [
    { name: "Home", path: "/", component: <Home /> },
    { name: "About", path: "/about", component: <About /> },
    { name: "Teams", path: "/teams", component: <Teams /> },
    { name: "Events", path: "/", component: null },
  ];

export default routes;