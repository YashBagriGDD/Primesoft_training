import Home from "../containers/Home";
import Explore from "../containers/Explore";
import MyPage from "../containers/MyPage";
import {compassOutline, folderOpen, homeOutline, personOutline} from "ionicons/icons";
import TabbedLayout from "../components/Layouts/TabbedLayout";



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
        path: "/mypage",
        component: MyPage,
        name: "My Page",
        icon: personOutline,
    },
    {
        path: "/tabs",
        component: TabbedLayout,
        name: "Tabbed Page",
        icon: folderOpen,
    }
];