import React from "react";
import Card, {CardInterface} from "./Card";
import {Swiper, SwiperSlide} from "swiper/react/swiper-react";
import {Mousewheel, Pagination} from "swiper";

import "swiper/swiper.min.css";
// import 'swiper/modules/autoplay/autoplay.min.css';
import "swiper/modules/mousewheel/mousewheel.min.css"
// import 'swiper/modules/keyboard/keyboard.min.css';
import 'swiper/modules/pagination/pagination.min.css';
// import 'swiper/modules/scrollbar/scrollbar.min.css';
// import 'swiper/modules/zoom/zoom.min.css';
import "@ionic/react/css/ionic-swiper.css";

interface Props {
    cardData?: CardInterface[],
    imgData?: string[],
    type: string,
}

const Carousel: React.FC<Props> = (props) => {
    let slideItems;

    if (props.type.toLowerCase() == "card") {
        slideItems = props.cardData?.map((item, index) => (
            <SwiperSlide key={index}>
                <Card header={item.header} content={item.content} subtitle={item.subtitle} img={item.img} />
            </SwiperSlide>
        ));
    } else if (props.type.toLowerCase() == "img") {
        slideItems = props.imgData?.map((item, index) => (
            <SwiperSlide key={index}>
                <img src={item} />
            </SwiperSlide>
        ))
    }

    return (
        <Swiper
            modules={[Mousewheel, Pagination]}
            mousewheel={true}
            slidesPerView={2}
            pagination={true}
        >
            {slideItems}
        </Swiper>
    );
}

export default Carousel;