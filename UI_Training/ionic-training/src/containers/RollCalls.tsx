import React from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add } from "ionicons/icons";

import "./RollCalls.css";

const RollCalls: React.FC = () => {
  return (
    <IonContent>
      {/* Header */}
      <IonHeader>
        <IonToolbar color={"purple"}>
          <IonTitle>Roll Calls</IonTitle>
          <IonButton id={"initRollCallButton"} slot={"end"}>
            Initiate Roll Calls
            <IonIcon slot={"start"} ios={add} md={add} />
          </IonButton>
        </IonToolbar>
      </IonHeader>

      <IonTitle size={"large"}>Roll Calls!</IonTitle>
    </IonContent>
  );
};

export default RollCalls;
