import React from "react";
import {styles} from './styles';
import { Button, View, Text } from "react-native";

const Menu = ({lista, color, label, widthLabel})=>{
    
    return (
        <View style={styles.container}>
            <Text style={[styles.label, {width: widthLabel }]}>{label}</Text>
            {
                lista.map((item) => {
                    return <Button key={item.title} title={item.title} onPress={item.handler} disabled={item.disabled} color={color}/>;
                })
            }
        </View>
        
    );
};

export default Menu;