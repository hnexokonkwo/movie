import {StyleSheet} from 'react-native';
import {COLOR} from './utils/constants';

export const FontWeight = StyleSheet.create({
  w400: {
    fontWeight: '400',
  },
  w500: {
    fontWeight: '500',
  },
  w600: {
    fontWeight: '600',
  },
});

export const FlexDirections = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export const JustifyContent = StyleSheet.create({
  center: {
    justifyContent: 'center',
  },
  spaceEvenly: {
    justifyContent: 'space-evenly',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
});

export const AlignItems = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  flexEnd: {
    alignItems: 'flex-end',
  },
});

export const Component = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

export const TextColor = StyleSheet.create({
  light: {
    color: COLOR.light,
  },
});
