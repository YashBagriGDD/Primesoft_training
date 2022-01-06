import React, { useEffect } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add } from "ionicons/icons";
import RollCallCard from "../components/common/RollCallCard";
import { useDispatch, useSelector } from "react-redux";
import { GetCards } from "../redux/actions";
import { PostsState, RollCallCardInterface } from "../interfaces/interfaces";

import "./RollCalls.css";
import { RootState } from "..";
import ErrorAlert from "../components/common/ErrorAlert";

//TODO: Style buttons properly
const RollCalls: React.FC = () => {
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

      <ErrorAlert errorCode="403" message="Opps, Something went wrong." />

      <IonGrid>
        <IonRow>{postsList()}</IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default RollCalls;
