import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: ({safeAreaInsets}) => ({
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:safeAreaInsets.top,
        marginBottom:10,
    }),
    header:{
        fontSize:20,
        fontWeight:'bold',
    }
})