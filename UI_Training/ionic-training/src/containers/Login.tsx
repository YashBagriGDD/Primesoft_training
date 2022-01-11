import React, { useState } from "react";
import {
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonLabel,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import { useDispatch } from "react-redux";
import { LoginAction } from "../redux/actions";
import { useHistory } from "react-router";

import "./Login.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tab, setTab] = useState<string | undefined>("login");

  const dispatch = useDispatch();

  const history = useHistory();

  const loginClick = () => {
    dispatch(LoginAction(username, password));
    history.push("/");
  };

  return (
    <IonPage>
      <IonContent color="purple" className="login ion-align-items-center">
        <h1>eRollCall</h1>
        <IonCard>
          {/* Buttons */}
          <IonSegment
            color={"purple"}
            onIonChange={(e) => setTab(e.detail.value)}
          >
            <IonSegmentButton value="login">
              <IonLabel>User Name</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="otp">
              <IonLabel>OTP</IonLabel>
            </IonSegmentButton>
          </IonSegment>

          <div className="ion-padding">
            {/* Inputs */}
            <div>
              <IonInput
                onIonChange={(e) => {
                  setUsername(e.detail.value!);
                }}
                placeholder="Username*"
                type="text"
                value={username}
              ></IonInput>
              <IonInput
                onIonChange={(e) => {
                  setPassword(e.detail.value!);
                }}
                placeholder="Password*"
                type="password"
                value={password}
              ></IonInput>
            </div>

            {/* 2nd set of buttons */}
            <IonGrid>
              <IonRow>
                <IonCol size="7">
                  <IonLabel>Forgot Password?</IonLabel>
                </IonCol>
                <IonCol size="5">
                  <IonButton color="purple" onClick={loginClick} type="submit">
                    Login
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>

            {/* Demo button */}
            <IonButton color="purple" expand="block" fill="outline">
              Request Demo
            </IonButton>
          </div>
        </IonCard>
        <h6>&copy;2022 eRollCall LLC. ALL RIGHTS RESERVED</h6>
      </IonContent>
    </IonPage>
  );
};

export default Login;
