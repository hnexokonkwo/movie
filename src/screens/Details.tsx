import React, {useContext, useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import UiButton from '../components/Button';
import Spacer from '../components/Spacer';
import {Headings} from '../components/Text';
import {
  AlignItems,
  Component,
  FlexDirections,
  JustifyContent,
  TextColor,
} from '../styles';
import {CONSTANT} from '../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FavContext from '../context/Fav';

const Details = ({route}: any) => {
  const [blackList, setblackList] = useState<number[]>([]);
  const movie = route.params;


  const {fav, addToFav, removeFromFav} = useContext(FavContext);

  const getBlackList = async () => {
    const value = await AsyncStorage.getItem('@BlackList');
    if (value !== null) {
      setblackList(JSON.parse(value))
    }
  };

  const removeFromBlackList = async (id: number) => {
    const list = blackList.filter(blocked => blocked !== id);
    console.log(list);
    setblackList(list);
    await AsyncStorage.setItem('@BlackList', JSON.stringify(list));
  };

  const addToBlackList = async (id: number) => {
    const list = [...blackList, id];
    setblackList(list);
    await AsyncStorage.setItem('@BlackList', JSON.stringify(list));
  };

  useEffect(() => {
    getBlackList();
  }, []);

  return (
    <ScrollView>
      <Image
        source={{uri: `${CONSTANT.imgUrl}${movie.backdrop_path}`}}
        style={{width: '100%', height: 350}}
        resizeMode="cover"
      />
      <View style={Component.Container}>
        <View
          style={[
            FlexDirections.row,
            JustifyContent.spaceBetween,
            AlignItems.flexEnd,
          ]}>
          <Headings text={movie.title} />
          <Text style={TextColor.light}>Rating: {movie.vote_average}</Text>
        </View>
        <Spacer height={10} />
        {fav.includes(movie) ? (
          <UiButton
            onPress={() => removeFromFav(movie)}
            text="Remove from Favorite"
          />
        ) : (
          <UiButton onPress={() => addToFav(movie)} text="Add to Favorite" />
        )}
        <Spacer height={10} />
        {blackList.includes(movie.id) ? (
          <UiButton onPress={() => removeFromBlackList(movie.id)} text="Remove from search blacklist" />
        ) : (
          <UiButton onPress={() => addToBlackList(movie.id)} text="Add to search blacklist" />
        )}
        <Spacer height={10} />
        <View>
          <Text style={TextColor.light}>{movie.overview}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Details;
