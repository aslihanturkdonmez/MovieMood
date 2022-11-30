import { View } from 'react-native';
import React from 'react';
import styles from './MovieCard.style';
import Text from '../Text';

const MovieCard = ({movie}) => {
  return (
    <View style={{}}>
      <Text>{movie.Title}</Text>
    </View>
  )
}

export default MovieCard;