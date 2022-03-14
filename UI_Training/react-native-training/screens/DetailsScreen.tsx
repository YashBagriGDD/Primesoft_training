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
      <Card containerStyle={styles.greyCard}>
        <Text style={styles.labelText}>State - Bill Number</Text>
        <Text style={styles.contentText}>
          {currentRollCall.state} - {currentRollCall.billNum}
        </Text>
      </Card>
      <Card>
        <Text style={styles.labelText}>Roll Call Name</Text>
        <Text style={styles.contentText}>{currentRollCall.name}</Text>
      </Card>
      <View style={styles.optionsContainer}>
        <View style={styles.individualContainer}>
          <Text style={styles.contentText}>Summary</Text>
        </View>
        <View style={styles.individualContainer}>
          <Text style={styles.contentText}>View Location</Text>
        </View>
        <View style={styles.individualContainer}>
          <Text style={styles.contentText}>Assign Lobbyists</Text>
        </View>
        <View style={styles.individualContainer}>
          <Text style={styles.contentText}>View Timeline</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  optionsContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  individualContainer: {
    paddingVertical: 20,
    paddingHorizontal: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greyCard: {
    backgroundColor: '#D0D1D1',
  },
  labelText: {
    fontSize: 14,
  },
  contentText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
