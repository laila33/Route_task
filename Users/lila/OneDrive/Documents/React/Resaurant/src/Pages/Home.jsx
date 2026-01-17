import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FirstfourCards from "../components/FirstfourCards";
import WelcomeSection from "../components/WelcomeSection";
import Foodmenu from "../components/Foodmenu";
import CardCategory from "../components/CardCategory";
import ContactSection from "../components/ContactSection";
import Team from "../components/Team";
import Clients from "../components/Clients";
import Footer from "../components/Foooter";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FirstfourCards />
      <WelcomeSection />
      <Foodmenu />
      <CardCategory />
      <ContactSection />
      <Team />
      <Clients />
      <Footer />
    </div>
  );
}

export default Home;
