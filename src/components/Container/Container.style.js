import { StyleSheet } from 'react-native';

export default ({safeAreaInsets}) => StyleSheet.create({
    container:{
        flex:1,
        paddingBottom:safeAreaInsets.bottom,
    }
})