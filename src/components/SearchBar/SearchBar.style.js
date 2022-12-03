import { StyleSheet } from 'react-native';
import colors from '../../resources/colors/colors';

export default StyleSheet.create({
    container:{
        backgroundColor:colors.background,
        marginTop:10,
        marginBottom:20,
    },
    innerContainer:{
        alignItems:'center', 
        flexDirection:'row', 
        paddingVertical:10, 
        borderRadius:12, 
        paddingHorizontal:12, 
        backgroundColor:colors.searhBar, 
        marginHorizontal:8,
    },
    inputContainer:{
        flex:1, 
        marginHorizontal:5, 
        paddingHorizontal:5,
    },
    input:{
        padding:0,
        fontSize:16,
        color:colors.text
    },
    iconSearch:{
        color:colors.searchBarIcon,
        fontSize:24,
        paddingHorizontal:5,
    },
    icon:{
        color:colors.searchBarText,
        fontSize:22,
    },
    line:{
        height:25,
        backgroundColor:'black', 
        width:1, 
        marginHorizontal:10,
        backgroundColor:colors.searchBarLine,
    },

})