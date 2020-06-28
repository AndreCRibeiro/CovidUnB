import Reactotron from 'reactotron-react-native';
import { AsyncStorage } from 'react-native';

if (__DEV__) {
  const tron = Reactotron.configure('192.168.149.102')
    .setAsyncStorageHandler(AsyncStorage)
    .useReactNative()
    .connect();

  // eslint-disable-next-line no-console
  console.tron = tron;

  tron.clear();
}
