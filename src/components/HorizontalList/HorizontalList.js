import { View, FlatList } from 'react-native';
import React from 'react';
import Text from '../Text';
import styles from './HorizontalList.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

const HorizontalList = ({
    list,
    renderItem,
    header,
    onPressClose,
    lineUpStyle,
    lineDownStyle,
    headerContainerStyle,
    headerTextStyle,
    closeIconStyle,
    containerStyle,
    listContainerStyle
}) => {

    const renderItemSeparator = () => <View style={styles.itemSeparator} />

    const Header = () => {
        return (
            <View style={[styles.headerContainer, headerContainerStyle]}>
                <Text style={[styles.headerText, headerTextStyle]}>{header}</Text>
                <Icon
                    name='close'
                    style={[styles.closeIcon, closeIconStyle]}
                    onPress={onPressClose}
                />
            </View>
        )
    }

    return (
            <View style={[styles.container, containerStyle]}>
                <View style={[styles.lineUp, lineUpStyle]} />
                <Header />
                <FlatList
                    data={list}
                    renderItem={renderItem}
                    horizontal={true}
                    ItemSeparatorComponent={renderItemSeparator}
                    contentContainerStyle={[styles.listContainer, listContainerStyle]}
                    showsHorizontalScrollIndicator={false}
                />
                <View style={[styles.lineDown, lineDownStyle]} />
            </View>
    )
}

export default HorizontalList;

HorizontalList.propTypes = {
    list: PropTypes.array,
    renderItem: PropTypes.func,
    header: PropTypes.string,
    onPressClose: PropTypes.func,
    lineUpStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    lineDownStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    headerContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    headerTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    closeIconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    listContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

HorizontalList.defaultProps = {
    list: [],
    renderItem: () => {},
    header: '',
    onPressClose: () => {},
    lineUpStyle: {},
    lineDownStyle: {},
    headerContainerStyle: {},
    headerTextStyle: {},
    closeIconStyle: {},
    containerStyle: {},
    listContainerStyle: {},
};

