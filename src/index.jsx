import { Provider } from 'react-redux';
import Navigation from './navigation';
import store from './store/index';
import { init } from './db';

init()
  .then(() => {
    console.log('Initialized database');
  })
  .catch((err) => {
    console.log('Initialized database failed');
    console.log(err);
  });

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
