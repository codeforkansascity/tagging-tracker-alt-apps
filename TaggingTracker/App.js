/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react';
import {
  SafeAreaView,
  // ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NativeRouter, Route} from 'react-router-native';
import Addresses from './screens/addresses/Addresses.js';
import Login from './screens/login/Login.js';

// the SafeAreaView/StatusBar below is primarily just for the notch padding

const App = () => {
  return (
    <NativeRouter>
      <SafeAreaView>
        <StatusBar />
        <View style={styles.body}>
          <Route exact path="/">
            <Addresses />
          </Route>
          <Route path="/events/:addressId">
            <Text>Change</Text>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </View>
      </SafeAreaView>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  body: {
    height: '100%',
  },
});

export default App;
