import React from "react";
import { View, Text } from "react-native";
import {styles} from './styles';

const Message = ({msg})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.message}>{msg}</Text>
        </View>
    );
};

export default Message;