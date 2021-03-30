/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
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
import {NativeRouter, Route, Link} from 'react-router-native';

const App = () => {
  return (
    <NativeRouter>
      <SafeAreaView>
        <StatusBar />
        <View style={styles.body}>
          <Route path="/login">
            <Text>Yo</Text>
          </Route>
          <Link to={'/login'}>
            <Text>Hello</Text>
          </Link>
        </View>
      </SafeAreaView>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default App;
