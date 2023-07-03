import React from "react";
import {styles} from './styles';
import { View } from "react-native";
import Logo from './logo';
import Title from './title';
import Subtitle from "./subtitle";
import Message from "./message";

const Header = ({title, subtitle, message, widthLogo, heightLogo, urlLogo}) => {
    return (
        <View style={styles.container}>
            <Logo ancho={widthLogo} alto={heightLogo} url={urlLogo}/>
            <View style={styles.titleContainer}>                
                <Title title={title}/>
                <Subtitle subtitle={subtitle}/>
                <Message msg={message}/>
            </View>
        </View>
    );
};

export default Header;