import React from "react";
import {IonButton, IonButtons, IonHeader, IonIcon, IonMenuToggle, IonTitle, IonToolbar} from "@ionic/react";
import {notificationsOutline} from "ionicons/icons";

import "./Header.css"

const Header: React.FC = () => {
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
                <IonTitle>eRollCall</IonTitle>
                <IonButton slot={"end"}>
                    <IonIcon md={notificationsOutline}/>
                </IonButton>
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;