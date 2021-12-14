import React from "react";
import {IonSlide, IonSlides} from "@ionic/react";
import Card, {CardInterface} from "./Card";

const Carousel: React.FC<{props:CardInterface[]}> = ({props}) => {
    const slideItems = props.map(item => (
        <IonSlide>
            <Card header={item.header} content={item.content} />
        </IonSlide>
    ))

    return (
        <IonSlides>
            {slideItems}
        </IonSlides>
    );
}

export default Carousel;