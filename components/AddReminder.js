import React, { useState } from 'react';
import {
  SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, CheckBox, TouchableOpacity,
} from 'react-native';

export default function AddReminder({ addReminderFunc } ) {
    var reminderHeader = ''
    var reminderNote =''

    return (
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
        <TouchableOpacity
          onPress={ ()=> {
            addReminderFunc(reminderHeader, reminderNote) }
          } >
          <View style={styles.addButton}>
            <Text style={styles.addButton}> add</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
}


const styles = StyleSheet.create({
   addReminderContainer: {
    flexDirection: 'row',
    display: 'flex',
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    zIndex: 5,
  },
  addTittle: {
    fontSize: 25,
    borderBottomWidth: 1,
    padding: 8,
  },
  addNote: {
    fontSize: 15,
    padding: 8,
    borderTopWidth: 1,
    borderColor: '#ccc',
  
    },
    inputContainer: {
      flex: 5,
      borderWidth: 1,
      padding: 10,
      borderRadius: 20,
      
  },
    addButton: {
        flex: 1,
        borderRadius: 15,
        backgroundColor: 'blue',
        alignItems: 'center',
      alignContent: 'center',
        textAlign: 'center',
        fontSize: 25,
        color: 'white',
        padding: 5,
        marginLeft: 5,
        
        
  },
});
