/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */

import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  FlatList,
  Animated,
  SafeAreaView,
  Button,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import {Logout} from '../Redux/actions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Items from '../components/Items';
import Paginator from '../components/paginator';
import slides from '../slides';
import Carousel from '../components/Carousel';
export default function Profile({navigation}) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const dispatch = useDispatch();

  const submit = () => {
    dispatch(Logout());
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Carousel />
      <View style={styles.footer}>
        <Footer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  container1: {
    height: hp('60%'),
    width: hp('100%'),
    backgroundColor: 'white',
    marginTop: hp('5%'),
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 10,
  },
  footer: {
    flex: 1,
    //marginTop: hp('90%'),
    backgroundColor: '#fff',
    // paddingHorizontal: 15,
    // paddingVertical: 30,
  },
});
