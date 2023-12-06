import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar.js";
import { Banner } from "./components/banner/banner.js";
import Routing_all from "./components/Routing/routing_all.js";
// import Login_dialog from "./components/loginstate/logindialog.js";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Banner />
      <Routing_all />
      {/* <Login_dialog /> */}
    </BrowserRouter>
  );
}

export default App;
