import React, {createContext, FC, ReactChild, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initState = {
  fav: [] as any,
  addToFav: (movie: any) => {},
  removeFromFav: (movie: any) => {},
};

const FavContext = createContext(initState);
export const FavProvider = FavContext.Provider;

type Props = {
  children?: ReactChild | ReactChild[];
};

export const FavProviderContainer: FC<Props> = ({children}) => {
  const [fav, setFav] = useState<any[]>(initState.fav);

  const getFav = async () => {
    const value = await AsyncStorage.getItem('@Fav');
    if (value !== null) {
      setFav(JSON.parse(value));
    }
  };

  const addToFav = async (movie: any) => {
    const addMovie = [...fav, movie];
    setFav(addMovie);
    await AsyncStorage.setItem('@Fav', JSON.stringify(addMovie));
  };

  const removeFromFav = async (movie: any) => {
    const RemoveMovie = fav.filter((item: any) => item !== movie);
    setFav(RemoveMovie);
    await AsyncStorage.setItem('@Fav', JSON.stringify(RemoveMovie));
  };

  useEffect(() => {
    getFav()
  }, []);

  return <FavProvider value={{fav, addToFav, removeFromFav}}>{children}</FavProvider>;
};

export default FavContext;
