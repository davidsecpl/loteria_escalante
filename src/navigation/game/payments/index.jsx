import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Payments } from '../../../screens';

const Stack = createNativeStackNavigator();

const PaymentsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Payment">
      <Stack.Screen
        name="Payment"
        options={{
          headerShown: false,
        }}
        component={Payments}
      />
    </Stack.Navigator>
  );
};

export default PaymentsNavigator;
