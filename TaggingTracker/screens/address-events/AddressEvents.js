import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import StandardNavbar from '../../components/navbars/standard/StandardNavbar.js';
import DisplayBody from '../../components/body/display-body/DisplayBody.js';
import BottomNavbarTwoCol from '../../components/navbars/bottom-two-col/BottomNavbarTwoCol.js';

const AddressEvents = props => {
  const {addressId} = props.addressData;
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
      <DisplayBody components={[]} miscStyles={''} />
      <BottomNavbarTwoCol
        navbarItems={[
          {
            icon: require('../../assets/icons/pngs/property.png'),
            text: 'Owner Info',
            link: `/owner-info/${addressId}`,
            fcn: '',
          },
          {
            icon: require('../../assets/icons/pngs/add-square.png'),
            text: 'Add Event',
            link: '/add-event',
            fcn: '',
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AddressEvents;
