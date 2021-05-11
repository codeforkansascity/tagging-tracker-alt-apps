import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import StandardNavbar from '../../components/navbars/standard/StandardNavbar.js';
const AddressEvents = () => {
  const navbarSettings = {
    backLink: '/',
    topLeftText: 'Partial address',
    topRightContent: {
      type: 'Action',
      text: 'DELETE',
    },
    bottomText: 'Partial address text',
  };

  return (
    <View style={styles.container}>
      <StandardNavbar settings={navbarSettings} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AddressEvents;
