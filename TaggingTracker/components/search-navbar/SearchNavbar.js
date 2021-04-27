import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {normalize} from '../../utils/styling.js';
const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchNavbar = () => {
  return (
    <View>
      <View style={styles.flexRow}>
        <Image
          style={styles.plusIcon}
          source={require('../../assets/icons/pngs/plus-blue.png')}
        />
        <Text style={styles.title}>Addresses</Text>
        <Image
          style={styles.blackGear}
          source={require('../../assets/icons/pngs/black-gear.png')}
        />
      </View>
      <View style={styles.searchInput}>
        <Image
          style={styles.searchIcon}
          source={require('../../assets/icons/pngs/search-gray.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    display: 'flex',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    padding: SCREEN_WIDTH * 0.025,
  },
  outerContainer: {
    paddingTop: SCREEN_WIDTH * 0.05,
  },
  title: {
    fontSize: normalize(24),
  },
  searchInput: {
    marginTop: SCREEN_WIDTH * 0.05,
  },
  plusIcon: {
    width: SCREEN_WIDTH * 0.075,
    height: SCREEN_WIDTH * 0.075,
  },
  blackGear: {
    width: SCREEN_WIDTH * 0.075,
    height: SCREEN_WIDTH * 0.075,
  },
});

export default SearchNavbar;
