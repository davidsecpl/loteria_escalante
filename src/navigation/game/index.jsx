import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import LoteriaNavigator from './loteria';
import PaymentsNavigator from './payments';
import AccountNavigator from './account';

const BottomTab = createBottomTabNavigator();

const GameNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="LoteriaTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: '#E8D33F',
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarIconStyle: { fontSize: 22 },
      }}>
      <BottomTab.Screen
        name="LoteriaTab"
        component={LoteriaNavigator}
        options={{
          tabBarLabel: 'Loteria',
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name={focused ? 'apps' : 'apps-outline'} size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="PaymentsTab"
        component={PaymentsNavigator}
        options={{
          tabBarLabel: 'Saldos',
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name={focused ? 'wallet' : 'wallet-outline'} size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="AccountTab"
        component={AccountNavigator}
        options={{
          tabBarLabel: 'Cuenta',
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default GameNavigator;
