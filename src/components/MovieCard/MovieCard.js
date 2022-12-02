import { View } from 'react-native';
import React from 'react';
import styles from './MovieCard.style';
import Text from '../Text';
import ProgressiveImage from '../ProgressiveImage';

const MovieCard = ({ movie }) => {

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ProgressiveImage
          source={{ uri: movie.Poster }}
          style={styles.img}
          resizeMode={'cover'}
          containerStyle={styles.img}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{movie.Title}</Text>
          <View>
            <Text style={styles.year}>Year: {movie.Year}</Text>
            <Text style={styles.type}>Type: {movie.Type}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default MovieCard;