import React from 'react';
import { useState } from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import { Focus } from './src/functions/focus';
import {fontSizes, paddingSizes} from './src/utilities/sizes';
import { Timer } from './src/functions/timer/Timer';
const mains = require('./assets/target.png')
export default function  App(){
 
  const [focus, setfocus] = useState("gardening")

  return (
    <View style={styles.container}>
    <Image  style={styles.main} source={mains}/>
    <Text style={styles.heading}>Bhai Pura Focus Mode on Hai !</Text>
    <TextInput style={styles.likho} placeholder='Kispe focus karna hai ?.....' placeholderTextColor={"#000000"}/>

      {focus ? <Timer focus={focus}/> : <Focus addSubject={setfocus}/>}
      <Text>{focus}</Text>
    </View>
  
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#B3C8CF',
    
  },
  main:{
     width:180,
     height:180,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:120,
    marginTop:100,
  }
  ,
  heading:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:10
  },
  likho:{
    fontSize:20,
    textAlign:'left',
    paddingTop:10,
    borderRadius:10,
    borderColor:'black',
    height: 60,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderBottomWidth:2,
    borderBottomColor:'black',
    paddingRight:20
  }
});