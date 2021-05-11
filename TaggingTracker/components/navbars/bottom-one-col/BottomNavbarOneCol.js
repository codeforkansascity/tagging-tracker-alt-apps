import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Link} from 'react-router-native';
import {normalize, globalStyles} from '../../../utils/styling.js';

const BottomNavbarOneCol = () => {
  const navbarItem = {
    icon: '',
    text: 'Login',
    link: '/login',
    fcn: '',
  };

  return (
    <TouchableOpacity style={styles.navbarRow}>
      {navbarItem.icon ? (
        <Image style={styles.icon} source={navbarItem.icon} />
      ) : null}
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
  );
};

const styles = StyleSheet.create({
  navbarRow: {
    ...globalStyles.flexRow,
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
  icon: {
    width: normalize(14),
    height: normalize(14),
    marginRight: normalize(4),
  },
  link: {
    width: '100%',
    alignItems: 'center',
    paddingTop: normalize(12),
    paddingBottom: normalize(12),
  },
  iconTextRow: {
    ...globalStyles.flexRow,
    width: '50%',
    justifyContent: 'center',
  },
});

export default BottomNavbarOneCol;
