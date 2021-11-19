import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./components/header_components";
import Footer from "./components/footer_components";
import './App.css';
import Body from "./components/body_components";
import CheckoutComponent from "./components/checkout_component";

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

            <Switch>
                <Route path="/checkout">
                    <Header />
                    <CheckoutComponent />
                </Route>
                <Route path="/">
                    <Header />
                    <Body />
                    <Footer />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
