import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import StandardNavbar from '../../components/navbars/standard/StandardNavbar.js';
import DisplayBody from '../../components/body/display-body/DisplayBody.js';

const OwnerInfo = props => {
  console.log('>>>', props);
  // const {addressId} = props.addressData;
  const navbarSettings = {
    backLink: '/',
    topLeftText: 'Events',
    topRightContent: {
      type: 'Action',
      text: 'EDIT',
    },
    bottomText: 'Owner Information',
  };

  return (
    <View style={styles.container}>
      <StandardNavbar settings={navbarSettings} />
      <DisplayBody components={[]} miscStyles={''} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default OwnerInfo;
