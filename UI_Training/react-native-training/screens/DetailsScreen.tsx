import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
      <Header title="Details" />
      <View style={styles.screen}>
        <Text>The Details Screen</Text>
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
