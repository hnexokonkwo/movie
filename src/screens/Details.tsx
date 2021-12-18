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
  const movie = route.params;

const { fav, addToFav, removeFromFav } = useContext(FavContext);

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
          <UiButton onPress={() => removeFromFav(movie)} text="Remove from Favorite" />
        ) : (
          <UiButton onPress={() => addToFav(movie)} text="Add to Favorite" />
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
