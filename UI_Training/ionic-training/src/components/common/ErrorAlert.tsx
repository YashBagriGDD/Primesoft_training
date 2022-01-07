import { IonIcon } from "@ionic/react";
import { warning } from "ionicons/icons";
import React from "react";

import "./ErrorAlert.css";

interface Props {
  children?: React.ReactNode;
  errorCode: string;
  message: string;
}

const ErrorAlert: React.FC<Props> = (props) => {
  const ErrorName = (code: string) => {
    switch (code) {
      case "403":
        return "Unauthorized user";
      default:
        return "Unknown error";
    }
  };

  return (
    <div className="ion-padding-top ion-wrap error-alert">
      <div className="ion-nowrap error-flex">
        <IonIcon icon={warning} color={"danger"} size="large" />
        <h2 className="errorCode">{props.errorCode}</h2>
      </div>
      <div>
        <h5>{ErrorName(props.errorCode)}</h5>
      </div>
      <div>
        <h5>{props.message}</h5>
      </div>
      {props.children ? <div>{props.children}</div> : ""}
    </div>
  );
};

export default ErrorAlert;
