import NetInfo from '@react-native-community/netinfo';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Navigator from './src/components/Navigator';
import Spacer from './src/components/Spacer';
import {FavProviderContainer} from './src/context/Fav';
import {COLOR} from './src/utils/constants';

AntDesign.loadFont().then();
Ionicons.loadFont().then();
Feather.loadFont().then();

const App = () => {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: COLOR.black,
      primary: COLOR.light,
      card: COLOR.dark,
      text: COLOR.light,
      border: COLOR.dark,
      notification: COLOR.light,
    },
  };
  const [isOffline, setOfflineStatus] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log(state.isConnected);
      console.log(state.isInternetReachable);
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
    });
    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer theme={navTheme}>
      <FavProviderContainer>
        {isOffline ? (
          <View style={styles.MainContainer}>
            <Text style={{fontSize: 24, textAlign: 'center', marginBottom: 20}}>
              Can't connect to internet. Please check your network settings!
            </Text>
            <Spacer height={50} />
          </View>
        ) : (
          <>
            <StatusBar
              animated={true}
              backgroundColor="transparent"
              translucent={true}
            />

            <Navigator />
          </>
        )}
      </FavProviderContainer>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
