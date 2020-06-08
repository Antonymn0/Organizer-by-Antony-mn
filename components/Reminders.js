import React, { useState } from 'react';
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
} from 'react-native';
import AddReminder from './AddReminder';

export default function Reminders() {
  const [reminders, setReminders] = useState([
    { tittle: 'Title...',  note: 'note...', id: '2',    },
  ]);
    
    
    const addReminderFunc = (title, note) => {
      var newReminders = reminders;
      return (
      setReminders([
        ...newReminders,
        {tittle: title, note: note, id: Math.random().toString() },
      ])  )
  };
  const deleteReminder = (id) => {
    let newReminders = reminders
    newReminders = newReminders.filter(item => item.id !== id)
    setReminders(newReminders)

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
      <View style={styles.addReminderContiner}>
        <AddReminder addNewReminder={addReminderFunc} />
      </View>
      
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
    }
});
