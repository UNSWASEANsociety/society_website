import React from "react"
import About from "../pages/About";
import Home from "../pages/Home";
import { Articles } from "../pages/Articles";
import Article from "../pages/Article";

const routes = [
    { name: "Home", path: "/", component: <Home /> },
    { name: "About", path: "/about", component: <About /> },
    { name: "Articles", path: "/articles", component: <Articles /> },
    { name: "", path: "/article/:id", component: <Article/> },
    // { name: "Contact Us", path: "/contact-us", component: <Teams /> },
    // { name: "Privacy Policy", path: "/privacy-policy", component: <Teams /> },
    // { name: "FAQ", path: "/faq", component: <Teams /> },
  ];

export default routes;