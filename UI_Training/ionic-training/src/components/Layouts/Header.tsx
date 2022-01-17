import React from "react";
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { notificationsOutline, person } from "ionicons/icons";

import "./Header.css";

interface Props {
  title: string;
}

const Header: React.FC<Props> = (props) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuToggle>
            <IonButton>
              <IonIcon name="menu-outline"></IonIcon>
            </IonButton>
          </IonMenuToggle>
        </IonButtons>
        <IonTitle className={"center-sm"}>{props.title}</IonTitle>
        <IonButtons slot={"end"}>
          <IonButton fill={"clear"} color={"medium"}>
            <IonIcon md={notificationsOutline} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
