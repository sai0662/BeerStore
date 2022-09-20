/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, Touchable, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './Screens/Register';
import HomePage from './Screens/HomePage';
import Signup from './Screens/Signup';
import Intro from './Screens/Intro';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from './Redux/store';
import LoginScreen from './Screens/LoginScreen';
import {Init} from './Redux/actions';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Details from './Screens/Details';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
import {setActive, setToken} from './Redux/Action/loginAction';
import * as storage from './Service/cookie';
import MyProfile from './Screens/MyProfile/MyProfile';
import Address from './Screens/Address/Address';
import MyFavsLoc from './Screens/MyFavsLoc/MyFavsLoc';
import Notifications from './Screens/Notifications/Notifications';
import OrderHistory from './Screens/OrderHistory/OrderHistory';
import CustomDrawer from './components/CustomDrawer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Authstack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

const MyStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#F4F4F6',
        drawerActiveTintColor: 'black',
        drawerStyle: {
          width: wp('100%'),
        },
        drawerLabelStyle: {
          fontWeight: '900',
        },
      }}>
      <Drawer.Screen
        name="My Account"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="My Profle"
        component={MyProfile}
        options={{
          drawerIcon: () => <Image source={require('./assets/user.png')} />,
        }}
      />
      <Drawer.Screen
        name="Saved Address"
        component={Address}
        options={{
          drawerIcon: () => (
            <Image source={require('./assets/addressicon.png')} />
          ),
        }}
      />
      <Drawer.Screen
        name="My Favourite Beers & Locations"
        component={MyFavsLoc}
        options={{
          drawerIcon: () => (
            <Image source={require('./assets/favourites.png')} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{
          drawerIcon: () => <Image source={require('./assets/notif.png')} />,
        }}
      />
      <Drawer.Screen
        name="Order History"
        component={OrderHistory}
        options={{
          drawerIcon: () => (
            <Image source={require('./assets/historyIcon.png')} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const RootNavigation = () => {
  // const token = useSelector(state => state.AuthReducers.authToken);
  // console.log(token);

  // const dispatch = useDispatch();
  // const init = async () => {
  //   await dispatch(Init());
  // };

  // useEffect(() => {
  //   init();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const dispatch = useDispatch();
  const {userToken, active, showSplash} = useSelector(
    state => state.loginReducer,
  );
  const [slider, setSlider] = useState(false);
  //const showInternetModal = featureFlag.features.NoInternetModal;

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const userToken = await storage.getItem('userToken');
      // const slider: any = await storage.getItem('first_time');
      setSlider(JSON.parse(slider));
      dispatch(setToken(userToken));
      // if (showInternetModal) {
      //   NetInfo.addEventListener(state => {
      //     dispatch(setActive(state.isConnected));
      //   });
      // }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <NavigationContainer>
      {userToken !== null ? <MyStack /> : <Authstack />}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
