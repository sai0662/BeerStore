/* eslint-disable react-native/no-inline-styles */
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
import {useNavigation} from '@react-navigation/native';
import Svg from 'react-native-svg';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image style={styles.menu} source={require('../assets/menu.jpeg')} />
        </TouchableOpacity>
        <Image
          style={{marginTop: hp('1%')}}
          source={require('../assets/brandLogo.png')}
        />
        <TouchableOpacity>
          <Image
            style={{marginTop: hp(1), marginRight: 10}}
            source={require('../assets/Cart.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: hp('2%'), marginLeft: hp('1%')}}>
        <View
          style={{
            borderRadius: hp('1%'),
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/Search.png')}
            // style={{height: hp('3%'), width: wp('2%'), marginLeft: hp('2%')}}
            style={{marginLeft: hp('1%')}}
          />
          <TextInput
            style={{marginLeft: hp('2%'), height: hp('6%')}}
            placeholder="Search For Beer..."
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: 'black',
    marginTop: hp('3%'),
  },
  icons: {
    // paddingHorizontal: 20,
    // paddingVertical: 30,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  search: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    //flexDirection: 'row',
    margin: hp('3%'),
    marginBottom: hp('5%'),
  },
  menu: {
    height: hp('5%'),
    width: wp('5%'),
    marginLeft: 10,
  },
  input: {
    height: hp('6%'),
    width: wp('98%'),
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: hp('1%'),
  },
});
