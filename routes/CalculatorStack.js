import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Calculator from '../components/Calculator';
import Header from '../shared/Header';

const CalculatorStack = createStackNavigator({
   Calculator: {
      screen: Calculator,
      navigationOptions: ({ navigation }) => { // a function that takes navigation and returns header component
         return {
            headerTitle: () => <Header navigation={navigation} />,
         };
      },
   },

});


export default CalculatorStack;