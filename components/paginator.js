/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Animated,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Paginator({data}) {
  const {width} = useWindowDimensions();
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  return (
    <View style={styles.dotView}>
      {data.map((_, i) => {
        let opacity = position.interpolate({
          inputRange: [i - 1, i, i + 1],
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={i}
            style={{
              opacity,
              height: 5,
              width: 5,
              backgroundColor: 'black', //#F3B232
              margin: 3,
              borderRadius: 2,
            }}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  dotView: {flexDirection: 'row', marginLeft: hp('22%'), marginBottom: hp(1)},
});
