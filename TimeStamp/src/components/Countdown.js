import React from "react";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

const minutestoMillis = (minutes) => minutes * 60 * 1000;
const formatTime = (time) => time < 10 ? `0${time}` : time;
export const Countdown = ({
    minutes=20,
    isPaused ,
}) => {
    const interval = React.useRef(null);
    const Countdown = () => {
        if (millis === 0) {
            alert("Done!");
            return;
        }
        setmillis((time) => {
            const timeLeft = time - 1000;
            if (timeLeft === 0) {
                alert("Done!");
            }
            return timeLeft;
        });
    }

    React.useEffect(() => {
        if (isPaused) {
            if (interval.current) clearInterval(interval.current);
            return;
        }
        interval.current = setInterval(Countdown, 1000);
        return () => clearInterval(interval.current);
    },[isPaused])
    const [millis, setmillis] = useState(minutestoMillis(minutes));
    
     

    const minute = Math.floor(millis / 1000 / 60) % 60;
    const seconds = Math.floor(millis / 1000) % 60;
        return(
            <View style={styles.container}>
               <Text style={styles.text}>{formatTime(minutes)}:{formatTime(seconds)}</Text>
            </View>
        )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        
        fontSize:30,
        width:300,
        borderWidth:2,
        borderStyle:'solid',
        borderRadius:10,
        borderStyle:'solid',
        fontWeight:'bold',
        textAlign:'center',
        backgroundColor:'#7AB2B2',
    }
});