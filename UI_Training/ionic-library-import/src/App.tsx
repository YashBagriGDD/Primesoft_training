import React from "react";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Routes } from "./routes/Routes";
import { Redirect, Route, Switch } from "react-router-dom";
import RollCallDetail from "./containers/RollCallDetail";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Login from "./containers/Login";

const App: React.FC = () => {
  console.log("rendered");

  return (
    <IonApp>
      <IonReactRouter>
        <Switch>
          {Routes()}
          <Route
            path={"/rollcalls/:index"}
            exact={true}
            component={RollCallDetail}
          />
          <Route path={"/login"} exact={true} component={Login} />
        </Switch>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
