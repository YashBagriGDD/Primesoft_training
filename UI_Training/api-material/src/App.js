import React from 'react';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import Header from "./components/Layouts/header_components";
import Footer from "./components/Layouts/footer_components";
import './App.css';
import { Routes } from "./routes/Routes";

function App() {
  return (
    <Router>
        <div className="container py-3">
            {/* <Body /> */}
            {/* Add the router switch. https://v5.reactrouter.com/web/example/basic
          Body component should come under a switch.
          Checkout component should come under switch
          Checkout component route will be /checkout
          and body component with be / */}
          <Header />
            <Switch>
                {Routes()}
            </Switch>
            <Footer />
        </div>
    </Router>
  );
}

export default App;
