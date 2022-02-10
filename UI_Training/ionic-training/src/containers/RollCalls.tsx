import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add } from "ionicons/icons";
// import RollCallCard from "../components/common/RollCallCard";
import { useDispatch, useSelector } from "react-redux";
import { GetCards } from "../redux/actions";
import { PostsState, RollCallCardInterface } from "../interfaces/interfaces";

import { RootState } from "..";
// import ErrorAlert from "../components/common/ErrorAlert";
import { RollCallCard } from "@YashBagriGDD/erollcall-library";
import { ErrorAlert } from "@YashBagriGDD/erollcall-library";

import "./RollCalls.css";
import "../components/common/RollCallCard.css";
import "../components/common/ErrorAlert.css";

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
      <IonCol key={index} size="12" sizeLg="4">
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
          value={tab}
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
    </IonContent>
  );
};

export default RollCalls;
