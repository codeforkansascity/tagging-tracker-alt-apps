import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {normalize} from '../../utils/styling';

const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/tagging-tracker-logo.png')}
      />
      <TextInput
        style={[styles.input, styles.username]}
        // onChangeText={searchAddress}
        // value={searchText}
        placeholder={'username'}
        autoCapitalize={'none'}
        autoCorrect={false}
      />
      <TextInput
        style={[styles.input, styles.password]}
        placeholder={'password'}
        secureTextEntry={true}
      />
      <TouchableOpacity
        // onClick={}
        style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: normalize(8),
    paddingRight: normalize(8),
  },
  input: {
    backgroundColor: '#f2f2f2',
    fontSize: normalize(20),
    width: '100%',
    marginTop: normalize(8),
    borderRadius: normalize(8),
    padding: normalize(8),
  },
  username: {},
  password: {},
  loginButton: {
    backgroundColor: '#e5e5e7',
    width: '100%',
    alignItems: 'center',
    marginTop: normalize(8),
    paddingTop: normalize(8),
    paddingBottom: normalize(8),
    borderRadius: normalize(8),
  },
  loginText: {
    fontSize: normalize(20),
  },
});

export default Login;
