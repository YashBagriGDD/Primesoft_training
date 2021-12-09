import {IonContent, IonPage} from "@ionic/react";
import Header from "./Header";
import Footer from "./Footer";
import NavSidebar from "../common/Sidebar";


const BaseLayout: React.FC = ({children}) => {
    return(
        <div>
            <NavSidebar />
            <IonPage id="main-content">
                <Header />
                {children}
                <Footer />
            </IonPage>
        </div>
    );
};

export default BaseLayout;