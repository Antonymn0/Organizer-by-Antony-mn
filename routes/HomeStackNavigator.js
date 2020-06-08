import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Navigator from 'react-native';

//import screens
import Home from '../components/Home';
import Todos from '../components/Todos';
import Reminders from '../components/Reminders';
import Header from '../shared/Header';
import About from '../components/About';
import Calculator from '../components/Calculator';

const screens = {
   
   Home: {
      screen: Home,
      navigationOptions: ({navigation}) => { // a function that takes navigation and returns header component
         return {
            headerTitle: () => <Header navigation={navigation}  />,
         };
      },
   },
   Todo: {
      screen: Todos,
   },
   Reminders: {
      screen: Reminders,
   },
   
   
   
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
  




