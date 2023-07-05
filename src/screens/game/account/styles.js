import { StyleSheet } from 'react-native';
import { theme } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 35,
  },
  title: {
    color: theme.colors.headerMessage,
    fontWeight: 'bold',
    marginVertical: 15,
    fontSize: 18,
  },
  subtitle: {
    fontWeight: '400',
    color: '#000',
    marginBottom: 10,
  },
  message: {
    color: theme.colors.headerMessage,
    marginTop: 5,
    marginBottom: 15,
    paddingLeft: 5,
  },
  input: {
    paddingLeft: 5,
    borderBottomWidth: 0.5,
    marginVertical: 10,
    width: '80%',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: theme.colors.buttonGame,
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 120,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  icon: {
    marginRight: 5,
  },
});
