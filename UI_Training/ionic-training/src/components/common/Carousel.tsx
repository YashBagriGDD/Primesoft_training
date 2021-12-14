import React from "react";
import {IonSlide, IonSlides} from "@ionic/react";
import Card, {CardInterface} from "./Card";

const Carousel: React.FC<any> = (props) => {
    const slideItems = props.data.map((item: { header: string; content: string; [key: string]: any;}) => (
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