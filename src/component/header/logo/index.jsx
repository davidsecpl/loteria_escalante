import React from "react";
import { Image, View } from "react-native";
import {styles} from './styles';

const Logo = ({ancho, alto, url}) => {
    return (
        <View style={styles.container}>
            <Image style={[styles.icono,{width: ancho, height: alto}]} source={url}/>
        </View>
    );
};

export default Logo;