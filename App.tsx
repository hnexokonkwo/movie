import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Navigator from './src/components/Navigator';
import {COLOR} from './src/utils/constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {FavProviderContainer} from './src/context/Fav';
import { useNetInfo } from '@react-native-community/netinfo';
import { StyleSheet, Text, View } from 'react-native';
import Spacer from './src/components/Spacer';


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

  const netInfo = useNetInfo();

  return (
    <NavigationContainer theme={navTheme}>
      <FavProviderContainer>
      {netInfo && !netInfo.isConnected ? (
        <View style={styles.MainContainer}>
          <Text style={{ fontSize: 24, textAlign: 'center', marginBottom: 20 }}>
            Can't connect to internet. Please check your network settings!
          </Text>
          <Spacer height={50} />
        </View>
      ) : (
        <Navigator />
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

