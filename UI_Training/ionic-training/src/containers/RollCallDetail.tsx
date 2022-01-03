import {
  IonBackButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
} from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { PostsState } from "../interfaces/interfaces";

interface RollCallParams {
  index: string;
}

const RollCallDetail: React.FC = () => {
  const { index } = useParams<RollCallParams>();

  const posts = useSelector<PostsState, PostsState["posts"]>(
    (state) => state.posts
  );

  const currentRollCall = posts.list[parseInt(index)];

  useEffect(() => {
    console.log(posts);
    console.log(currentRollCall);
  }, []);

  return (
    <IonPage id="main-content">
      <IonHeader color="purple">
        <IonBackButton defaultHref="/rollcalls" icon={chevronBack} />
        <IonTitle>View Roll Call</IonTitle>
      </IonHeader>
      <IonContent>
        {/* <p>{currentRollCall.state}</p>
        <p>{currentRollCall.billNum}</p>
        <p>{currentRollCall.name}</p> */}
      </IonContent>
    </IonPage>
  );
};

export default RollCallDetail;
