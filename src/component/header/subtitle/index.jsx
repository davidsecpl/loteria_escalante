import React from "react";
import { View, Text } from "react-native";
import {styles} from './styles';

const Subtitle = ({subtitle})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    );
};

export default Subtitle;