import { IonPage } from "@ionic/react";
import Header from "./Header";
import NavSidebar from "../common/Sidebar";
import { Paths } from "../../constants/Paths";
import BottomTabs from "../common/BottomTabs";

const BaseLayout: React.FC = ({ children }) => {
  return (
    <div>
      <NavSidebar paths={Paths} />
      <IonPage id="main-content">
        <Header title={"eRollCall"} />
        {children}
      </IonPage>
      <BottomTabs paths={Paths} />
    </div>
  );
};

export default BaseLayout;
