import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeStack from './HomeStackNavigator';
import About from '../components/About';
import Header from '../shared/Header';

const AboutStack = createStackNavigator({
   About: {
      screen: About,
      navigationOptions: ({ navigation }) => { // a function that takes navigation and returns header component
         return {
            headerTitle: () => <Header navigation={navigation} />,
         };
      },
   },

});


export default AboutStack;