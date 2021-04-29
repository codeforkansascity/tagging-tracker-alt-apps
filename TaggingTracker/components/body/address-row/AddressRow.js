import React from 'react';
import {View, Text, StyleSheet, Link, Image} from 'react-native';
import {normalize} from '../../../utils/styling.js';

const AddressRow = addressData => {
  const {addressId, addressTitle} = addressData;

  return (
    <View>
      <Link to={`/events/${addressId}`}>
        <Text>{addressTitle.substring(0, 50)}</Text> {/* can make util */}
        <Image
          style={styles.addressChevron}
          source={require('../../../assets/icons/pngs/chevron.png')}
        />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  addressChevron: {
    width: normalize(20),
    height: normalize(20),
  },
});

export default AddressRow;
