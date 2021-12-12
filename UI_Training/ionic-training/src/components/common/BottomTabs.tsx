import React from "react";
import {IonIcon, IonLabel, IonTabBar, IonTabButton} from "@ionic/react";
import {gameController, musicalNote, videocam} from "ionicons/icons";

const BottomTabs: React.FC = () => {
    return(
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
    );
}

export default BottomTabs;