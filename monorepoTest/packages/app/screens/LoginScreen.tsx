import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, Card, Input, Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { LoginAction } from '@monorepo/reduxStore';
import Colors from '../constants/Colors';
// import { LoginAction } from '../redux/actions';

const LoginScreen = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const LoginClick = (): void => {
    dispatch(LoginAction(username, password));
    props.navigation.navigate('Home');
  };

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior="padding"
      keyboardVerticalOffset={10}
    >
      <Text h1 style={styles.title}>
        eRollCall
      </Text>
      <Card containerStyle={styles.cardContainer}>
        <ScrollView>
          <Input
            placeholder="Username"
            onChangeText={(value) => setUsername(value)}
          />
          <Input
            placeholder="Password"
            secureTextEntry
            onChangeText={(value) => setPassword(value)}
          />
        </ScrollView>
        <Button
          title="Login"
          buttonStyle={styles.button}
          onPressIn={LoginClick}
        />
      </Card>
    </KeyboardAvoidingView>
  );
};

LoginScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Login',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
  },
  cardContainer: {
    width: '80%',
    maxWidth: 400,
    maxHeight: 400,
    padding: 20,
  },
  button: {
    marginTop: 10,
  },
  title: {
    marginBottom: 30,
    color: '#fff',
  },
});

export default LoginScreen;
