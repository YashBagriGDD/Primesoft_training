import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

const BaseLayout = ({children}) => {
    return(
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default BaseLayout;

