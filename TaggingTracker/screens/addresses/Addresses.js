import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchNavbar from '../../components/navbars/search/SearchNavbar.js';
import AddressRow from '../../components/body/address-row/AddressRow.js';
import DisplayBody from '../../components/body/display-body/DisplayBody.js';

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

  return (
    <View>
      <SearchNavbar />
      <DisplayBody
        components={mockAddresses.map((address, index) => (
          <AddressRow key={index} addressData={address} />
        ))}
        miscStyles={''}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Addresses;
