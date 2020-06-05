import React, {useState} from 'react';
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
    {tittle: 'tittle', note: 'note', id: '1'},
    {tittle: 'Buy groceries', note: 'from grocery store on my way home. remember bread too',      id: '2',
    },
    { tittle: 'Visit john',  note: 'at his place immediately after work', id: '2',    },
  ]);
    
    
    const addReminderFunc = (title, note) => {
      var newReminders = reminders;
      return (
      setReminders([
        ...newReminders,
        {tittle: title, note: note, id: Math.random().toString() },
      ])  )
    };

  return (
    <View style={styles.reminderContainer}>
     
      {reminders.map(reminder => {
        return (
          <ScrollView>
            <View style={styles.reminderItemContainer}>
              <TextInput
                style={styles.reminderHeader}
                multiline
                placeHolder="Tittle"
                value={reminder.tittle}
              />
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
        <AddReminder addNewReminder={ addReminderFunc } />
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
    fontSize: 25,
    padding: 5,
    paddingLeft: 10,
    marginBottom: 0,
  },
  reminderNote: {
    fontSize: 19,
    padding: 3,
  },
    addReminderContiner: {
        
  },
});
