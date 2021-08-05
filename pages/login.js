import { Header } from "@/components/Header";
import LoginForm from "@/page_sections/Login/LoginForm";
import Head from "next/head";
import React from "react";
import routes from "@/constants/routes";

const Login = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="We, UNSW ASEAN Society (ASEANsoc), are a community-based non-for-profit organisation that aims to facilitate discussions on issues occurring in the Southeast Asian region. We aim to educate and empower our members through providing opportunities for them to learn and grow whether it may be through seminars, events or general initiatives."
        />
      </Head>
      {/* <Header links={routes} /> */}
      <LoginForm />
    </>
  );
};

export default Login;
