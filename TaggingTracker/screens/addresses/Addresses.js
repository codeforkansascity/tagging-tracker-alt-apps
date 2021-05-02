import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchNavbar from '../../components/navbars/search/SearchNavbar.js';
import AddressRow from '../../components/body/address-row/AddressRow.js';
import DisplayBody from '../../components/body/display-body/DisplayBody.js';
import BottomNavbarTwoCol from '../../components/navbars/bottom-two-col/BottomNavbarTwoCol.js';
import BottomNavbarOneCol from '../../components/navbars/bottom-one-col/BottomNavbarOneCol.js';

const Addresses = () => {
  const mockAddresses = [
    {
      addressId: 1,
      address: 'Address 1',
    },
    {
      addressId: 2,
      address: 'Address 2',
    },
    {
      addressId: 3,
      address: 'Address 3',
    },
  ];

  const isLoggedIn = false;

  return (
    <View style={styles.container}>
      <SearchNavbar />
      <DisplayBody
        components={mockAddresses.map((address, index) => (
          <AddressRow key={index} addressData={address} />
        ))}
        miscStyles={''}
      />
      {isLoggedIn ? <BottomNavbarTwoCol /> : <BottomNavbarOneCol />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Addresses;
