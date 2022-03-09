import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { RootState } from '../App';
import Header from '../components/Header';
import { PostsState } from '../interfaces/interfaces';

const DetailsScreen: React.FC = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const rollCallId = props.navigation.getParam('rollCallId');

  const posts = useSelector<RootState, PostsState['posts']>(
    (state) => state.posts
  );

  const currentRollCall = posts.list[parseInt(rollCallId, 10)];

  return (
    <View style={styles.container}>
      <Card>
        <Text>State - Bill Number</Text>
        <Text>
          {currentRollCall.state} - {currentRollCall.billNum}
        </Text>
      </Card>
      <Card>
        <Text>Roll Call Name</Text>
        <Text>{currentRollCall.name}</Text>
      </Card>
      <View>
        <Text>Summary</Text>
      </View>
      <View>
        <Text>View Location</Text>
      </View>
      <View>
        <Text>Assign Lobbyists</Text>
      </View>
      <View>
        <Text>View Timeline</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailsScreen;
