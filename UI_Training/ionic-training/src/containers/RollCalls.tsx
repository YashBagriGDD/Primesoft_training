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
import RollCallCard from "../components/common/RollCallCard";

import "./RollCalls.css";

const RollCalls: React.FC = () => {
  return (
    <IonContent>
      {/* Header */}
      <IonHeader>
        <IonToolbar color={"purple"}>
          <IonTitle>Roll Calls</IonTitle>
          <IonButton id={"init-roll-call-button"} slot={"end"}>
            Initiate Roll Calls
            <IonIcon slot={"start"} ios={add} md={add} />
          </IonButton>
        </IonToolbar>
      </IonHeader>

      <div className={"container"}>
        <RollCallCard
          state="IL"
          billNum="1232442"
          name="Joe"
          endDate="12/16/2004"
          isSoftRollCall={true}
        />
      </div>
    </IonContent>
  );
};

export default RollCalls;
