import React, { useState } from 'react';
import {
  SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, CheckBox, TouchableOpacity,
} from 'react-native';


export default function About () {

    return(
        <View style = {styles.versionView}>
            <Text style={styles.header}> About </Text>
            <Text style={styles.text}> My todo app</Text>
            <Text style={styles.text}> Version 1.0 </Text>
            <Text style={styles.text}> Developer: Antony mn </Text> 
        </View>
    );
}

styles = StyleSheet.create({
            versionView: {
                display: 'flex',
                alignContent: 'center',
                textAlign:  'center',
                alignItems: 'center',
                padding: 10,
                height: 'auto',
                fontSize: 28,
            }, 
            header: {
                fontSize: 35,
                paddingTop: 10,
                paddingBottom: 10,
            },
            text: {
                fontSize: 18,
            }
})
