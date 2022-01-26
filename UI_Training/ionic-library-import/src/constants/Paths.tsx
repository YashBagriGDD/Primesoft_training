import Home from "../containers/Home";
import Explore from "../containers/Explore";
import {
  businessOutline,
  homeOutline,
  informationCircleOutline,
  listOutline,
  lockClosedOutline,
  logOutOutline,
  personOutline,
} from "ionicons/icons";
import { RouteInterface } from "../interfaces/interfaces";
import RollCalls from "../containers/RollCalls";

export const Paths: RouteInterface[] = [
  {
    path: "/",
    component: RollCalls,
    name: "Home",
    icon: homeOutline,
    sidebarRender: false,
    tabRender: false,
  },
  {
    path: "/organizations",
    component: Home,
    name: "Organizations",
    icon: businessOutline,
    sidebarRender: true,
    tabRender: true,
  },
  {
    path: "/",
    component: RollCalls,
    name: "Roll Calls",
    icon: listOutline,
    sidebarRender: true,
    tabRender: true,
  },
  // {
  //   path: "/initiated",
  //   component: RollCalls,
  //   name: "Roll Calls",
  //   icon: listOutline,
  //   sidebarRender: false,
  // },
  // {
  //   path: "/closed",
  //   component: RollCalls,
  //   name: "Roll Calls",
  //   icon: listOutline,
  //   sidebarRender: false,
  // },
  // {
  //   path: "/rollcalls/:index",
  //   component: RollCallDetail,
  //   name: "Roll Call Detail",
  //   icon: listOutline,
  //   sidebarRender: false,
  // },
  {
    path: "/lobbyists",
    component: Explore,
    name: "Lobbyists",
    icon: personOutline,
    sidebarRender: true,
    tabRender: true,
  },
  {
    path: "/changepassword",
    component: Explore,
    name: "Change Password",
    icon: lockClosedOutline,
    sidebarRender: true,
    tabRender: false,
  },
  {
    path: "/terms",
    component: Home,
    name: "Terms and Conditions",
    icon: informationCircleOutline,
    sidebarRender: true,
    tabRender: true,
  },
  {
    path: "/logout",
    component: Home,
    name: "Logout",
    icon: logOutOutline,
    sidebarRender: true,
    tabRender: false,
  },
];
