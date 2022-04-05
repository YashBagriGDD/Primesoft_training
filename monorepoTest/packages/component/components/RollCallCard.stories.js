import * as React from "react";
import { View } from "react-native";
import { styles } from "../constants/globalStyles";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import RollCallCard from "./RollCallCard";
import {
  withKnobs,
  knobsWrapper,
  boolean,
  number,
  text,
} from "@storybook/addon-knobs";
import CenterView from "../storybook/stories/CenterView";

const props = {
  state: "Illinois",
  billNum: 124352,
  name: "The Bill",
  endDate: "12/22/2022",
  index: 0,
};

const actions = {
  goRoute: action("goRoute"),
};

storiesOf("Roll Call Card", module)
  .addDecorator((story) => <CenterView>{story()}</CenterView>)
  .add("default", () => (
    <RollCallCard
      state={text("State", "IL")}
      billNum={number("Bill Number", "123452")}
      name={text("Name", "The Bill")}
      endDate={text("End Date", "12/22/2022")}
      index={number("Index", 0)}
      isSoftRollCall={boolean("Soft Roll Call", false)}
      goRoute={action("goRoute")}
    />
  ))
  .add("Soft Roll Call", () => (
    <RollCallCard
      state={text("State", "IL")}
      billNum={number("Bill Number", "123452")}
      name={text("Name", "The Bill")}
      endDate={text("End Date", "12/22/2022")}
      index={number("Index", 0)}
      isSoftRollCall={boolean("Soft Roll Call", true)}
      goRoute={action("goRoute")}
    />
  ));
