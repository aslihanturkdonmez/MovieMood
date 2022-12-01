import { View } from 'react-native';
import React from 'react';
import TextInput from '../TextInput';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './SearchBar.style';

const SearchBar = ({ onChangeText, style, value, inputPlaceHolder, onPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Icon
                    name={'movie-search-outline'}
                    size={22}
                    style={{color:'#a2a2a2'}}
                />
                <View style={styles.inputContainer}>
                    <TextInput
                        onChangeText={onChangeText}
                        value={value}
                        style={[styles.input, style]}
                        placeholder={inputPlaceHolder}
                        returnKeyType='search'
                        onSubmitEditing={onPress}
                        placeholderTextColor='#666'
                    />
                </View>
                <View style={styles.line} />
                <Icon 
                    name='magnify'
                    size={22}
                    onPress={onPress}
                />
            </View>
        </View>
    )
}

export default SearchBar;