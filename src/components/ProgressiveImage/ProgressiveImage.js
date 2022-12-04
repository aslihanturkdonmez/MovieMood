import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './ProgressiveImage.style';

const ProgressiveImage = ({ source, style, resizeMode }) => {
    const [loading, setLoading] = useState(true);

    const onLoadEnd = () => setLoading(false);

    return (
        <View style={[styles.container, style]}>
            {loading ? <ActivityIndicator size="small" color="white" /> : null}
            <FastImage
                source={source}
                style={[styles.image, style]}
                onLoadEnd={onLoadEnd}
                resizeMode={FastImage.resizeMode[resizeMode]}
            />
        </View>
    )
}

export default ProgressiveImage;