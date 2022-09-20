/* eslint-disable no-useless-escape */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';

import bgImage from '../assets/bg.png';

export default function Signup({navigation}) {
  const [inputs, setInputs] = React.useState({
    firstname:'',
    email:'',
    phone:'',
    password:'',
    dob:'',
  });

  const [errors, setErrors] = React.useState({});

  const handleOnchange = (text, input) =>{
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  const dispatch = useDispatch();
  const validate = async () => {
    //Keyboard.dismiss();
    let isValid = true;

    if (!inputs.firstname) {
      handleError('Please input firstname', 'firstname');
      isValid = false;
    }
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }
    if (!inputs.phone) {
      handleError('Please input phone number', 'phone');
      isValid = false;
    }
    if (!inputs.dob) {
      handleError('Please input date of birth', 'dob');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (
      !inputs.password.match(
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
      )
    ) {
      handleError(
        'password must be 8 characters and 1 Uppercase and 1 Special character and 1 Number should be there',
        'password',
      );

      isValid = false;
    } else {
      dispatch(Signup());
    }
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={styles.container}>
        <View style={styles.header}>
          <View
            style={{
              flex: 1,
              paddingTop: hp('8%'),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image source={require('../assets/back.png')} />
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('../assets/brandLogo.png')} />
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Text
            style={{
              color: 'black',
              fontSize: hp('4%'),
              fontWeight: 'bold',
            }}>
            Register
          </Text>
          <Text
            style={{
              color: '#4B4F54',
              fontSize: hp('2%'),
              paddingTop: hp(2),
              paddingBottom: hp(2),
            }}>
            Complete the form below to create your account.
          </Text>
          <View style={{width: '100%'}}>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={{
                  height: hp('6%'),
                  width: hp('20%'),
                  margin: 12,
                  borderWidth: 1,
                  borderColor: '#D3D3D3',
                  padding: 8,
                  borderRadius: 5,
                  backgroundColor: '#F5F5F5',
                }}
                name="firstname"
                placeholder="First Name"
                type="text"
                autoCapitalize="none"
                onFocus={() => handleError(null, 'firstname')}
                onChangeText={(text) => handleOnchange(text, 'firstname')}
              />

              <TextInput
                style={{
                  height: hp('6%'),
                  width: hp('20%'),
                  margin: 12,
                  marginLeft: 5,
                  borderWidth: 1,
                  borderColor: '#D3D3D3',
                  padding: 8,
                  borderRadius: 5,
                  backgroundColor: '#F5F5F5',
                }}
                name="lastname"
                placeholder="Last Name*"
                autoCapitalize="none"
                onFocus={() => handleError(null, 'lastname')}
                onChangeText={(text) => handleOnchange(text, 'lastname')}
              />
            </View>
            {<Text style={{color: 'red'}}>{errors.firstname}</Text>}
            <TextInput
              style={styles.input}
              name="email"
              placeholder="Email"
              autoCapitalize="none"
              onFocus={() => handleError(null, 'email')}
              onChangeText={(text) => handleOnchange(text, 'email')}
            />
            {<Text style={{color: 'red'}}>{errors.email}</Text>}
            <TextInput
              style={styles.input}
              name="phone"
              placeholder="Phone #*"
              autoCapitalize="none"
              keyboardType="numeric"
              onFocus={() => handleError(null, 'phone')}
              onChangeText={(text) => handleOnchange(text, 'phone')}
            />
            {<Text style={{color: 'red'}}>{errors.phone}</Text>}

            <View style={{flexDirection: 'row'}}>
              <Image
                style={{width: hp(2), height: hp(2), margin: hp(1)}}
                source={require('../assets/info.png')}
              />
              <Text
                style={{
                  padding: 2,
                  fontSize: hp('2%'),
                  flex: 2,
                  color: '#4B4F54',
                }}>
                password must be 8 characters and 1 Uppercase and 1 Special
                character and 1 Number should be there
              </Text>
            </View>
            <TextInput
              style={styles.input}
              name="password"
              placeholder="Your Password"
              autoCapitalize="none"
              secureTextEntry={true}
              onFocus={() => handleError(null, 'password')}
              onChangeText={(text) => handleOnchange(text, 'password')}
            />
            {<Text style={{color: 'red'}}>{errors.password}</Text>}
            <TextInput
              style={styles.input}
              name="password"
              placeholder="Confirm Password"
              autoCapitalize="none"
              secureTextEntry={true}
              onFocus={() => handleError(null, 'password')}
                onChangeText={(text) => handleOnchange(text, 'password')}
            />
            {<Text style={{color: 'red'}}>{errors.password}</Text>}
            <View style={{margin: 6}}>
              <Text style={{padding: 2, color: '#4B4F54'}}>
                Date of Birth *
              </Text>
            </View>

            <View style={{flexDirection: 'row', padding: 2}}>
              <TextInput
                style={{
                  height: hp('6%'),
                  width: hp('13%'),
                  margin: 6,
                  marginLeft: 10,
                  borderWidth: 1,
                  borderColor: '#D3D3D3',
                  padding: 8,
                  borderRadius: 5,
                  backgroundColor: '#F5F5F5',
                }}
                name="dob"
                placeholder="DD"
                autoCapitalize="none"
                keyboardType="numeric"
                onFocus={() => handleError(null, 'dob')}
                onChangeText={(text) => handleOnchange(text, 'dob')}

              />

              <TextInput
                style={{
                  height: hp('6%'),
                  width: hp('13%'),
                  margin: 6,
                  borderWidth: 1,
                  borderColor: '#D3D3D3',
                  padding: 8,
                  borderRadius: 5,
                  backgroundColor: '#F5F5F5',
                }}
                name="dob"
                placeholder="MM"
                autoCapitalize="none"
                keyboardType="numeric"
                onFocus={() => handleError(null, 'dob')}
                onChangeText={(text) => handleOnchange(text, 'dob')}

              />

              <TextInput
                style={{
                  height: hp('6%'),
                  width: hp('13%'),
                  margin: 6,
                  borderWidth: 1,
                  borderColor: '#D3D3D3',
                  padding: 8,
                  borderRadius: 5,
                  backgroundColor: '#F5F5F5',
                }}
                name="dob"
                placeholder="YYYY"
                autoCapitalize="none"
                //keyboardType="numeric"
                onFocus={() => handleError(null, 'dob')}
                onChangeText={(text) => handleOnchange(text, 'dob')}
              />
            </View>
            {<Text style={{color: 'red'}}>{errors.dob}</Text>}

            <View style={{flexDirection: 'row', padding: hp(1)}}>
              <Image
                style={{width: hp(2), height: hp(2), margin: hp(1)}}
                source={require('../assets/check.png')}
              />
              <Text style={{fontSize: hp('2%'), flex: 2, color: '#4B4F54'}}>
                Yes! I'd like to receive occasional emails with updates and
                promotions from the Beer Store.You can withdraw your consent at
                any time.
              </Text>
            </View>
            <TouchableOpacity
              style={styles.button}
                onPress={validate}
              >
            <Text style={{fontSize: hp('2%'), fontWeight: 'bold'}}>
                REGISTER
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flex: 10,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  input: {
    height: hp('6%'),
    margin: 12,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#F5F5F5',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 10,
    margin: 10,
  },
});

