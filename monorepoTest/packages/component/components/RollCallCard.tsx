/* eslint-disable react/require-default-props */
import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card, Button, Icon } from "react-native-elements";
import Colors from "../constants/Colors";

interface Props {
  state: string;
  billNum: string;
  name: string;
  endDate: string;
  isSoftRollCall?: boolean;
  index: number;
  goRoute: () => unknown;
}

const RollCallCard: React.FC<Props> = (props) => {
  const { state, billNum, name, endDate, isSoftRollCall, goRoute } = props;

  return (
    <Card containerStyle={styles.cardContainer}>
      {isSoftRollCall ? (
        <View>
          <Text style={styles.softRollCall}>Soft Roll Call</Text>
        </View>
      ) : (
        <></>
      )}
      <View>
        <Text style={styles.titleText}>
          State - Bill Number - Name - Roll Call End Date
        </Text>
        <Text style={styles.contentText}>
          {state} - {billNum} - {name} - {endDate}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="View Bill" buttonStyle={styles.button} />
        <Button
          buttonStyle={styles.button}
          title="View Roll Call"
          onPressIn={goRoute}
        />
      </View>
    </Card>
  );
};

RollCallCard.defaultProps = {
  isSoftRollCall: false,
};

const styles = StyleSheet.create({
  cardContainer: {
    // flex: 1,
    padding: 10,
  },
  buttonContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 5,
  },
  button: {
    // flex: 1,
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    alignSelf: "center",
    backgroundColor: Colors.primaryColor,
    width: "80%",
  },
  titleText: {
    fontSize: 14,
    fontWeight: "normal",
  },
  contentText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  softRollCall: {
    textAlign: "right",
    fontSize: 12,
    fontStyle: "italic",
  },
});

export default RollCallCard;
