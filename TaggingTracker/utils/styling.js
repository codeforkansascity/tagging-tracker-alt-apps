import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

// https://stackoverflow.com/a/35074379
export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const globalStyles = {
  flexRow: {
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
};