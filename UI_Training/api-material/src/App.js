import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./header_components";
import Footer from "./footer_components";
import './App.css';
import Body from "./body_components";
import CheckoutComponent from "./checkout_component";
import PostBody from "./posts_component";

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
                <Route path="/checkout">
                    <CheckoutComponent />
                </Route>
                <Route path="/posts/:postId">
                    <PostBody />
                </Route>
                <Route path="/">
                    <Body />
                </Route>
            </Switch>
            <Footer />
        </div>
    </Router>
  );
}

export default App;
