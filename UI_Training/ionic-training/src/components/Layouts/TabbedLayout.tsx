import React from "react";
import { render } from "react-dom";
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
import { musicalNote, videocam, gameController } from "ionicons/icons";

class TabbedLayout extends React.Component {
  render() {
    return (
      <IonTabs>
        <IonRouterOutlet></IonRouterOutlet>

        <IonTab tab={"music"}>
          <IonContent>
            <h1>Music!</h1>
          </IonContent>
        </IonTab>
        <IonTab tab={"movies"}>
          <IonContent>
            <h1>Movies!</h1>
          </IonContent>
        </IonTab>
        <IonTab tab={"games"}>
          <IonContent>
            <h1>Games!</h1>
          </IonContent>
        </IonTab>

        <IonTabBar slot={"bottom"}>
          <IonTabButton tab={"music"}>
            <IonLabel>Music</IonLabel>
            <IonIcon ios={musicalNote} md={musicalNote}></IonIcon>
          </IonTabButton>
          <IonTabButton tab={"movies"}>
            <IonLabel>Movies</IonLabel>
            <IonIcon ios={videocam} md={videocam}></IonIcon>
          </IonTabButton>
          <IonTabButton tab={"games"}>
            <IonLabel>Games</IonLabel>
            <IonIcon ios={gameController} md={gameController}></IonIcon>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    );
  }
}

export default TabbedLayout;
