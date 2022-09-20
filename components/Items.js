/* eslint-disable no-unused-vars */
import React from 'react';
import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Image,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
//const {width, height} = Dimensions.get('window');
export default function Items({item}) {
  //const {width} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'grey',
    borderColor: '#E8E8E8',
    borderRadius: 25,
    width: hp('48%'),
    height: hp('25%'),
    padding: 35,
    margin: 16,
  },
  description: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    // paddingHorizontal: 50,
    // paddingBottom: 20,
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '900',
    // paddingHorizontal: 80,
    // paddingBottom: 20,
  },
});
