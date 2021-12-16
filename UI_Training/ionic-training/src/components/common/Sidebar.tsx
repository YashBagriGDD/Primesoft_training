import {
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
} from "@ionic/react";
import React from "react";
import {Paths} from "../../constants/Paths";
import {person} from "ionicons/icons";

import "./Sidebar.css";

const NavSidebar: React.FC = () => {
    const sidebarItems = Paths.filter(routes => {
        if (routes.sidebarRender === false)
            return false;
        return true;
    }).map((routes) => {
        return (
            <IonMenuToggle auto-hide="false" key={routes.name}>
                <IonItem routerLink={routes.path}>
                    <IonIcon slot="start" ios={routes.icon} md={routes.icon}/>
                    <IonLabel>{routes.name}</IonLabel>
                </IonItem>
            </IonMenuToggle>
        );
    });

    return (
        <IonMenu content-id="main-content">
            <IonContent>
                <IonList className={"purple"}>
                    <IonListHeader className={"light"}>
                        <IonIcon ios={person} md={person}/>
                        <IonHeader><span>Username</span></IonHeader>
                        <IonHeader><span id={"viewProfile"}>View profile</span></IonHeader>
                    </IonListHeader>
                    {sidebarItems}
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default NavSidebar;
