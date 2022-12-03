import { View } from 'react-native';
import React from 'react';
import TextInput from '../TextInput';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './SearchBar.style';
import colors from '../../resources/colors/colors';

const SearchBar = ({ onChangeText, style, value, inputPlaceHolder, onPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Icon
                    name={'movie-search-outline'}
                    style={styles.icon}
                />
                <View style={styles.inputContainer}>
                    <TextInput
                        onChangeText={onChangeText}
                        value={value}
                        style={[styles.input, style]}
                        placeholder={inputPlaceHolder}
                        returnKeyType='search'
                        onSubmitEditing={onPress}
                        placeholderTextColor={colors.searchBarText}
                    />
                </View>
                <View style={styles.line} />
                <Icon 
                    name='magnify'
                    onPress={onPress}
                    style={styles.iconSearch}
                />
            </View>
        </View>
    )
}

export default SearchBar;