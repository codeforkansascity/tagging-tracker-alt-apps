import React from 'react';
import {View, StyleSheet} from 'react-native';
import {normalize} from '../../../utils/styling.js';

const DisplayBody = props => {
  const {components, miscStyles} = props;
  return <View style={styles.container}>{components}</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: normalize(5),
  },
});

export default DisplayBody;
