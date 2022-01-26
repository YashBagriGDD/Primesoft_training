import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import { CardInterface } from "../../interfaces/interfaces";

class Card extends React.Component<CardInterface, any> {
  render(): React.ReactNode {
    return (
      <IonCard>
        {this.props.img ? (
          <img src={this.props.img} alt={`${this.props.header}`} />
        ) : (
          ""
        )}
        <IonCardHeader>
          {this.props.subtitle ? (
            <IonCardSubtitle color={"warning"}>
              <span>{this.props.subtitle}</span>
            </IonCardSubtitle>
          ) : (
            ""
          )}
          <IonCardTitle>{this.props.header}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <span>{this.props.content}</span>
        </IonCardContent>
      </IonCard>
    );
  }
}

export default Card;
