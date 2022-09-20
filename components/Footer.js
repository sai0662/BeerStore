/* eslint-disable no-unused-vars */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import bgImage from '../assets/bg.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
//import {Logout} from '../Redux/actions';
import {logout} from '../Redux/Action/loginAction';
export default function Footer() {
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(logout());
  };
  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <Image source={require('../assets/Home.png')} />
        <Image source={require('../assets/Order.png')} />
        <Image source={require('../assets/History.png')} />
        <TouchableOpacity>
          <Image source={require('../assets/Account.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  icons: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 30,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
