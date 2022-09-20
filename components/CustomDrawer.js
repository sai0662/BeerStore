/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  FlatList,
  SliderBase,
  SafeAreaView,
  Button,
  useWindowDimensions,
  Animated,
  Alert,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React, {useState, useRef} from 'react';
import {
  Drawer,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useDispatch} from 'react-redux';
import {logout} from '../Redux/Action/loginAction';
import {DrawerActions, useNavigation} from '@react-navigation/native';

export default function CustomDrawer(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(logout());
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/loginbg.png')}
        style={{padding: hp('8%')}}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
          <Image
            style={{
              position: 'absolute',
              marginLeft: hp('-6%'),
              marginTop: hp('-4%'),

              // backgroundColor: 'red',
            }}
            source={require('../assets/crossIcon.png')}
          />
        </TouchableOpacity>
        <View>
          <Image
            style={{
              position: 'absolute',
              marginLeft: hp('10%'),
              marginTop: hp('-4%'),
              // backgroundColor: 'red',
            }}
            source={require('../assets/brandLogo.png')}
          />
        </View>
        <View style={styles.username}>
          <Text
            style={{
              color: 'white',
              //paddingTop: hp('2%'),
              fontWeight: '900',
              fontSize: hp('3%'),
              marginLeft: hp('-6%'),
              marginTop: hp('5%'),
              marginBottom: hp('-1%'),
            }}>
            Hello, SaiTeja!
          </Text>
          <Text
            style={{
              color: 'white',
              paddingTop: hp('1%'),
              marginLeft: hp('-6%'),
              marginBottom: hp('-1%'),
              //fontWeight: '900',
              //fontSize: hp('1.8%'),
            }}>
            Welcome back
          </Text>
        </View>
      </ImageBackground>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: 'white',
          // borderWidth: 1,
          //borderColor: 'black',
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          //marginBottom: hp('25%')
          //paddingBottom: hp('15%'),
        }}>
        <DrawerItemList {...props} />
        <View style={{flexDirection: 'row', marginBottom: hp('2%')}}>
          <Image
            style={{marginLeft: hp('2.4%'), marginTop: hp('2%')}}
            source={require('../assets/logout.png')}
          />
          <TouchableOpacity onPress={submit}>
            <Text
              style={{
                marginLeft: hp('4%'),
                marginTop: hp('2%'),
                color: '#4B4F54',
                fontWeight: '900',
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: 'white'}}>
          <View style={styles.support}>
            <Text
              style={{
                marginTop: hp('1.8%'),
                marginLeft: hp('2%'),
                fontWeight: '900',
                color: 'black',
              }}>
              Support
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: hp('1%')}}>
            <Image
              style={{marginLeft: hp('2.4%'), marginTop: hp('2%')}}
              source={require('../assets/Agreement.png')}
            />
            <TouchableOpacity onPress={submit}>
              <Text
                style={{
                  marginLeft: hp('4%'),
                  marginTop: hp('2%'),
                  color: '#4B4F54',
                  fontWeight: '900',
                }}>
                Terms and Conditions
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginBottom: hp('1%')}}>
            <Image
              style={{marginLeft: hp('2.4%'), marginTop: hp('2%')}}
              source={require('../assets/privacy.png')}
            />
            <TouchableOpacity onPress={submit}>
              <Text
                style={{
                  marginLeft: hp('4%'),
                  marginTop: hp('2%'),
                  color: '#4B4F54',
                  fontWeight: '900',
                }}>
                Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginBottom: hp('1%')}}>
            <Image
              style={{marginLeft: hp('2.4%'), marginTop: hp('2%')}}
              source={require('../assets/contact.png')}
            />
            <TouchableOpacity onPress={submit}>
              <Text
                style={{
                  marginLeft: hp('4%'),
                  marginTop: hp('2%'),
                  color: '#4B4F54',
                  fontWeight: '900',
                }}>
                Contact Us
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </DrawerContentScrollView>
      {/* <View style={{backgroundColor: 'white'}}>
        <View style={styles.support}>
          <Text
            style={{
              marginBottom: hp('-1%'),
              marginLeft: hp('2%'),
              fontWeight: '900',
              color: 'black',
            }}>
            Support
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginBottom: hp('2%')}}>
          <Image
            style={{marginLeft: hp('2.4%'), marginTop: hp('2%')}}
            source={require('../assets/Agreement.png')}
          />
          <TouchableOpacity onPress={submit}>
            <Text
              style={{
                marginLeft: hp('4%'),
                marginTop: hp('2%'),
                color: '#4B4F54',
                fontWeight: '900',
              }}>
              Terms and Conditions
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginBottom: hp('2%')}}>
          <Image
            style={{marginLeft: hp('2.4%'), marginTop: hp('2%')}}
            source={require('../assets/privacy.png')}
          />
          <TouchableOpacity onPress={submit}>
            <Text
              style={{
                marginLeft: hp('4%'),
                marginTop: hp('2%'),
                color: '#4B4F54',
                fontWeight: '900',
              }}>
              Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginBottom: hp('2%')}}>
          <Image
            style={{marginLeft: hp('2.4%'), marginTop: hp('2%')}}
            source={require('../assets/contact.png')}
          />
          <TouchableOpacity onPress={submit}>
            <Text
              style={{
                marginLeft: hp('4%'),
                marginTop: hp('2%'),
                color: '#4B4F54',
                fontWeight: '900',
              }}>
              Contact Us
            </Text>
          </TouchableOpacity>
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  username: {
    //marginBottom: 10
  },
  support: {
    width: wp('100%'),
    height: hp('6%'),
    //marginBottom: hp('5%'),
    backgroundColor: '#F4F4F6',
    // borderTopWidth: 1,
    // borderTopColor: 'red',
    //marginLeft: hp('1%'),
    //borderRadius: 8,
  },
});
