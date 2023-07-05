import { StyleSheet } from "react-native";
import { theme } from "../../../constants";

export const styles = StyleSheet.create({
    container:{        
        justifyContent: 'center'
    },
    message:{
        color: theme.colors.headerMessage,
        fontSize:13,
        fontWeight:"bold",
        fontStyle:"italic"
    }
});