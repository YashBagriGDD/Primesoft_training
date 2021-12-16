import Home from "../containers/Home";
import Explore from "../containers/Explore";
import MyPage from "../containers/MyPage";
import {
    businessOutline,
    homeOutline,
    informationCircleOutline,
    listOutline,
    lockClosedOutline,
    logOutOutline,
    personOutline
} from "ionicons/icons";
import TabbedLayout from "../components/Layouts/TabbedLayout";


export const Paths = [
    {
        path: "/",
        component: Home,
        name: "Home",
        icon: homeOutline,
        sidebarRender: false,
    },
    {
        path: "/organizations",
        component: Home,
        name: "Organizations",
        icon: businessOutline,
    },
    {
        path: "/rollcalls",
        component: MyPage,
        name: "Roll Calls",
        icon: listOutline,
    },
    {
        path: "/lobbyists",
        component: Explore,
        name: "Lobbyists",
        icon: personOutline,
    },
    {
        path: "/changepassword",
        component: TabbedLayout,
        name: "Change Password",
        icon: lockClosedOutline,
    },
    {
        path: "/terms",
        component: Home,
        name: "Terms and Conditions",
        icon: informationCircleOutline,
    },
    {
        path: "/logout",
        component: Home,
        name: "Logout",
        icon: logOutOutline,
    },
];