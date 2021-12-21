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
import { person } from "ionicons/icons";

import "./Sidebar.css";
interface Props {
  paths: RouteInterface[];
  username: string;
}

export interface RouteInterface {
  name: string;
  path: string;
  component: React.FC<{}>;
  icon: string;
  sidebarRender?: boolean;
}

const NavSidebar: React.FC<Props> = (props: Props) => {
  const sidebarItems = props.paths
    .filter((routes: RouteInterface) => {
      if (routes.sidebarRender === false) return false;
      return true;
    })
    .map((routes) => {
      return (
        <IonMenuToggle auto-hide="false" key={routes.name}>
          <IonItem routerLink={routes.path}>
            <IonIcon slot="start" ios={routes.icon} md={routes.icon} />
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
            <div>
              <IonIcon ios={person} md={person} />
            </div>
            <div>
              <IonHeader>
                <span>{props.username}</span>
              </IonHeader>
            </div>
            <div>
              <IonHeader>
                <span id={"viewProfile"}>View profile</span>
              </IonHeader>
            </div>
          </IonListHeader>
          {sidebarItems}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default NavSidebar;
