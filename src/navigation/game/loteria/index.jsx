import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Loteria, FrequentQuestions, PayTable} from '../../../screens';

const Stack = createNativeStackNavigator();

const LoteriaNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="loteria" screenOptions={{headerShown: false}}>
            <Stack.Screen name="loteria" component={Loteria}/>
            <Stack.Screen name="FrequentQuestions" component={FrequentQuestions}/>
        </Stack.Navigator>
    );
};

export default LoteriaNavigator;