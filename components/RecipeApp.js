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


export default function RecipeApp() {

   const APP_ID = '7429ddd'
   const APP_KEY = '72f971ad082fafc08d206a1300a1d0c2'

   //initialize usteState
   const [Recipes, setRecipes] = useState([])
   
   //build API fetch string
   var REQUEST = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY} `

   var title = 'Chicken Soup'
   var ingredients = 'chicken wings, nuggets, salt, flour, water'
   var carlories = 213

// fetch data from the API 
    const fetchAPI = async () => {
   //    try {
   //       var responce = await fetch(REQUEST)
   //       var data = await responce.json()
   //       setRecipes(data.hits)
   //    } catch (err) {
   //       Alert.alert(err)
   //    }
   // 
   
   try {
      var responce = await fetch(REQUEST)
      var data = await responce.json()
      console.log('Fetching data...')
      console.log(data.hits)
      setRecipes(data.hits)
   }
}
   // // set local storage for reminders
   // const storeReminders = async (value) => {
   //    try {
   //       var remindersJsonvalue = JSON.stringify(value)
   //       await AsyncStorage.setItem('@storeReminders', remindersJsonvalue)
   //    } catch (err) {
   //       Alert.alert(err)
   //    }
   // }
   // // useffect loads items from memory only once when the app loads
   // useEffect(() => {
   //    getReminders()
   // }, [])
   // // read stored reminders from local storage and update setreminders
   // const getReminders = async () => {
   //    var storedReminders = await AsyncStorage.getItem('@storeReminders')
   //    if (storedReminders !== null) {
   //       storedReminders = JSON.parse(storedReminders)
   //       setReminders(storedReminders)
   //    } else {
   //       Alert.alert('Reminders list  is empty')
   //    }
   // }



   return (
      <View >
         <Text style={styles.mainHeader}> Food Recipes</Text> 
        <View style={styles.searchArea}>
            <TextInput style={styles.searchBar}
         placeholder= 'Search here...'
         /> 
         <TouchableOpacity onPress={()=> {fetchAPI()}}> 
                  <Text style={styles.searchButton}> Search </Text>
         </TouchableOpacity>
          </View>
         <Text style={styles.resultsHeader}> Search results </Text>
         
         <View style={styles.recipeContentContainer}> 
   {/* /display recipes to the screen */}
         {Recipes.map(recipe =>( 
              <View style={styles.recipeContent}> 
            <Text style={styles.title}> {Recipes.recipe.label} { JSON.stringify(Rrecipe.recipe.label)}</Text>
            <Text style={styles.ingredients}> Ingridients </Text>
            <Text> {ingredients}</Text>
               <Text style={styles.carlories}> Carlories: {Recipes.recipes.calories}  {recipe.recipe.calories}</Text>
            <Text style={styles.image}> Image </Text>
            </View>
         ) )}
        
            

         </View>
      </View>

   );
}

const styles = StyleSheet.create({
   mainHeader: {
      minHeight: 45,
      fontSize: 30,
      backgroundColor: 'green',
      color: '#fff',
      alignContent: 'center',
      textAlign: 'center',
   },
   searchArea: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 5,
      padding: 5,
      paddingHorizontal: 15,
      borderBottomWidth: 1,
   },
   searchBar: {
      flex: 3,
      fontSize: 20,
      paddingRight: 2,
      padding: 3,
      paddingEnd: 5,
   },
   searchButton: {
      flex: 2,
      fontSize: 18,
      backgroundColor: 'green',
      color: '#fff',
      alignItems: 'center',
      alignContent: 'center',
      padding: 5,
      borderRadius: 5,
   },
   resultsHeader: {
      fontSize: 15,
      margin: 10,

   },
   recipeContentContainer: {
      paddingVertical: 5,

   },
   recipeContent: {
      padding: 10,
     marginHorizontal: 30,
      alignItems: 'center',
      alignContent: 'center',
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 2,
   },
   title: {
fontSize: 22,
   },
   ingredients: {
      fontSize: 15,
   },
   carlories: {
      color: 'green',
      fontSize: 15,
   }
 
});