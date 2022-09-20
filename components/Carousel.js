/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */

import React, { useState, useRef } from 'react';
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
  ListItem,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import { Logout } from '../Redux/actions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Items from '../components/Items';
import Paginator from '../components/paginator';
import slides from '../slides';
//import Carousel from '../components/Carousel';
import CarouselItem from '../components/data/Carouseltem';
import CarouselItemone from '../components/data/CarouselItemone';
import CarouselItemtwo from '../components/data/CarouselItemtwo';
import CarouselItemthree from '../components/data/CarouselItemthree';


export default function Carousel({ navigation }) {
  //const {width, height} = Dimensions.get('window');
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const dispatch = useDispatch();

  const submit = () => {
    dispatch(Logout());
  };

  const renderCarouselItemtwo = ({ item }) => {
    return (
      <View style={styles.categoryItemWrappertwo}>
        <View style={{ height: hp('21.8%'), width: wp('45%'), padding: hp('2%') }}>
          <Text style={{ fontSize: hp('1.6%'), paddingBottom: hp('2%'), color: '#000000' }}>{item.title}</Text>
          <Text style={{ fontWeight: '900', color: 'black', paddingBottom: hp('2%') }}>{item.name}</Text>
          <TouchableOpacity>
            <View
              style={{
                marginTop: hp(1),
                //borderWidth: 1,
                borderRadius: hp(1),
                //margin: hp(1.5),
                backgroundColor: '#F3B232',
                marginRight: hp(8),
                height: hp('4%'),
                width: wp('20%'),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: wp(3),
                  fontWeight: '900',
                }}>
                {item.text}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <Image source={item.image} style={styles.categoryItemImagetwo} />
        <TouchableOpacity style={{ position: 'absolute', marginTop: hp('1.2%'), marginLeft: hp('26%'), resizeMode: 'strech'}}>
          <Image source={require('../assets/wishlist.png')} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderCarouselItemthree = ({ item }) => {
    return (
      <View style={styles.categoriesItemWrapper3}>
        <Image style={styles.categoryItemImage3} source={item.image} />
        <Text style={styles.categoriesItemTitle3}>{item.title}</Text>
      </View>
    );
  };
  const renderCarouselItem = ({ item }) => {
    return (
      <View style={styles.categoryItemWrapper}>
        <Image source={item.image} style={styles.categoryItemImage} />
        <TouchableOpacity style={{ position: 'absolute', marginTop: hp('1.2%'), marginLeft: hp('1%') }}>
          <Image source={require('../assets/wishlist.png')} />
        </TouchableOpacity>
        <View style={{ height: hp('15%'), width: wp('45%'), padding: hp('2%') }}>
          <Text style={{ fontSize: hp('1.6%'), paddingBottom: hp('2%'), color: '#000000' }}>{item.title}</Text>
          <Text style={{ fontWeight: '900', color: 'black', paddingBottom: hp('3%'), fontSize: hp('2%') }}>{item.name}</Text>
        </View>
      </View>
    );
  };
  const renderCarouselItemone = ({ item }) => {
    return (
      <View style={styles.containerItems}>
        <Image source={item.image} style={styles.categoryItemImageone} />
      </View>
    );
  };
  return (
    <ScrollView style={styles.container1}>
      <View>
        <FlatList
          data={CarouselItemone}
          renderItem={renderCarouselItemone}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          //keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
        />
        <View style={styles.categorypaginationone}>
          <Paginator data={slides} scrollX={scrollX} />
        </View>
      </View>
      {/* <View
        style={{
          borderWidth: 1,
          borderColor: '#F2DDB3',
          backgroundColor: '#FDF3E0',
          borderRadius: 10,
          flexDirection: 'row',
          width: wp('94%'),
          padding: hp(1),
          marginLeft: hp(2),
          marginBottom: hp(2),
        }}>
        <Image
          style={{ height: hp(4), width: wp(6), margin: hp(1),resizeMode: 'stretch' }}
          source={require('../assets/beers2.png')}
        />
        <Text
          style={{
            color: 'black',
            fontSize: hp('2%'),
            marginTop: hp(2),
            fontWeight: 'bold',
          }}>
          Start an order
        </Text>
        <TouchableOpacity>
          <View
            style={{
              marginTop: hp('0.8%'),
              //borderWidth: 1,
              borderRadius: hp('1%'),
              padding: wp(1.5),
              backgroundColor: '#F3B232',
              marginLeft: hp('28%'),
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: wp(3),
                fontWeight: 'bold',
              }}>
              ORDER NOW
            </Text>
          </View>
        </TouchableOpacity>
      </View> */}
      <View style={{height: hp('10%'), width: wp('92%'),borderWidth: 1,marginLeft: wp('4%'), borderColor: '#F2DDB3', backgroundColor: '#FDF3E0',
          borderRadius: 10}}>
          <View style={{height: hp('10%'), width: wp('92%'), flexDirection: 'row'}}>
            <Image
            style={{ height: hp('6%'), width: wp('8%'), margin: hp(1), resizeMode:'stretch' }}
          source={require('../assets/beers2.png')}
        />
            <Text
          style={{
            color: 'black',
            fontSize: hp('2%'),
            marginTop: hp('4%'),
            marginLeft: wp('3%'),
            fontWeight: 'bold',
          }}>
          Start an order
        </Text>
        <TouchableOpacity>
          <View
            style={{
              marginTop: hp('2.2%'),
              borderRadius: hp('1%'),
              padding: wp(1.5),
              backgroundColor: '#F3B232',
              marginLeft: wp('28%'),
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: wp(3),
                fontWeight: 'bold',
              }}>
              ORDER NOW
            </Text>
          </View>
        </TouchableOpacity>
          </View>
          </View>
      <View
        style={{
          //borderWidth: 1,
          //borderColor: '#F2DDB3',
          //backgroundColor: '#FDF3E0',
          borderRadius: 10,
          flexDirection: 'row',
          height: hp('6%'),
          padding: hp(1),
          marginLeft: wp(4),
          marginBottom: hp(2),
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: hp('2%'),
            fontWeight: 'bold',
            paddingTop: hp(1),
          }}>
          Last Ordered
        </Text>
        {/* <TouchableOpacity>
          <View
            style={{
              //marginTop: hp(1),
              borderWidth: 1,
              //borderRadius: hp('1%'),
              padding: wp(1),
              backgroundColor: '#fff',
              marginLeft: wp('60%'),
              borderRadius: 5,
              borderColor: '#F3B232',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: wp(3),
                fontWeight: 'bold',
              }}>
              SEE ALL
            </Text>
          </View>
        </TouchableOpacity> */}
        <TouchableOpacity>
          <View
            style={{
              marginTop: hp('1%'),
              borderRadius: 5,
              //margin: hp(2),
              backgroundColor: '#fff',
              marginLeft: wp('54%'),
              borderColor: '#F3B232',
              borderWidth: 1,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: wp(3),
                fontWeight: 'bold',
              }}>
              SEE ALL
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.categoriesWrapper}>
        <View style={styles.categoriesListWrapper}>
          <FlatList
            data={CarouselItem}
            renderItem={renderCarouselItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            //keyExtractor={item => item.id}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              },
            )}
            scrollEventThrottle={32}
          />
          <View style={styles.categorypagination}>
            <Paginator data={CarouselItem} scrollX={scrollX} />
          </View>
        </View>
      </View>
      <View
        style={{
          //borderWidth: 1,
          //borderColor: '#F2DDB3',
          //backgroundColor: '#FDF3E0',
          borderRadius: 10,
          flexDirection: 'row',
          height: hp('6%'),
          padding: hp(1),
          marginLeft: wp(4),
          marginBottom: hp(2),
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: hp('2%'),
            fontWeight: 'bold',
            paddingTop: hp(1),
          }}>
          What's New
        </Text>
        {/* <TouchableOpacity>
          <View
            style={{
              //marginTop: hp(1),
              borderWidth: 1,
              //borderRadius: hp('1%'),
              padding: wp(1),
              backgroundColor: '#fff',
              marginLeft: wp('60%'),
              borderRadius: 5,
              borderColor: '#F3B232',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: wp(3),
                fontWeight: 'bold',
              }}>
              SEE ALL
            </Text>
          </View>
        </TouchableOpacity> */}
        <TouchableOpacity>
          <View
            style={{
              marginTop: hp('1%'),
              borderRadius: 5,
              //margin: hp(2),
              backgroundColor: '#fff',
              marginLeft: wp('54%'),
              borderColor: '#F3B232',
              borderWidth: 1,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: wp(3),
                fontWeight: 'bold',
              }}>
              SEE ALL
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.categoriesWrapper}>
        <View style={styles.categoriesListWrapper}>
          <FlatList
            data={CarouselItemtwo}
            renderItem={renderCarouselItemtwo}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            //keyExtractor={item => item.id}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              },
            )}
            scrollEventThrottle={32}
          />
          <View style={styles.categorypagination}>
            <Paginator data={CarouselItemtwo} scrollX={scrollX} />
          </View>
        </View>
      </View>
      <View
        style={{
          //borderWidth: 1,
          //borderColor: '#F2DDB3',
          //backgroundColor: '#FDF3E0',
          borderRadius: 10,
          flexDirection: 'row',
          height: hp('6%'),
          padding: hp(1),
          marginLeft: wp(4),
          marginBottom: hp(2),
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: hp('2%'),
            fontWeight: 'bold',
            paddingTop: hp(1),
          }}>
          See What's On Sale
        </Text>
        {/* <TouchableOpacity>
          <View
            style={{
              //marginTop: hp(1),
              borderWidth: 1,
              //borderRadius: hp('1%'),
              padding: wp(1),
              backgroundColor: '#fff',
              marginLeft: wp('60%'),
              borderRadius: 5,
              borderColor: '#F3B232',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: wp(3),
                fontWeight: 'bold',
              }}>
              SEE ALL
            </Text>
          </View>
        </TouchableOpacity> */}
        <TouchableOpacity>
          <View
            style={{
              marginTop: hp('1%'),
              borderRadius: 5,
              //margin: hp(2),
              backgroundColor: '#fff',
              marginLeft: wp('45%'),
              borderColor: '#F3B232',
              borderWidth: 1,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: wp(3),
                fontWeight: 'bold',
              }}>
              SEE ALL
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.categoriesWrapper}>
        <View style={styles.categoriesListWrapper}>
          <FlatList
            data={CarouselItemtwo}
            renderItem={renderCarouselItemtwo}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            //keyExtractor={item => item.id}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              },
            )}
            scrollEventThrottle={32}
          />
          <View style={styles.categorypagination}>
            <Paginator data={CarouselItem} scrollX={scrollX} />
          </View>
        </View>
      </View>
      <View
        style={{
          //borderWidth: 1,
          //borderColor: '#F2DDB3',
          //backgroundColor: '#FDF3E0',
          borderRadius: 10,
          flexDirection: 'row',
          width: hp('48%'),
          padding: hp(1),
          marginLeft: hp(2),
          marginBottom: hp(2),
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: hp('2%'),
            fontWeight: 'bold',
            paddingTop: hp(1),
          }}>
          Beer Cateogires
        </Text>
      </View>
      <View style={styles.categoriesWrapper}>
        <View style={styles.categoriesListWrapper3}>
          <FlatList
            data={CarouselItemthree}
            renderItem={renderCarouselItemthree}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            //keyExtractor={item => item.id}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              },
            )}
            scrollEventThrottle={32}
          />
          <View style={styles.categorypagination}>
            <Paginator data={CarouselItem} scrollX={scrollX} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: 'black',
  // },
  container1: {
    height: hp('60%'),
    width: hp('100%'),
    backgroundColor: 'white',
    marginTop: hp('3%'),
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

  containerItems: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //borderWidth: 1,
    //backgroundColor: 'grey',
    //borderColor: '#E8E8E8',
    borderRadius: 25,
    //width: hp('48%'),
    //height: hp('25%'),
    //padding: 35,
    //padding: hp('2%'),
    //margin: 16,
    //margin: hp('1%'),
    //marginLeft: hp('4%'),
    marginTop: hp('2%'),
    marginBottom: hp('2%'),
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
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderColor: '#E8E8E8',
    borderRadius: 25,
    width: hp('22%'),
    height: hp('38%'),
    padding: 35,
    margin: 16,
  },
  title1: {
    color: '#4B4F54',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 13,
  },
  categoriesWrapper: {
    margin: 10,
  },
  categoriesListWrapper: {
    // paddingTop: 10,
    // paddingBottom: 20,
  },
  categoryItemWrapper: {
    marginRight: 20,
    //borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 20,
  },
  categoryItemImage: {
    width: wp('45%'),
    height: hp('22%'),
    borderColor: '#E8E8E8',
    //marginTop: 5,
    alignSelf: 'center',
    //marginHorizontal: 10,
    borderRadius: 20,
    // marginHorizontal:90,
    resizeMode: 'stretch'
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 10,
  },
  categorypagination: {
    //marginRight:hp('35%')
    marginTop: hp('5%'),
  },
  categorypaginationone: {
    //marginLeft: wp('10%'),
    //marginTop: hp('5%'),
    //marginRight: hp('10%')
  },
  categoryItemImageone: {
    width: wp('94%'),
    height: hp('25%'),
    alignSelf: 'center',
    //marginHorizontal: 10,
    marginHorizontal: hp('2%'),
    //borderRadius: 21,
    borderRadius: hp('3%'),
    resizeMode:'stretch',
  },
  categoryItemWrappertwo: {
    marginRight: 20,
    borderRadius: 20,
    // width: hp('48%'),
    // height: hp('22%'),
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    flexDirection: 'row',
    //backgroundColor:'red',
  },
  categoryItemImagetwo: {
    width: wp('45.8%'),
    height: hp('21.8%'),
    //marginLeft: hp('4%'),
    //alignSelf: 'center',
    marginHorizontal: 10,
    borderRadius: 20,
    borderColor: '#E8E8E8',
    //marginHorizontal:90,
    borderWidth: 1,
    resizeMode: 'stretch',
  },
  categoryTitletwo: {
    borderWidth: 1,
    // height: hp('20%'),
    // width: wp('10%'),
  },
  categoryItemTitle: {
    fontSize: 14,
    margin: 5,
    textAlign: 'center',
  },
  categoryItemTitle2: {
    fontSize: 16,
    margin: 5,
    color: 'black',
    textAlign: 'center',
  },
  categoriesListWrapper3: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  categoriesItemWrapper3: {
    marginRight: 20,
    borderRadius: 10,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    width: wp('38%'),
    backgroundColor: '#FFFFFF',

  },
  categoryItemImage3: {
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categoriesItemTitle3: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 10,
    fontWeight: '900',
    color: 'black',
    marginBottom: 10,
  },
});
