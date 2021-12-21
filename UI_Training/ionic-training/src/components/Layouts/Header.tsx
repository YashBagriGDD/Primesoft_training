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
import { notificationsOutline } from "ionicons/icons";

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
        <IonTitle>{props.title}</IonTitle>
        <IonButton slot={"end"}>
          <IonIcon md={notificationsOutline} />
        </IonButton>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
