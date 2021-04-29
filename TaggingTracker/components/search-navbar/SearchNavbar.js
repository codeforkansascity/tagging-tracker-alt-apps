import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import {normalize} from '../../utils/styling.js';
const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchNavbar = () => {
  const [searchText, setSearchText] = useState('');

  const searchAddress = e => {
    setSearchText(e);
  };

  return (
    <View style={styles.searchNavbar}>
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
      <View style={styles.searchInputContainer}>
        <Image
          style={styles.searchIcon}
          source={require('../../assets/icons/pngs/search-gray.png')}
        />
        <TextInput
          style={styles.searchInput}
          onChangeText={searchAddress}
          value={searchText}
          placeholder={'search'}
          autoCapitalize={'none'}
          autoCorrect={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchNavbar: {
    backgroundColor: '#fafafa',
    padding: normalize(10),
    borderBottomColor: '#e1e1e3',
    borderBottomWidth: normalize(1),
  },
  flexRow: {
    display: 'flex',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  outerContainer: {
    paddingTop: SCREEN_WIDTH * 0.05,
  },
  title: {
    fontSize: normalize(24),
    fontWeight: 'bold',
  },
  searchInputContainer: {
    position: 'relative',
    marginTop: SCREEN_WIDTH * 0.05,
    backgroundColor: '#e2e2e2',
    borderRadius: normalize(6),
  },
  searchInput: {
    fontSize: normalize(20),
    padding: normalize(5),
    marginLeft: normalize(25),
  },
  searchIcon: {
    position: 'absolute',
    top: normalize(7.5), // #fix this is probably bad to use font dimensions for other things
    left: normalize(5),
    height: normalize(20),
    width: normalize(20),
    zIndex: 1,
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
