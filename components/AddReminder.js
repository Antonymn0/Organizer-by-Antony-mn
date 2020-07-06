import React, { useState } from 'react';
import {
  SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, CheckBox, TouchableOpacity,
} from 'react-native';
export default function AddReminder({ addReminderFunc, funcOne} ) {
    var reminderHeader = '1'
    var reminderNote ='2'

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
        <TouchableOpacity style={styles.addButton}
          onPress={() => {
            addReminderFunc(reminderHeader, reminderNote);
          }  } >
          <View style={styles.addButtonText}>
            <Text style={styles.addButtonText}> add</Text>
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
    }
});
