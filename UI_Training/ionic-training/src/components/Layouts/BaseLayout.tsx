import { IonPage } from "@ionic/react";
import Header from "./Header";
import Footer from "./Footer";
import NavSidebar from "../common/Sidebar";
import { Paths } from "../../constants/Paths";

const BaseLayout: React.FC = ({ children }) => {
  return (
    <div>
      <NavSidebar paths={Paths} />
      <IonPage id="main-content">
        <Header title={"eRollCall"} />
        {children}
      </IonPage>
    </div>
  );
};

export default BaseLayout;
