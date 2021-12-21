import { IonContent, IonPage } from "@ionic/react";
import Header from "./Header";
import Footer from "./Footer";
import NavSidebar from "../common/Sidebar";
import { Paths } from "../../constants/Paths";

const BaseLayout: React.FC = ({ children }) => {
  return (
    <div>
      <NavSidebar paths={Paths} username={"username"} />
      <IonPage id="main-content">
        <Header />
        {children}
        <Footer />
      </IonPage>
    </div>
  );
};

export default BaseLayout;
