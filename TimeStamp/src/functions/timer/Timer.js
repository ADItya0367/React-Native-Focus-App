import React from "react";
import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Countdown } from "../../components/Countdown";
import { RoundedButton } from "../../components/RoundedButton";
import { paddingSizes } from "../../utilities/sizes";


export const Timer = ({focus}) => {
  const [isStarted, setisStarted] = useState(false);
    return(
        <View style={styles.container}>
            
            <View style={styles.Countdown}>
            <Countdown isPaused={
                !isStarted
            
            }/>
            </View>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            
            }}>
                <Text style={styles.title}> Focusing  : </Text>
            <Text style={styles.task}> {focus}</Text>
        </View>
        <Button
  onPress={() => setisStarted(true)}
  title="Start Now !!"
  color=
    "#7AB2B2"
/>
<View style={{flex: 0.040, height: 1, backgroundColor: '#B3C8CF'}} />
<Button
  onPress={() => setisStarted(false)}
  title="Stop !!"
  color=
    "#7AB2B2"
/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B3C8CF',
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    task: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
       
    }
    ,
    Countdown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    }

});