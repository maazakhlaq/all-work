import React from 'react';
import { View,Text, StyleSheet, TextInput,  } from 'react-native';
import Footer from './cont';

export default class User extends React.Component{  
   state = {
   name: "maz"   
  }
  
  render(){
   return(
       <View><Footer/></View>
		   
    );
   }
}
