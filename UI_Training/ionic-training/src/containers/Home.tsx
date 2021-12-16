import './Home.css';
import React from "react";
import {IonContent} from "@ionic/react";
import Card, {CardInterface} from "../components/common/Card";
import Carousel from "../components/common/Carousel";

const cards: CardInterface[] = [
    {
        header: 'Card 1',
        content: 'This is a test card',
    },
    {
        header: 'Card 2',
        content: 'This is a test card',
    },
    {
        header: 'Card 3',
        content: 'This is a test card',
        subtitle: 'This is a test subtitle',
    },
]

const Home: React.FC = () => {
    return (
        <IonContent className="ion-padding">
            <h1>Home Page!</h1>
            <Carousel cardData={cards} type={"card"} />
        </IonContent>
    );
};

export default Home;
