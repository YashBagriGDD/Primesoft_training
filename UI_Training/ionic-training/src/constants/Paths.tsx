import Home from "../containers/Home";
import Explore from "../containers/Explore";
import MyPage from "../containers/MyPage";
import {compassOutline, homeOutline, personOutline} from "ionicons/icons";



export const Paths = [
    {
        path: "/",
        component: Home,
        name: "Home",
        icon: homeOutline,
    },
    {
        path: "/explore",
        component: Explore,
        name: "Explore",
        icon: compassOutline,
    },
    {
        path: '/mypage',
        component: MyPage,
        name: "My Page",
        icon: personOutline,
    }
];