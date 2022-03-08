/* eslint-disable react/require-default-props */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

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
    <Card>
      {isSoftRollCall ? (
        <View>
          <Text>Soft Roll Call</Text>
        </View>
      ) : (
        <></>
      )}
      <View>
        <Text>State - Bill Number - Name - Roll Call End Date</Text>
        <Text>
          {state} - {billNum} - {name} - {endDate}
        </Text>
      </View>
      <View>
        <Button title="View Bill" buttonStyle={styles.button} />
        <Button
          buttonStyle={styles.button}
          title="View Roll Call"
          onPress={goRoute}
        />
      </View>
    </Card>
  );
};

RollCallCard.defaultProps = {
  isSoftRollCall: false,
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
});

export default RollCallCard;
