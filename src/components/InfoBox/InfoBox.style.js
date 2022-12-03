import { StyleSheet } from 'react-native';
import colors from '../../resources/colors/colors';

export default StyleSheet.create({
    container:{
        alignItems:'center',
        paddingHorizontal:4,
        paddingVertical:8,
        borderRadius:8,
        backgroundColor:colors.infoBox,
        justifyContent:'center',
        flex:1,
        marginHorizontal:3,
        
    },
    text:{
        textAlign:'center'
    }
})