import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View
} from 'react-native';
import { CONSTANT } from '../utils/constants';
import { Headings } from './Text';

interface IMovieScrollView {
  heading: string;
  data: any; // This is due to the fact that i'm testing and can change my test api anytime
}

const {width} = Dimensions.get('window');

const MovieScrollView = ({heading, data}: IMovieScrollView) => {
  const navigation = useNavigation();

  return (
    <>
      <Headings text={heading} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((movie: any, index: number) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('Details' as never, movie as never)}>
            <View
              style={[styles.sectionWidth, {paddingLeft: index == 0 ? 10 : 0}]}>
              <Image
                source={{
                  uri: `${CONSTANT.imgUrl}${movie.poster_path}`,
                }}
                style={[styles.imgSize]}
                resizeMode="cover"
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default MovieScrollView;

const styles = StyleSheet.create({
  sectionWidth: {
    width: width / 3.1,
    paddingRight: 8,
  },
  padding: {
    paddingHorizontal: width * 0.05,
  },
  imgSize: {
    width: '100%',
    height: 180,
    borderRadius: 8,
  },
});
