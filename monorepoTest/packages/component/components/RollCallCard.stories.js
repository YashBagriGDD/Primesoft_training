import * as React from "react";
import { View } from "react-native";
import { styles } from "../constants/globalStyles";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import RollCallCard from "./RollCallCard";

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
  .addDecorator((story) => <View>{story()}</View>)
  .add("default", () => <RollCallCard {...props} {...actions} />)
  .add("soft roll call", () => (
    <RollCallCard>
      {" "}
      {{ ...props, isSoftRollCall: true }} {...actions}
    </RollCallCard>
  ));
