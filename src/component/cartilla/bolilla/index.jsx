import React from "react";
import { TouchableOpacity, Text } from "react-native";
import {styles} from './styles';

const Bolilla = ({item, onSelectItem, size, colorfondo, textcolor, widthBolilla})=>{
    return (
        <TouchableOpacity onPress={()=>{onSelectItem(item)}} style={[styles.container, {backgroundColor: colorfondo, width: widthBolilla}]}>
            <Text style={[styles.label, {fontSize: size, color: textcolor,}]}>{item.value}</Text>
        </TouchableOpacity>
    );
};

export default Bolilla;