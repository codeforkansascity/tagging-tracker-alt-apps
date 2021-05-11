import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Link} from 'react-router-native';
import {normalize} from '../../../utils/styling.js';
import {truncStr} from '../../../utils/misc.js';

const StandardNavbar = props => {
  const {settings} = props;
  const {backLink, topLeftText, topRightContent, bottomText} = settings;

  return (
    <View style={styles.standardNavbar}>
      <View style={styles.topRow}>
        <View style={styles.topRowLeft}>
          <Image
            style={styles.backIcon}
            source={require('../../../assets/icons/pngs/chevron-blue.png')}
          />
          <Link
            to={backLink}
            style={styles.backLink}
            underlayColor={'transparent'}>
            <Text style={styles.backText}>{truncStr(topLeftText, 16)}</Text>
          </Link>
        </View>
        {topRightContent.type === 'Action' ? (
          <Text style={styles.rightText}>{topRightContent.text}</Text>
        ) : (
          <Link to={topRightContent.link} underlayColor="transparent">
            <Text style={styles.rightText}>{topRightContent.text}</Text>
          </Link>
        )}
      </View>
      <Text style={styles.bottomText}>{bottomText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  standardNavbar: {
    backgroundColor: '#e1e1e3',
    padding: normalize(10),
  },
  topRow: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  topRowLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '50%',
  },
  backIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 0,
    height: normalize(20),
    width: normalize(20),
    transform: [{rotate: '180deg'}],
  },
  backLink: {
    position: 'relative',
    flex: 1,
  },
  backText: {
    flex: 1,
    fontSize: normalize(16),
    color: '#1b89fd',
    paddingLeft: normalize(22),
  },
  rightText: {
    width: '50%',
    color: '#1b89fd',
    fontSize: normalize(16),
    textTransform: 'uppercase',
    textAlign: 'right',
  },
  bottomText: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: normalize(16),
    marginTop: normalize(4),
  },
});

export default StandardNavbar;
