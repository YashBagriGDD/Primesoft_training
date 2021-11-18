import React from 'react';
import Header from "./components/header_components";
import Footer from "./components/footer_components";
import './App.css';
import Body from "./components/body_components";

function App() {
  return (
    <div className="container">
      <Header />

      {/* <Body /> */}
      {/* Add the router switch. https://v5.reactrouter.com/web/example/basic
          Body component should come under a swtich. 
          Checkout component should come under switch  
          Checkout component route will be /checkout 
          and body component with be / */}
      

      <Footer />
    </div>
  );
}

export default App;
