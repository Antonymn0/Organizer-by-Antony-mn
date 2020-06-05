import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

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


import Todos from '../components/Todos';

export default function Header({ navigation }) {
   
   return (
     <View style={styles.headContainer}>
       <View style={styles.menuBar}>
         <TouchableOpacity
           onPress={() => {
             navigation.openDrawer();
           }}>
           <Icon name="bars" size={20} color="#fff" />
          
         </TouchableOpacity>
       </View>

       <View style={styles.header}>
         <Text style={styles.text}> My Organizer </Text>
       </View>
     </View>
   );
}




const styles = StyleSheet.create({
   
   headContainer: {
      display: 'flex',
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue',
      width: 500,
      height: 60,
      padding: 10,
      marginLeft: -15,
      marginTop: 15,
      marginBottom: 10,
      },
   menuBar: {
      alignItems: 'flex-start',
      flex: 1,
      backgroundColor: 'blue',
      padding: 5,
 },
   header: {
      justifyContent: 'center',
      textAlign: 'center',
      flex: 4,
      height: 50,
      textAlign: 'center', 
      backgroundColor: 'blue',
      paddingRight: 10,
   },
   text: {
      fontSize: 30,
      color: '#fff',
   }
});