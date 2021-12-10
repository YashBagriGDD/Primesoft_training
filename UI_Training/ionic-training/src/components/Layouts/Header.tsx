import React from "react";
import {
    IonButton,
    IonButtons,
    IonHeader, IonMenuToggle,
    IonIcon,
    IonToolbar, IonTitle
} from "@ionic/react";

const Header: React.FC = () => {
    return(
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuToggle>
                        <IonButton>
                            <IonIcon name="menu-outline"></IonIcon>
                        </IonButton>
                    </IonMenuToggle>
                </IonButtons>
                <IonTitle>Header</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;