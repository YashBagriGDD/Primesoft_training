import { IonIcon } from "@ionic/react";
import { warning } from "ionicons/icons";
import React from "react";

import "./ErrorAlert.css";

interface Props {
  children?: React.ReactNode;
  errorCode: "403";
}

const ErrorAlert: React.FC<Props> = (props) => {
  return (
    <div className="ion-align-items-center ion-wrap">
      <div className="ion-align-items-start ion-nowrap flexbox">
        <IonIcon icon={warning} color={"danger"} size="large" />
        <h2 className="errorCode">{props.errorCode}</h2>
      </div>
      <div>
        <h5>Error name</h5>
      </div>
      <div>
        <h5>Error Details</h5>
      </div>
      {props.children ? <div>{props.children}</div> : ""}
    </div>
  );
};

export default ErrorAlert;
