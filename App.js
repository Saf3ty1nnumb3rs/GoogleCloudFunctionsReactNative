import Expo from 'expo';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import keys from './config/keys';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {

  componentDidMount() {
    const config = keys.config;
    firebase.initializeApp(config);

  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
        <KeyboardSpacer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
