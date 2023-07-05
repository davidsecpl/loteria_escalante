import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Account } from '../../../screens';

const Stack = createNativeStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="account">
      <Stack.Screen
        name="account"
        options={{
          headerShown: false
        }}
        component={Account}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
