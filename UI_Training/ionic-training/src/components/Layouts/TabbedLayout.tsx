import React from "react";
import {render} from "react-dom";
import {IonContent, IonRouterOutlet, IonTab, IonTabBar, IonTabButton, IonTabs} from "@ionic/react";
import BottomTabs from "../common/BottomTabs";

class TabbedLayout extends React.Component {
    render() {
        return(
            <IonTabs>
                {/*<IonRouterOutlet></IonRouterOutlet>*/}
                <IonTab tab={"music"}>
                    <IonContent>
                        <h1>Music!</h1>
                    </IonContent>
                </IonTab>
                <IonTab tab={"movies"}>
                    <IonContent>
                        <h1>Movies!</h1>
                    </IonContent>
                </IonTab>
                <IonTab tab={"games"}>
                    <IonContent>
                        <h1>Games!</h1>
                    </IonContent>
                </IonTab>
                <BottomTabs />
            </IonTabs>
        );
    };
};

export default TabbedLayout;