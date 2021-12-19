import React, {useEffect, useState} from 'react';
import {Alert, Dimensions, Image, ScrollView} from 'react-native';
import MovieScrollView from '../components/MovieScrollView';
import {connect} from '../core/base';
import {CONSTANT} from '../utils/constants';
import {handleError} from '../utils/error-handler';

const {width} = Dimensions.get('window');

const Main = () => {
  // TODO: use the right data type and remove 'any'
  // This is due to the fact that i was changing API services and they all return different data
  const [recommended, setRecommended] = useState<any>([]);
  const [hero, setHero] = useState<any>();
  const [topRated, setTopRated] = useState<any>([]);
  const [popular, setPopular] = useState<any>([]);

  const getHero = async () => {
    try {
      const {data} = await connect.get('movie/580489');
      setHero(data);
    } catch (error) {
      const err = handleError(error);
      Alert.alert(err.message);
    }
  };

  const getRecommended = async () => {
    try {
      const {data} = await connect.get('movie/upcoming');
      setRecommended(data.results);
    } catch (error) {
      const err = handleError(error);
      Alert.alert(err.message);
    }
  };

  const getTopRated = async () => {
    try {
      const {data} = await connect.get('movie/top_rated');
      setTopRated(data.results);
    } catch (error) {
      const err = handleError(error);
      Alert.alert(err.message);
    }
  };

  const getPopular = async () => {
    try {
      const {data} = await connect.get('movie/popular');
      setPopular(data.results);
    } catch (error) {
      const err = handleError(error);
      Alert.alert(err.message);
    }
  };

  useEffect(() => {
    getHero();
    getRecommended();
    getTopRated();
    getPopular();
  }, []);

  return (
    <ScrollView>
      {hero && (
        <Image
          source={{uri: `${CONSTANT.imgUrl}${hero.backdrop_path}`}}
          style={{width: '100%', height: 350}}
          resizeMode="cover"
        />
      )}
      <MovieScrollView heading="Rcommended" data={recommended} />
      <MovieScrollView heading="Popular" data={popular} />
      <MovieScrollView heading="Top Rated" data={topRated} />
    </ScrollView>
  );
};

export default Main;
