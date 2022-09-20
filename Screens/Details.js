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
import React, {useState, useRef} from 'react';

export default function Details({navigation}) {
  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  skip: {
    color: 'white',
    padding: 60,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 14,
    borderRadius: 10,
  },
});
