import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles";

export default function Homepage({navigation}){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Homepage</Text>
            <View style={styles.button}>
                <Button style={styles.buttonText} title="Register" onPress={()=>navigation.navigate("Register")}
                color={"#1a1a1aff"}/>

            </View>
        </View>

    );
}