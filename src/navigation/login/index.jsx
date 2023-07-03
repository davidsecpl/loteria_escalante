import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, RecoveryPassword, RegisterUser } from '../../screens';

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen name="Auth" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="Recovery" component={RecoveryPassword} />
      <Stack.Screen name="Register" component={RegisterUser} />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
