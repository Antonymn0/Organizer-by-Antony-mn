


import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, CheckBox, TouchableWithoutFeedback, Keyboard, navigator,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Todos from './components/Todos';
import About from './components/About';
import Reminders from './components/Reminders';
import Home from './components/Home';
import RootDrawerNavigator from './routes/drawerNavigator';


 
 function App({navigation}) {
   return ( 
      <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss()
          } } 
          >
        <View style={styles.main}>
         
          <View style={styles.drawer}> 
            <RootDrawerNavigator />
         </View>
        </View>
     </TouchableWithoutFeedback>
     
    );
}

const  styles = StyleSheet.create({
              main: {
                backgroundColor: '#fff',
                flex: 1,
                height: 100/1,
               },

              header: {
                fontSize: 30,
                height: 50,
                marginTop: 10,
                backgroundColor: 'blue',
                color:'#fff',
                alignItems: 'center',
                textAlign: 'center',
              },
  drawer: {
    display: 'flex',
    flex: 1,
            }
         
              
});

export default App;