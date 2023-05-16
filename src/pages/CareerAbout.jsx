import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GetBlockJob from "../components/Main/GetBlockJob/GetBlockJob";
import Latest from "../components/Main/LatestPost/Latest";
import ClientBlock from "../components/Main/ClientBlock/ClientBlock";
import Say from "../components/Main/Say/Say";
import AboutHeader from "../components/CareerAbout/AboutHeader/AboutHeader";
import AboutAgency from "../components/CareerAbout/AboutAgency/AboutAgency";
import AboutInfo from "../components/CareerAbout/AboutInfo/AboutInfo";
import AboutTeam from "../components/CareerAbout/AboutTeam/AboutTeam";

const CareerAbout = () => {
  return (
    <>
      <div className="container">
        <Header />
        <AboutHeader />
        <AboutAgency />
        <AboutInfo />
        <AboutTeam />
        <Say />
        <ClientBlock />
        <Latest />
      </div>
        <GetBlockJob />
      <Footer />
    </>
  );
};

export default CareerAbout;
