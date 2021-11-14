import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from "./components/header_components";
import Body from "./components/body_components";
import Footer from "./components/footer_components";

function App() {
  return (
    <div className="container py-3">
      {/*  Header */}
      <Header />

      {/* Body */}
      <Body />

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
