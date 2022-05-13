import React, { Component } from 'react'
import { View ,Text ,Button } from "react-native"; 
import { useDispatch, useSelector } from 'react-redux';

import { addition,subtraction } from './action';
const Counter = ()=>{    
    const data= useSelector((state)=>state.counter);
    const dispatch = useDispatch();
	return(
		<View>
			<Button title="add" onPress={()=>dispatch(addition())} /> 
			<Text>{data}</Text> 
			<Button title="dec" onPress={()=>dispatch(subtraction())}/> 
		</View>
	)
}

	
export default Counter;