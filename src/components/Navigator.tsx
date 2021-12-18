import React from 'react';
import ComingSoon from '../screens/ComingSoon';
import Favorite from '../screens/Favorite';
import Search from '../screens/Search';
import Main from '../screens/Main';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from '../screens/Details';



const icons = (route: string, size: number, color: string) => {
  switch (route) {
    case 'Main':
      return <Icon name="home" size={size} color={color} />;
    case 'Favorite':
      return <Icon name="heart" size={size} color={color} />;
    case 'Search':
      return <Icon name="search" size={size} color={color} />;
    default:
      return <Icon name="home" size={size} color={color} />;
  }
};

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => (

  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Main}
      options={{headerShown: false}}
    />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={{headerTitle: '',}}
    />
  </HomeStack.Navigator>
);

const Tab = createBottomTabNavigator();

const Navigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => {
        return icons(route.name, size, color);
      },
    })}>
    <Tab.Screen name="Main" options={{headerShown: false}} component={HomeStackScreen} />
    <Tab.Screen name="Favorite" component={Favorite} />
    <Tab.Screen name="Search" component={Search} />
  </Tab.Navigator>
);

export default Navigator;
