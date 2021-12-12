import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonMenuToggle,
} from "@ionic/react";
import React from "react";
import { Paths } from "../../constants/Paths";

const NavSidebar: React.FC = () => {
    return(
        <IonMenu content-id="main-content">
            <IonContent>
                <IonList>
                    {Paths.map(routes => {
                        return(
                            <IonMenuToggle auto-hide="false" key={routes.name}>
                                <IonItem routerLink={routes.path}>
                                    <IonIcon slot="start" ios={routes.icon} md={routes.icon}></IonIcon>
                                    <IonLabel>{routes.name}</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        );
                    })}
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default NavSidebar;