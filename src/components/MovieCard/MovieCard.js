import { View, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import styles from './MovieCard.style';
import Text from '../Text';
import ProgressiveImage from '../ProgressiveImage';

const MovieCard = ({ movie, onPressMovie }) => {

  return (
    <TouchableWithoutFeedback style={styles.container} onPress={() =>onPressMovie(movie.imdbID, movie.Title)}>
      <View style={styles.innerContainer}>
        <ProgressiveImage
          source={{ uri: movie.Poster }}
          style={styles.img}
          resizeMode={'cover'}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{movie.Title}</Text>
          <View>
            <Text style={styles.year}>Year: {movie.Year}</Text>
            <Text style={styles.type}>Type: {movie.Type}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default MovieCard;