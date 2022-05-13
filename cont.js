import React from 'react';
import { View,Text, StyleSheet, TextInput,  } from 'react-native';
import { mycontext } from '../App';
export default class Footer extends React.Component{
  
render(){
   return(
       
       <mycontext.Consumer >
    <View >
    { data=> <Text> {data} maz </Text>}
      
     </View>
     </mycontext.Consumer>
     
    );
   }
}
 
 
const styles = StyleSheet.create({
 container: {
  flex: 1,
  flexDirection:'column',
 },
 view: {
  flex: 1,
  width: '100%',
  bottom: 20,
  position: 'absolute',
  flexDirection: 'row',
  backgroundColor: 'black'
 },

});

import React from 'react';
import { View,Text, StyleSheet, TextInput,  } from 'react-native';
export const mycontext= React.createContext();
 import User from './context/co';
export default class App extends React.Component{  
   state = {
   name: 'black'   
  }
  
  render(){
   return(
       <mycontext.Provider value={this.state.name}>
		   <User/>
         </mycontext.Provider>
    );
   }
}
