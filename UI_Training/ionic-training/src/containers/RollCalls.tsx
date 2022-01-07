import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add } from "ionicons/icons";
import RollCallCard from "../components/common/RollCallCard";
import { useDispatch, useSelector } from "react-redux";
import { GetCards } from "../redux/actions";
import { PostsState, RollCallCardInterface } from "../interfaces/interfaces";

import { RootState } from "..";
import ErrorAlert from "../components/common/ErrorAlert";
import { Route } from "react-router";

import "./RollCalls.css";

//TODO: Style buttons properly
const RollCalls: React.FC = () => {
  const [tab, setTab] = useState<string | undefined>("non-initiated");

  const post = useSelector<RootState, PostsState["posts"]>(
    (state) => state.posts
  );

  const dispatch = useDispatch();

  const data = require("../constants/RollCalls.json");

  useEffect(() => {
    dispatch(GetCards(data.rollCalls));
  }, [data.rollCalls, dispatch]);

  const postsList = () =>
    post?.list?.map((item: RollCallCardInterface, index) => (
      <IonCol key={index} size="12" sizeMd="4">
        <RollCallCard
          state={item.state}
          billNum={item.billNum}
          name={item.name}
          endDate={item.endDate}
          isSoftRollCall={item.isSoftRollCall}
          index={index}
        />
      </IonCol>
    ));

  const tabContent = () => {
    switch (tab) {
      case "non-initiated":
        return (
          <IonGrid>
            <IonRow>{postsList()}</IonRow>
          </IonGrid>
        );
      case "initiated":
        return (
          <ErrorAlert errorCode="403" message="Opps, Something went wrong." />
        );
      case "closed":
        return (
          <ErrorAlert errorCode="403" message="Opps, Something went wrong." />
        );
      default:
        return (
          <ErrorAlert errorCode="403" message="Opps, Something went wrong." />
        );
    }
  };

  return (
    <IonContent>
      {/* Header */}
      <IonHeader>
        <IonToolbar color={"purple"}>
          <IonTitle>Roll Calls</IonTitle>
          <IonButton id={"init-roll-call-button"} slot={"end"}>
            Initiate Roll Calls
            <IonIcon slot={"start"} ios={add} md={add} />
          </IonButton>
        </IonToolbar>
      </IonHeader>

      <div className="segment-padding">
        <IonSegment
          color={"purple"}
          onIonChange={(e) => setTab(e.detail.value)}
        >
          <IonSegmentButton value="non-initiated">
            <IonLabel>Non initiated</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="initated">
            <IonLabel>Initiated</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="closed">
            <IonLabel>Closed</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {tabContent()}
      </div>

      {/* <ErrorAlert errorCode="403" message="Opps, Something went wrong." /> */}

      {/* <IonGrid>
        <IonRow>{postsList()}</IonRow>
      </IonGrid> */}

      {/* <div>
        <IonTabs>
          <IonRouterOutlet>
            <Route
              path="/rollcalls"
              exact
              render={() => (
                <IonGrid>
                  <IonRow>{postsList()}</IonRow>
                </IonGrid>
              )}
            />
            <Route
              path="/initiated"
              exact
              render={() => (
                <ErrorAlert
                  errorCode="403"
                  message="Opps, Something went wrong."
                />
              )}
            />
            <Route path="/closed" exact render={() => <h1>Closed page</h1>} />
          </IonRouterOutlet>
          <IonTabBar slot="top">
            <IonTabButton tab="non-initiated" href="/rollcalls">
              <IonLabel>Non initiated</IonLabel>
            </IonTabButton>
            <IonTabButton tab="initiated" href="/initiated">
              <IonLabel>Initiated</IonLabel>
            </IonTabButton>
            <IonTabButton tab="closed" href="/closed">
              <IonLabel>Closed</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </div> */}
    </IonContent>
  );
};

export default RollCalls;
