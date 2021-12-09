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
                            <IonIcon slot="icon-only" name="menu"></IonIcon>
                        </IonButton>
                    </IonMenuToggle>
                </IonButtons>
                <IonTitle>Header</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;