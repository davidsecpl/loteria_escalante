import { StyleSheet } from "react-native";
import {theme} from '../../constants';

export const styles = StyleSheet.create({
    cartilla:{
        borderColor:theme.borderBottons.cartilla,
        borderWidth:0.5,
        borderRadius:8,
        marginTop: 5,
        paddingVertical:3,
        alignItems:"center",
        justifyContent: "center"
      }
});