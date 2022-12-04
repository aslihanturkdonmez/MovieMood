import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './ProgressiveImage.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

const ProgressiveImage = ({ source, style, resizeMode, iconStyle }) => {
    const [loading, setLoading] = useState(true);

    const onLoadEnd = () => setLoading(false);

    return (
        <View style={[styles.container, style]}>
            {loading ? 
                <ActivityIndicator size="small" color="white" /> 
                :
                <Icon 
                    name='image-off'
                    style={[styles.icon, iconStyle]}
                />
            }
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

ProgressiveImage.propTypes = {
    source: PropTypes.any.isRequired,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    resizeMode: PropTypes.string,
    iconStyle:PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

ProgressiveImage.defaultProps = {
    style: {},
    resizeMode:'cover',
    iconStyle:{},
};