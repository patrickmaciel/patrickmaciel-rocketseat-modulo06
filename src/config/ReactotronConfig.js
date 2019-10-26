import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  console.tron = tron;
  tron.clear();
}

/*
{
    host: '192.168.100.81',
    enabled: true,
    port: 9090,
  }
  */
