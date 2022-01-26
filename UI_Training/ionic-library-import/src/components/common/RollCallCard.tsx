import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/react";
import React from "react";

import "./RollCallCard.css";

interface RollCallCardProps {
  state: string;
  billNum: string;
  name: string;
  endDate: string;
  isSoftRollCall?: boolean;
  index: number;
}

const RollCallCard: React.FC<RollCallCardProps> = (props) => {
  return (
    <IonCard className="roll-call-card">
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
      <IonGrid>
        <IonRow>
          <IonCol size="6">
            <IonButton expand={"full"} fill={"clear"}>
              View Bill
            </IonButton>
          </IonCol>
          <IonCol size="6">
            <IonButton
              expand={"full"}
              fill={"clear"}
              routerLink={`/rollcalls/${props.index}`}
            >
              View Roll Call
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default RollCallCard;
