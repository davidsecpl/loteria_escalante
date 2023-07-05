import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import LoginNavigator from './login';
import GameNavigator from './game';

const Navigation = () => {
  const userId = useSelector((state) => state.auth.userId);
  return (
    <NavigationContainer>{userId ? <GameNavigator /> : <LoginNavigator />}</NavigationContainer>
  );
};

export default Navigation;
