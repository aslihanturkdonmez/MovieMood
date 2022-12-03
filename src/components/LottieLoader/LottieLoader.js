import { Dimensions } from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

const LottieLoader = () => {
    const { width } = Dimensions.get('window');

    return (
        <Lottie
            source={require('../../resources/assets/Loader.json')}
            autoPlay
            loop
            style={{ width: width - 150 }}
        />
    )
}

export default LottieLoader;