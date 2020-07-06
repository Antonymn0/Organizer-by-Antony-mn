import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  CheckBox,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// import screens
import AddReminder from './AddReminder';

export default function Reminders() {

  var reminderHeader = '1'
  var reminderNote = '2'

  // use state intitialization
  const [reminders, setReminders] = useState([
    { tittle: 'Title...',  note: 'note...', id: Math.random(),    }, 
  ]);
 
  // set local storage for reminders
  const storeReminders = async (value) => {
    try {
      var remindersJsonvalue = JSON.stringify(value)
      await AsyncStorage.setItem('@storeReminders',remindersJsonvalue)
    } catch (err) {
      Alert.alert(err)
    }
  }
  // useffect loads items from memory only once when the app loads
  useEffect(() => {
    getReminders()
  }, [])
  // read stored reminders from local storage and update setreminders
  const getReminders = async () => {
    var storedReminders = await AsyncStorage.getItem('@storeReminders')
    if (storedReminders !== null) {
      storedReminders = JSON.parse(storedReminders)
      setReminders(storedReminders)
    } else {
      Alert.alert('Reminders list  is empty')
    }
  }
  
  const addReminderFunc = (title, note) => {
      var newReminders = reminders;
      setReminders([
        ...newReminders,
        {tittle: title, note: note, id: Math.random().toString() },
      ]) 
    storeReminders(reminders)
    getReminders
  };
  const deleteReminder = (id) => {
    let newReminders = reminders
    newReminders = newReminders.filter(item => item.id !== id)
    setReminders(newReminders)
    storeReminders(reminders)
    getReminders
  }

  return (
    <View style={styles.reminderContainer}>
     
      {reminders.map(reminder => {
        return (
          <ScrollView key={reminder.id}>
            <View style={styles.reminderItemContainer} key={reminder.id}>
              <View style={styles.headerView}>
                <TextInput   style={styles.reminderHeader}
                  multiline
                  placeHolder="Tittle"
                  value={reminder.tittle}
                  />
                <TouchableOpacity style={styles.icon}
                  onPress={() => { deleteReminder(reminder.id) }}> 
                  <Text style={styles.icon}> 
                  <Icon name='trash-o' size={25}/>
                  </Text>
                </TouchableOpacity>
              </View>
              <TextInput
                style={styles.reminderNote}
                multiline
                placeHolder="Note..."
                value={reminder.note}
              />
            </View>
          </ScrollView>
        );
      })}

      {/* <View style={styles.addReminderContiner}>
        <AddReminder addNewReminder={addReminderFunc} func={funcOne} />
      </View> */}
      
      <View style={styles.addReminderContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.addTitle}
            multiline
            placeHolder="Title"
            onChangeText={val => {
              reminderHeader = val;
            }}
          />
          <TextInput
            style={styles.addNote}
            multiline
            placeHolder="Note..."
            onChangeText={val => {
              reminderNote = val;
            }}
          />
        </View>
        <TouchableOpacity style={styles.addButton}
          onPress={() => {
            addReminderFunc(reminderHeader, reminderNote);
          }} >
          <View style={styles.addButtonText}>
            <Text style={styles.addButtonText}> add</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => getReminders() }> 
      <View style={styles.addButtonText}>
        <Text > local storage</Text>
      </View>
      </TouchableOpacity>
    </View>
    
  );
}

  const styles = StyleSheet.create({
    head: {
      fontSize: 25,
      textAlign: 'center',
      padding: 5,
    },
    reminderContainer: {
      padding: 10,
      paddingTop: 25,
    },
    reminderItemContainer: {
      backgroundColor: '#fefefe',
      borderRadius: 10,
      padding: 10,
      marginBottom: 2,
      marginTop: 2,
    },
    reminderHeader: {
      flex: 4,
      fontSize: 25,
      padding: 5,
      paddingLeft: 10,
      marginBottom: 0,
    },
    reminderNote: {
      fontSize: 19,
      padding: 3,
    },
    headerView: {
      display: 'flex',
      flexDirection: 'row',
    },
    icon: {
      padding: 4,
      alignItems: 'flex-end',
      alignContent: 'center',
      textAlign: 'center',
    },
    addReminderContainer: {
      flexDirection: 'row',
      display: 'flex',
      marginTop: 10,
      marginBottom: 10,
      padding: 5,
      zIndex: 5,
      alignContent: 'center',
    },
    addTittle: {
      fontSize: 25,
      padding: 5,
    },
    addNote: {
      fontSize: 20,
      padding: 5,
      borderTopWidth: 1,
      borderColor: '#ccc',
    },
    inputContainer: {
      flex: 5,
      borderWidth: 1,
      padding: 5,
      borderRadius: 20,
      alignContent: 'center',
    },
    addButton: {
      flex: 1,
      borderRadius: 10,
      height: 70,
      backgroundColor: 'blue',
      alignItems: 'center',
      textAlign: 'center',
      color: 'white',
      marginLeft: 5,
      marginTop: 10,
    },
    addButtonText: {
      color: '#fff',
      paddingTop: 8,
      alignContent: 'center',
      fontSize: 20,
    },
  } );