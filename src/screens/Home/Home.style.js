import { StyleSheet } from 'react-native';
import colors from '../../resources/colors/colors';

export default StyleSheet.create({
    listContainer:{
        marginHorizontal:12, 
        flexGrow:1,
    },
    itemSeparator:{
        height:15,
    },
    list:{ 
        flex: 1 
    },
    footerContainer:{
        alignItems:'center',
    },
    emptyContainer:{
        flex:1,
        alignItems:'center', 
        justifyContent:'center', 
    },
    emptyInnerContainer:{
        backgroundColor:colors.emptyListBg, 
        paddingVertical:30, 
        paddingHorizontal:30, 
        borderRadius:8,
    },
    emptyListText:{
        color:colors.emptyListText, 
        textAlign:'center', 
        fontSize:15, 
        fontWeight:'400', 
        flexShrink:1, 
        marginBottom:3,
    },
    emptyListTextBold:{
        color:colors.emptyListText, 
        textAlign:'center', 
        fontSize:15, 
        fontWeight:'600', 
        flexShrink:1, 
    }
})