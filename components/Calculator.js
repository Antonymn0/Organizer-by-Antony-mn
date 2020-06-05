import React, { useState } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
   TextInput,
   CheckBox, Button,
   TouchableOpacity, navigator,
} from 'react-native';
import { createNativeWrapper } from 'react-native-gesture-handler';



export default function Calculator({navigation}) {
   
   //globals
   
   
   // states
   const [results, setResults] = useState('20.2');
   const [inputCurrent, setinputCurrent] = useState('0');
   const [equation, setEquation] = useState(['', ...inputCurrent]);
   const [symbol, setSymbol] = useState('');
   const [prevInput, setprevInput] = useState('');
    

   // update results
   const updateResults = () => {
      var newResults = results
      newResults = '256396'
      setResults(newResults)
   }
   
   //build the equation string
   const currentInput = (input) => {
      var newEquation = equation 
      // do not append symbols
      if (input != '-' && input != '+' && input != '*' && input != '/') { 
            if (inputCurrent.length = 1 && inputCurrent.charAt(0) === '0' && inputCurrent.charAt(1) !== '.') {
             var newinputCurrent = inputCurrent
               newinputCurrent = ''
               newinputCurrent = newinputCurrent.concat(input)
               setEquation(equation.concat(input));
              setinputCurrent(newinputCurrent);     
            } else {
               setinputCurrent(inputCurrent.concat(input))
                setEquation(equation.concat(input));
         }
         
      }
     
   }
    // append zero only if it is not the first character
   const zero = (input) => {
            if ( inputCurrent.length != 1 || inputCurrent.charAt(0) !== '0' ) {
              setinputCurrent(inputCurrent.concat(input));
              setEquation(equation.concat(input));
            }     
   }
   
   const decimal = (dot) => {
      if (inputCurrent.indexOf(dot) == -1) {
			   setinputCurrent(inputCurrent.concat(dot))
			} 
   }
    //delete digits from the input
   const deleteItem = () => {
      var newEquation = equation.toString()
      newEquation = newEquation.substring(0, newEquation.length-1)
      setEquation(newEquation)
      var newinputCurrent = inputCurrent
      newinputCurrent = newinputCurrent.substring(0, newinputCurrent.length-1);
      setinputCurrent(newinputCurrent)
   }

   // clear input
   const clearInput = () => {
      setEquation('0')
      setResults('0')
      setinputCurrent('0')
      setprevInput('0')
   }
   
   // update symbol  onpress handler
   const operator = (sign) => {
      setSymbol(sign)
      var newEquation = equation.toString()
      //  append symbol only if it is not the last character in the string
      if (
        equation.toString().charAt(newEquation.length - 1) !== '+' &&
        equation.toString().charAt(newEquation.length - 1) !== '-' &&
         equation.toString().charAt(newEquation.length - 1) !== 'x' &&
         equation.toString().charAt(newEquation.length - 1) !== '/'
      ) {
        setEquation(equation.concat(sign));
      }
     
      if (inputCurrent !== '0') {
         setprevInput(inputCurrent)
      }
      setinputCurrent('0')
   }
   const equalSign = () => {
      var newresults
          // switch symbol to determine the operator
      switch (symbol) {
         case '':
            break;
         case '+':
             newresults = parseFloat(prevInput) + parseFloat(inputCurrent);
            break;
         case '-':
             newresults = parseFloat(prevInput) - parseFloat(inputCurrent);
            break;
         case 'x':
             newresults =  parseFloat(prevInput) * parseFloat(inputCurrent);
            break;
         case '/':
             newresults =  parseFloat(prevInput) / parseFloat(inputCurrent);
            break;
            } 
      setResults(newresults);
      setprevInput(newresults)
      setinputCurrent('0')
      
   }

   return (
     <View style={styles.parentContainer}>
         <View style={styles.resultsContainer}>
         <Text style={styles.inputField}>  {equation} </Text>
         <Text style={styles.resultsField}> = {results} </Text>
       </View>
       <View>
         <Text> Inputcurrent = {inputCurrent}</Text>
         <Text> prevInput = {prevInput}</Text>
       </View>
       <View style={styles.buttonsContainer}>
         <View style={styles.buttonColumns}>
           <TouchableOpacity
             onPress={() => {
               clearInput();
             }}>
             <Text style={styles.buttons}> C </Text>
           </TouchableOpacity>
           <TouchableOpacity
             onPress={() => {
               currentInput('7');
             }}>
             <Text style={styles.buttons}> 7 </Text>
           </TouchableOpacity>
           <TouchableOpacity
             onPress={() => {
               currentInput('4');
             }}>
             <Text style={styles.buttons}> 4 </Text>
           </TouchableOpacity>
           <TouchableOpacity
             onPress={() => {
               currentInput('1');
             }}>
             <Text style={styles.buttons}> 1 </Text>
           </TouchableOpacity>
           <TouchableOpacity  onPress={() => {  zero('0'); }}>
             <Text style={styles.buttons}> 0 </Text>
           </TouchableOpacity>
         </View>

         <View style={styles.buttonColumns}>
           <TouchableOpacity>
             <Text style={styles.buttons}> -/+ </Text>
           </TouchableOpacity>
           <TouchableOpacity
             onPress={() => {
               currentInput('8');
             }}>
             <Text style={styles.buttons}> 8 </Text>
           </TouchableOpacity>
           <TouchableOpacity
             onPress={() => {
               currentInput('5');
             }}>
             <Text style={styles.buttons}> 5 </Text>
           </TouchableOpacity>
           <TouchableOpacity
             onPress={() => {
               currentInput('2');
             }}>
             <Text style={styles.buttons}> 2 </Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => { zero('00');  }}>
             <Text style={styles.buttons}> 00 </Text>
           </TouchableOpacity>
         </View>

         <View style={styles.buttonColumns}>
           <TouchableOpacity
             onPress={() => {
               deleteItem();
             }}>
             <Text style={styles.buttons}>
               
               <Icon name="remove" size={25} />
             </Text>
           </TouchableOpacity>
           <TouchableOpacity
             onPress={() => {
               currentInput('9');
             }}>
             <Text style={styles.buttons}> 9 </Text>
           </TouchableOpacity>
           <TouchableOpacity
             onPress={() => {
               currentInput('6');
             }}>
             <Text style={styles.buttons}> 6 </Text>
           </TouchableOpacity>
           <TouchableOpacity
             onPress={() => {
               currentInput('3');
             }}>
             <Text style={styles.buttons}> 3 </Text>
           </TouchableOpacity>
           <TouchableOpacity
             onPress={() => {
               decimal('.');
             }}>
             <Text style={styles.buttons}> . </Text>
           </TouchableOpacity>
         </View>
         <View style={styles.buttonColumns}>
           <TouchableOpacity
             onPress={() => {
               currentInput('+');
               operator('+');
             }}>
             <Text style={styles.buttons}> + </Text>
           </TouchableOpacity>
           <TouchableOpacity
             onPress={() => {
               currentInput('-');
               operator('-');
             }}>
             <Text style={styles.buttons}> - </Text>
           </TouchableOpacity>
           <TouchableOpacity
             onPress={() => {
               currentInput('x');
               operator('x');
             }}>
             <Text style={styles.buttons}> x </Text>
           </TouchableOpacity>
           <TouchableOpacity
             onPress={() => {
               currentInput('/');
               operator('/');
             }}>
             <Text style={styles.buttons}> / </Text>
           </TouchableOpacity>
           <TouchableOpacity
             onPress={() => {
               equalSign();
             }}>
             <Text style={styles.buttons}> = </Text>
           </TouchableOpacity>
         </View>
       </View>
     </View>
   );
}



const styles = StyleSheet.create({
  parentContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10,
    backgroundColor: 'black',
  },
  resultsContainer: {
    marginTop: 30,
    height: 200,
    paddingBottom: 0,
    backgroundColor: 'black',
  },
  resultsField: {
    padding: 10,
    height: 70,
    textAlign: 'right',
    fontSize: 35,
    color: '#fff',
  },
  inputField: {
    height: 100,
    padding: 5,
    textAlign: 'right',
    fontSize: 25,
    color:'#ccca',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    marginTop: 1,
  },
  buttonColumns: {
    flex: 1,
    margin: 1,
  },
  buttons: {
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 2,
    borderRadius: 5,
    padding: 15,
    backgroundColor: 'teal',
    fontSize: 25,
    color: '#fff',
  },
});
