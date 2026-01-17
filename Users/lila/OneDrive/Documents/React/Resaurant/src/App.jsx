// import React from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import FirstfourCards from './components/FirstfourCards'
// import WelcomeSection from './components/WelcomeSection'
// import Foodmenu from './components/Foodmenu'
// import CardCategory from './components/CardCategory'
// import ContactSection from './components/ContactSection'
// import Team from './components/Team'
// import Clients from './components/Clients'
// import Footer from './components/Foooter'

// function App() {
//   return (
//     <div>

//       <Navbar />
//       <Hero/>
//       <FirstfourCards />
//       <WelcomeSection />
//       <Foodmenu />
//       <CardCategory />
//       <ContactSection />
//       <Team />
//       <Clients />
//       <Footer />
//     </div>
//   )
// }

// export default App

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Navbar from "./components/Navbar";
import Footer from "./components/Foooter";
function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Service />} />
              {/* <Route
              path="*"
              element={
                <div className="text-center py-20 text-2xl">
                  404 - Page Not Found
                </div>
              }
            /> */}
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
