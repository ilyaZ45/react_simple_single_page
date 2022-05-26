import React from "react";
import './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
const App = () => {
  return (
      <div className="app-wrapper">
        <Header />
          <Nav />
        <Main />
          <Footer />
      </div>
  );
}

export default App;
