import React, { useState, useEffect} from 'react';
import {
  SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, CheckBox, TouchableOpacity, Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

//import screens
import Addtodo from './Addtodo';


export default function Todos() {

  // todo useState initialization
    const [todos, setTodos] = useState([
      {name: 'To do item...', key: Math.random().toString(), checked: false},
    ]);
  
  // set local storage for todos
  const storeTodos = async (value) => {
    try {
       var todosJsonvalue =  JSON.stringify(value)
        await AsyncStorage.setItem('@storedodos', todosJsonvalue)
    } catch(err) {
      Alert.alert(err)
    }
  }
  // read stored todos from local storage and update setTodos
  const getTodos = async () => {
     var storedtodos = await AsyncStorage.getItem('@storedodos')
     if (storedtodos !== null) {
       storedtodos =JSON.parse(storedtodos)
       setTodos(storedtodos)
     } else {
       Alert.alert('Todo list  is empty')
     }
   
  }
  // useffect loads items from memory only once when the app loads
  useEffect(() => {
    getTodos()
  }, [])
  
  // add todos
    const addTodo = (val) => {
      var newTodos =  todos
      setTodos([...newTodos, { name: val, key: Math.random(), checked: false }]);   
      storeTodos(todos)  // store todos into the local storage
    }
    const deleteItem = (key) => {
      var newTodos = todos 
      newTodos = newTodos.filter(item => item.key !== key) //filter out deleted item
      setTodos(newTodos)
      storeTodos(todos)
    }
   const updateCheckbox = (key) => {
     var newTodos = todos
     var todoitem = newTodos.find(todo => todo.key === key) 
     todoitem.checked = !todoitem.checked
    setTodos(newTodos)
   }
    

  return (
 
   <View style={styles.elementTodo}> 
      <ScrollView style={styles.scrollview}>
        {/* output todos to the screen with .map function */}
    {todos.map((item)=>{
      return (
          <View  key={item.key}>
            <TouchableOpacity style={styles.todoItem}
             
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
      
      <TouchableOpacity onPress={() => {
          getTodos()
      }}> 
        <Text> Stored todos</Text>
      </TouchableOpacity>
      
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