import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronBack, chevronForward, pencil } from "ionicons/icons";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootState } from "..";
import { PostsState } from "../interfaces/interfaces";

import "./RollCallDetail.css";

interface RollCallDetailParams {
  index: string;
}

const RollCallDetail: React.FC = () => {
  const { index } = useParams<RollCallDetailParams>();

  const posts = useSelector<RootState, PostsState["posts"]>(
    (state) => state.posts
  );

  const currentRollCall = posts.list[parseInt(index)];

  return (
    <IonPage id="details">
      <IonHeader>
        <IonToolbar color="purple">
          <IonButtons slot="start">
            <IonBackButton icon={chevronBack} text={""} />
          </IonButtons>
          <IonTitle className={"center-text"}>View Roll Call</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div>
          <IonCard className="card-padding" color={"medium"}>
            <IonCardSubtitle>
              <span>State - Bill Number</span>
            </IonCardSubtitle>
            <IonCardTitle>
              <span>
                {currentRollCall.state} - {currentRollCall.billNum}
              </span>
            </IonCardTitle>
          </IonCard>
        </div>

        <div>
          <IonCard className="card-padding">
            <IonCardSubtitle>
              <span>Enter Test Roll Call Name</span>
            </IonCardSubtitle>
            <IonCardTitle>
              <span>{currentRollCall.name}</span>
            </IonCardTitle>
            <IonButton slot="end" color={"purple"}>
              <IonIcon icon={pencil} />
            </IonButton>
          </IonCard>
        </div>

        <div>
          <IonList>
            <IonItem>
              <IonLabel>
                <span>Summary</span>
              </IonLabel>
              <IonButton slot="end" fill="clear">
                <IonIcon icon={chevronForward} />
              </IonButton>
            </IonItem>
            <IonItem>
              <IonLabel>
                <span>View Location</span>
              </IonLabel>
              <IonButton slot="end" color="purple" shape="round">
                <IonIcon icon={pencil} />
              </IonButton>
            </IonItem>
            <IonItem>
              <IonLabel>
                <span>Assign Lobbyists</span>
              </IonLabel>
              <IonButton slot="end" color="purple" shape="round">
                <IonIcon icon={pencil} />
              </IonButton>
            </IonItem>
            <IonItem>
              <IonLabel>
                <span>View Timeline</span>
              </IonLabel>
              <IonButton slot="end" color="purple" shape="round">
                <IonIcon icon={pencil} />
              </IonButton>
            </IonItem>
          </IonList>
        </div>
      </IonContent>

      <IonFooter>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <div className="ion-float-right">
                  <IonButton fill="outline" color="purple">
                    Delete
                  </IonButton>
                </div>
              </IonCol>
              <IonCol size="6">
                <div className="ion-float-left">
                  <IonButton fill="solid" color="purple" disabled={true}>
                    Initiated
                  </IonButton>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default RollCallDetail;
