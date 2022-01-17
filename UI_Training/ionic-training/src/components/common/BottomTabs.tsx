import React from "react";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { Route } from "react-router";
import { RouteInterface } from "../../interfaces/interfaces";

interface Props {
  paths: RouteInterface[];
}

const BottomTabs: React.FC<Props> = (props: Props) => {
  const routesMap = props.paths
    .filter((routes: RouteInterface) => {
      if (routes.tabRender === false) return false;
      return true;
    })
    .map((routes, index) => {
      return <Route path={routes.path} exact key={index} />;
    });

  const tabsMap = props.paths
    .filter((routes: RouteInterface) => {
      if (routes.tabRender === false) return false;
      return true;
    })
    .map((routes, index) => {
      let tabName = routes.name.replaceAll("\\/", "");

      return (
        <IonTabButton tab={tabName} href={routes.path} key={index}>
          <IonIcon icon={routes.icon} />
          <IonLabel>{routes.name}</IonLabel>
        </IonTabButton>
      );
    });

  return (
    <div className="ion-hide-sm-up">
      <IonTabs>
        <IonRouterOutlet></IonRouterOutlet>
        <IonTabBar slot="bottom">{tabsMap}</IonTabBar>
      </IonTabs>
    </div>
  );
};

export default BottomTabs;
