import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Text } from 'react-native';

import HomeStack from './HomeStackNavigator';
import AboutStack from './AboutStackNavigator';
import About from '../components/About';
import Header from '../shared/Header';
import CalculatorStack from './CalculatorStack';


const RootDrawerNavigator = createDrawerNavigator({
   Home: {
      screen: HomeStack,
   },
   Calculator: {
      screen: CalculatorStack,
      navigationOptions: ({ navigation }) => { // a function that takes navigation and returns header component
         return {
            headerTitle: () => <Header navigation={navigation}  />,
         };
      },
   },
   About: {
      screen: AboutStack,
      navigationOptions: ({ navigation }) => { // a function that takes navigation and returns header component
         return {
            headerTitle: () => <Header navigation={navigation} />,
         };
      },
   },

   
});


export default createAppContainer(RootDrawerNavigator);