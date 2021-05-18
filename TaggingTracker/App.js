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
import AddressEvents from './screens/address-events/AddressEvents.js';
import Login from './screens/login/Login.js';
import OwnerInfo from './screens/owner-info/OwnerInfo.js';

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
            <AddressEvents addressData={{addressId: 1}} />
          </Route>
          <Route path="/address-event/:eventId">
            <Text>Address events</Text>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/owner-info/:addressId">
            <OwnerInfo />
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
