import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import React from "react";
import { RollCallCardInterface } from "../../interfaces/interfaces";

import "./RollCallCard.css";

const RollCallCard: React.FC<RollCallCardInterface> = (props) => {
  return (
    <IonCard>
      {props.isSoftRollCall ? (
        <div>
          <div className={"ion-float-end soft-roll-call"}>
            <IonCardSubtitle>Soft Roll Call</IonCardSubtitle>
          </div>
        </div>
      ) : (
        ""
      )}
      <div>
        <IonCardContent>
          <IonCardSubtitle>
            <span>State - Bill Number - Name - Roll Call End Date</span>
          </IonCardSubtitle>
          <IonCardTitle>
            <span>
              {props.state} - {props.billNum} - {props.name} - {props.endDate}
            </span>
          </IonCardTitle>
        </IonCardContent>
      </div>
      <div className={"flexbox ion-nowrap ion-align-items-stretch"}>
        <IonButton expand={"full"} fill={"clear"}>
          View Bill
        </IonButton>
        <IonButton expand={"full"} fill={"clear"}>
          View Roll Call
        </IonButton>
      </div>
    </IonCard>
  );
};

export default RollCallCard;
