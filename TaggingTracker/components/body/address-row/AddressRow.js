import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Link} from 'react-router-native';
import {normalize} from '../../../utils/styling.js';

const AddressRow = props => {
  const {addressId, address} = props.addressData;

  // #fix the substring below can be a globally imoprted util

  return (
    <View style={styles.linkRow}>
      <Link
        style={styles.link}
        to={`/events/${addressId}`}
        underlayColor="transparent">
        <Text style={styles.addressText}>{address.substring(0, 50)}</Text>
      </Link>
      <Image
        style={styles.addressChevron}
        source={require('../../../assets/icons/pngs/chevron.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  linkRow: {
    position: 'relative',
    borderBottomWidth: 1,
    borderColor: '#f3f3f5',
  },
  link: {
    padding: normalize(5),
  },
  addressText: {
    fontSize: normalize(16),
  },
  addressChevron: {
    position: 'absolute',
    top: normalize(5),
    right: 0,
    zIndex: -1,
    width: normalize(20),
    height: normalize(20),
  },
});

export default AddressRow;
