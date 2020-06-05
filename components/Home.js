import React, { useState } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
   TextInput,
   CheckBox, Button,
   TouchableOpacity, navigator,
} from 'react-native';

import Header from '../shared/Header';
import Todos from '../components/Todos';
import Calculator from '../components/Calculator';

export default function Home({ navigation }) {
   
   return (
      <View style={styles.homeContainer}>
         <Button title='go to todos'
            onPress={
               () => {
                  navigation.navigate('Todo'); 
               }
            } />
         <Text> </Text>
         <Button title='go to Reminders'
            onPress={() => {
               navigation.navigate('Reminders');
            }} />
         <Text> </Text>
         <Button title='Calculator'
            onPress={() => {
               navigation.navigate('Calculator');
            }} />
      </View>
   )
}

const styles = StyleSheet.create({
   homeContainer: {
      marginTop: 50,
      padding: 10,
      justifyContent: 'center',
      
   },
})