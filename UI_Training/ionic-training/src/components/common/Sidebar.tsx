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

//TODO: Change to take paths from props
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
                <IonList>
                    <IonListHeader>
                        <div><IonIcon ios={person} md={person}/></div>
                        <div><IonHeader><span>Username</span></IonHeader></div>
                        <div><IonHeader><span id={"viewProfile"}>View profile</span></IonHeader></div>
                    </IonListHeader>
                    {sidebarItems}
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default NavSidebar;
