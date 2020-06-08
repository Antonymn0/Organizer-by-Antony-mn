import React, { useState } from 'react';
import {
  SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, CheckBox, Button, TouchableOpacity,
} from 'react-native';
import Todos from './Todos';

export default function Addtodo({ addTodo }) {
  const [todoTxt, settodoTxt] = useState('')
    
    return (
        <View style={styles.addtodoContainer}>
          <TextInput style={styles.inputfield}
          multiline
          value= {todoTxt}
             placeholder='  Type here...'
          onChangeText={(val) => { settodoTxt(val); }}  
          />
        <TouchableOpacity 
          onPress={() => {
            if (todoTxt !== '') {
              addTodo(todoTxt) 
              settodoTxt('')
            } 
          } }
        >
           <Text style={styles.txttodo}> Add </Text>
        </TouchableOpacity>
      
       </View>
    );
};


const styles= StyleSheet.create({
    addtodoContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 15,
        marginTop: 5,
        position: 'absolute',
        bottom: 0 , 
      },

      txttodo: {
        flex: 1,
        backgroundColor: 'blue',
        color: '#fff',
        height: 40,
        fontSize: 25,
        padding: 5,
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center', 
        borderRadius: 20,

      },

      inputfield: {
        flex: 4,
        borderWidth: 1,
        borderColor: '#777',
        padding: 7,
        fontSize: 20,
        height: 50, 
        borderRadius: 10,
        
      },

});