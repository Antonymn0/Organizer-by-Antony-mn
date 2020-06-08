import React, { useState } from 'react';
import {
  SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, CheckBox, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//import screens
import Addtodo from './Addtodo';


export default function Todos() {
    const [todos, setTodos] = useState([
      {name: 'To do item...', key: '1', checked: false},
    ]);
    const addTodo = (val) => {
      var newTodos =  todos
      setTodos([...newTodos, { name: val, key: Math.random(), checked: false }]);   
      
    }
    const deleteItem = (key) => {
      var newTodos = todos 
      newTodos = newTodos.filter(item => item.key !== key)
      setTodos(newTodos)
    }
   const updateCheckbox = (key) => {
     var newTodos = todos
     var todoitem = newTodos.find(todo => todo.key === key)
     todoitem.checked = !todoitem.checked
    setTodos(newTodos)
   }
   const toggleCancelbtn = (key) => {
      
   }
   

  return (
 
   <View style={styles.elementTodo}> 
      <ScrollView style={styles.scrollview}>
        {/* output todos to the screen with .map function */}
    {todos.map((item)=>{
      return (
          <View >
            <TouchableOpacity style={styles.todoItem}
              key={item.key}
              onPress = {() => updateCheckbox(item.key) } 
          >
            {/*checkbox */  }
            <Text> <CheckBox style={styles.checkbox} checked={item.checked}  
                onPress = {() => updateCheckbox(item.key) } /> </Text>
            <Text style={styles.textInputs}> {item.name} </Text>
              {/* cancel button */}
            <Text style={styles.cancelbtn} onPress={() => { deleteItem(item.key) }}> 
              <Icon name='trash-o' size={25}
               /> </Text> 
          </TouchableOpacity>
        
            </View>
       )
      }
    )}
    </ScrollView>
     
    <View style={styles.addTodo}>  
      <Addtodo addTodo={addTodo} /> 
    </View>
   
  </View>
  
    );
}



const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    marginBottom: 100,
    padding: 15,
    backgroundColor: '#fff',
         
  },
  elementTodo: {
    flex: 1,
    marginTop: 5,
    marginBottom: 30,
  },
       
  todoItem: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  checkbox: {
    flex: 1,
    borderWidth: 1,
    marginBottom: 1,
    padding: 5,
          
  },
  textInputs: {
    flex: 9,
    fontSize: 18,
    alignItems: 'center',
    alignContent: 'center',
    padding: 5,
         
        },
  cancelbtn: {
          flex: 1,
          color: 'gray',
           alignItems: 'flex-end',
          alignContent: 'center',
          padding: 10,
                       
        },
       

});