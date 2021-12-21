import React from "react";
import {
  IonContent,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { gameController, musicalNote, videocam } from "ionicons/icons";
import BottomTabs from "../common/BottomTabs";

const TabbedLayout: React.FC = () => {
  return (
    // <IonTabs>
    //     <IonRouterOutlet></IonRouterOutlet>

    //     <IonTab tab={"music"}>
    //         <IonContent>
    //             <h1>Music!</h1>
    //         </IonContent>
    //     </IonTab>
    //     <IonTab tab={"movies"}>
    //         <IonContent>
    //             <h1>Movies!</h1>
    //         </IonContent>
    //     </IonTab>
    //     <IonTab tab={"games"}>
    //         <IonContent>
    //             <h1>Games!</h1>
    //         </IonContent>
    //     </IonTab>

    //     <BottomTabs />
    // </IonTabs>
    <BottomTabs />
  );
};

export default TabbedLayout;
