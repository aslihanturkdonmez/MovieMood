import { StyleSheet } from 'react-native';
import colors from '../../resources/colors/colors';

export default StyleSheet.create({
    container: ({safeAreaInsets}) => ({
        flexDirection:'row',
        paddingTop: Math.max(safeAreaInsets.top + 5, 10),
        marginBottom:10,
        justifyContent:'space-between',
        paddingHorizontal:20,
        alignItems:'center',
        paddingBottom:10,
        borderBottomWidth:1,
        borderColor:colors.headerBorder,
    }),
    header:{
        fontSize:20,
        fontWeight:'bold',
        color:colors.title,
    },
    icon:{
        width:20, 
        fontSize:20,
        color:colors.backIcon
    },
})