import React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';


export const  RoundedButton=({ style={}, textStyle={}, size=125, ...props})=>{

  return (
   <TouchableOpacity style={[styles(size).radius,style]}>
    <Text style={[styles(size).text,textStyle]}>{props.title}</Text>
   </TouchableOpacity>
  )
}
const styles=(size)=>StyleSheet.create({
    radius:{
        width:50,
        height:50,
        borderRadius:125/2,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'black',
        borderWidth:2,
        backgroundColor:'#7AB2B2',
        marginBottom:355,
        marginEnd:10,
    
    }
    ,
    text:{
        fontSize:48,
        textAlign:'center',
        justifyContent:'center',
        color:'black'
    }
});