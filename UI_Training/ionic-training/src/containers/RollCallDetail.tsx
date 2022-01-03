import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootState } from "..";
import { PostsState } from "../interfaces/interfaces";
import { GetCards } from "../redux/actions";

import "./RollCalls.css";

interface RollCallParams {
  index: string;
}

const RollCallDetail: React.FC = () => {
  const { index } = useParams<RollCallParams>();

  const posts = useSelector<RootState, PostsState["posts"]>(
    (state) => state.posts
  );

  const currentRollCall = posts.list[parseInt(index)];

  useEffect(() => {
    console.log(index);
    console.log(posts);
    console.log(currentRollCall);
  }, []);

  return (
    <IonContent>
      <IonHeader>
        <IonToolbar color="purple">
          <IonButtons slot="start">
            <IonBackButton
              defaultHref="/rollcalls"
              icon={chevronBack}
              text={""}
            />
          </IonButtons>
          <IonTitle>View Roll Call</IonTitle>
        </IonToolbar>
      </IonHeader>

      <div>
        {/* <p>{currentRollCall.state}</p>
        <p>{currentRollCall.billNum}</p>
        <p>{currentRollCall.name}</p> */}
      </div>
    </IonContent>
  );
};

export default RollCallDetail;
