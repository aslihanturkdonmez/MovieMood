import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: ({safeAreaInsets}) => ({
        flexDirection:'row',
        justifyContent:'center',
        paddingTop: Math.max(safeAreaInsets.top + 5, 10),
        marginBottom:10,
    }),
    header:{
        fontSize:20,
        fontWeight:'bold',
    }
})