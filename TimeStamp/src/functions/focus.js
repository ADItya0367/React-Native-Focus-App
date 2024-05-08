import React, { useState } from 'react';
import {Text,View,StyleSheet, TextInput} from 'react-native';
import {RoundedButton} from '.././components/RoundedButton';

export const  Focus=({addSubject})=> {
 const [tmpItem, settmpItem] = useState(null)
  return (
   <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}></Text>
      <View style={styles.inputContainer}>
        <TextInput style={{flex:1}}
        onSubmitEditing={
          ({nativeEvent})=>{
            settmpItem(nativeEvent.text);
        }
      }
        />
        <RoundedButton size={30} title="+" onPress={()=>{
          addSubject(tmpItem);
        
        }}/>
      </View>
    </View>
   </View> 
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#B3C8CF',
  },
  titleContainer:{
    flex:0.5,
    padding:16,
    justifyContent:'center'
  },
  title:{
    color:'black',
    fontWeight:'bold',
    fontSize:16,
    alignItems:'center',
    justifyContent:'center',
    marginTop:60,
    paddingEnd:60
  },
  inputContainer:{
    paddingTop:20,
    flexDirection:'row',
    alignItems:'center'
  }
});