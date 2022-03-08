import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../App';
import Header from '../components/Header';
import HeaderButton from '../components/HeaderButton';
import { PostsState } from '../interfaces/interfaces';
import { GetCards } from '../redux/actions';
import data from '../constants/RollCalls.json';
import RollCallCard from '../components/RollCallCard';

const RollCallScreen = (props) => {
  const [tab, setTab] = useState<string | undefined>('non-initiated');

  const post = useSelector<RootState, PostsState['posts']>(
    (state) => state.posts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCards(data.rollCalls));
  }, [dispatch]);

  const cardList = (): JSX.Element[] =>
    post?.list?.map((item, index) => (
      <RollCallCard
        state={item.state}
        billNum={item.billNum}
        name={item.name}
        endDate={item.endDate}
        isSoftRollCall={item.isSoftRollCall}
        index={index}
        key={index}
        goRoute={() => {
          props.navigation.navigate({
            routeName: 'Details',
            params: {
              rollCallId: index,
            },
          });
        }}
      />
    ));

  return (
    <View style={styles.container}>
      <Header title="Rolls Calls" />
      <View style={styles.screen}>
        <Text>The Roll Calls Screen</Text>
        <ScrollView>{cardList()}</ScrollView>
      </View>
    </View>
  );
};

RollCallScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Roll Calls',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
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

export default RollCallScreen;
