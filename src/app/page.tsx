"use client";
import AntdLayout from "@/components/antdLayout";
import LoginComponent from "@/components/loginComponent";
import React from "react";


const Home: React.FC = () => {

  return (
    <AntdLayout>
      <LoginComponent />
    </AntdLayout>
  );
}

export default Home;