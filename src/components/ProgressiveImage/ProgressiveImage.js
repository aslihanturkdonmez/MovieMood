import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './ProgressiveImage.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { ResponseValueStatus } from '../../resources/enums';

const ProgressiveImage = ({ source, style, resizeMode, iconStyle }) => {
    const [loading, setLoading] = useState(true);

    const onLoadEnd = () => setLoading(false);

    return (
        <View style={[styles.container, style]}>
            {loading &&  source && source.uri != ResponseValueStatus.none ? 
                <ActivityIndicator size="small" color="white" /> 
                :
                <Icon 
                    name='image-off'
                    style={[styles.icon, iconStyle]}
                />
            }
            {
                source && source.uri != ResponseValueStatus.none ?
                <FastImage
                    source={source}
                    style={[styles.image, style]}
                    onLoadEnd={onLoadEnd}
                    resizeMode={FastImage.resizeMode[resizeMode]}
                />
                : null
            }
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