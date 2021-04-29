import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchNavbar from '../../components/navbars/search/SearchNavbar.js';
import AddressRow from '../../components/body/address-row/AddressRow.js';
import DisplayBody from '../../components/body/display-body/DisplayBody.js';

const AddressEvents = () => {
  return (
    <View>
      <SearchNavbar />
      <DisplayBody components={<Text>AddressEvents</Text>} miscStyles={''} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddressEvents;
