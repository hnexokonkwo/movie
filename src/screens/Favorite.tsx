import React, { useContext } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import UiButton from '../components/Button';
import Spacer from '../components/Spacer';
import { Headings } from '../components/Text';
import FavContext from '../context/Fav';
import {
    AlignItems,
    Component,
    FlexDirections,
    JustifyContent,
    TextColor
} from '../styles';
import { CONSTANT } from '../utils/constants';

const Favorite = () => {
const { fav, removeFromFav } = useContext(FavContext);

  return (
    <ScrollView>
      {fav.map((movie: any, index: number) => (
        <View key={index}>
          <Image
            source={{uri: `${CONSTANT.imgUrl}${movie?.backdrop_path}`}}
            style={{width: '100%', height: 200}}
            resizeMode="cover"
          />

          <View style={Component.Container}>
            <View
              style={[
                FlexDirections.row,
                JustifyContent.spaceBetween,
                AlignItems.flexEnd,
              ]}>
              <Headings text={movie?.title} />
              <Text style={TextColor.light}>Rating: {movie?.vote_average}</Text>
            </View>
            <Spacer height={10} />
            <UiButton
              onPress={() => removeFromFav(movie)}
              text="Remove from Favorite"
            />
          </View>
          <Spacer height={30} />
        </View>
      ))}
    </ScrollView>
  );
};

export default Favorite;
