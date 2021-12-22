import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from 'react-native';
import Input from '../components/Input';
import {connect} from '../core/base';
import {Component, FlexDirections} from '../styles';
import {COLOR, CONSTANT} from '../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const Search = () => {
  const [result, setResult] = useState([]);
  const navigation = useNavigation();

  const search = async (query: string) => {
    const value = await AsyncStorage.getItem('@BlackList');

    try {
      const {data} = await connect.get('/search/movie', {
        params: {
          language: 'en-US',
          page: 1,
          include_adult: false,
          query,
        },
      });

      const removeFromSearch =
        value != null ? new Set(JSON.parse(value)) : new Set();
      const results = data.results.filter((movie: any) => {
        return !removeFromSearch.has(movie.id);
      });

      setResult(results);
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
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate('Details' as never, movie as never)
              }>
              <Image
                source={{
                  uri: `${CONSTANT.imgUrl}${movie.poster_path}`,
                }}
                style={[styles.imgSize]}
                resizeMode="cover"
              />
            </TouchableOpacity>
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
    width: width / 3,
    padding: 4,
  },
});
