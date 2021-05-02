import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Link} from 'react-router-native';
import {normalize, globalStyles} from '../../../utils/styling.js';

const BottomNavbarTwoCol = () => {
  const navbarItems = [
    {
      icon: require('../../../assets/icons/pngs/upload.png'),
      text: 'Sync',
      link: '',
      fcn: 'sync',
    },
    {
      icon: require('../../../assets/icons/pngs/switch.png'),
      text: 'Logout',
      link: '',
      fcn: 'logout',
    },
  ];

  return (
    <View style={styles.navbarRow}>
      {navbarItems.map((navbarItem, index) => (
        <TouchableOpacity key={index} style={styles.iconTextRow}>
          <Image style={styles.icon} source={navbarItem.icon} />
          {navbarItem.fcn ? (
            <Text>{navbarItem.text}</Text>
          ) : (
            <Link
              style={styles.link}
              to={navbarItem.link}
              underlayColor="transparent">
              <Text style={styles.addressText}>{navbarItem.text}</Text>
            </Link>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navbarRow: {
    ...globalStyles.flexRow,
    justifyContent: 'center',
    backgroundColor: '#eee',
    paddingTop: normalize(12),
    paddingBottom: normalize(12),
  },
  icon: {
    width: normalize(14),
    height: normalize(14),
    marginRight: normalize(4),
  },
  iconTextRow: {
    ...globalStyles.flexRow,
    width: '50%',
    justifyContent: 'center',
  },
});

export default BottomNavbarTwoCol;
