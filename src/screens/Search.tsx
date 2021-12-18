import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import Input from '../components/Input';
import {connect} from '../core/base';
import {Component, FlexDirections} from '../styles';
import {COLOR, CONSTANT} from '../utils/constants';

const {width} = Dimensions.get('window');

const Search = () => {
  const [result, setResult] = useState([]);

  const search = async (query: string) => {
    try {
      const {data} = await connect.get('/search/movie', {
        params: {
          language: 'en-US',
          page: 1,
          include_adult: false,
          query,
        },
      });
      setResult(data.results);
    } catch (error) {}
  };

  const onChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    const value = e.nativeEvent.text;
    search(value);
  };

  return (
    <ScrollView>
      <Input
        placeholder="Search Movies"
        placeholderTextColor={COLOR.dark}
        onChange={onChange}
        suffix="search"
      />
      <View style={Component.Container}></View>

      <View style={FlexDirections.row}>
        {result.map((movie: any, index: number) => (
          <View key={index} style={styles.column}>
            <Image
              source={{
                uri: `${CONSTANT.imgUrl}${movie.poster_path}`,
              }}
              style={[styles.imgSize]}
              resizeMode="cover"
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  imgSize: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    
  },
  column: {
    width: (width / 3),
    padding: 4
  },
});
