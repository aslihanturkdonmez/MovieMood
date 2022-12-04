import { StyleSheet } from 'react-native';
import colors from '../../resources/colors/colors';

export default StyleSheet.create({
    container:{
        
    },
    imgContainer:{ 
        flex: 1.5, 
        alignItems: 'center', 
    },
    img: ({width, height}) => ({
        width:width-80,
        height:height / 2,  
        borderRadius:12, 
    }),
    imgIcon:{
        fontSize:45,
    },
    detailContainer:{
        paddingHorizontal:20, 
        marginTop:-10,
        marginTop:10,
        paddingTop:10,
        backgroundColor:colors.background,
        borderRadius:20,
        borderColor:colors.infoBox,
        borderTopWidth:1,
        borderEndWidth:1,
        borderStartWidth:1,

    },
    type:{
        fontSize:13, 
        fontWeight:'bold',
        color:colors.movieDetailType,
        marginBottom:8,
    },
    title:{
        fontWeight:'bold',
        fontSize:22,
    },
    descContainer:{
        marginVertical: 12,
    },
    desc:{
        color:colors.movieDetailDesc,

    },
    infoText:{
        color:colors.movieDetailWriter,
        fontSize:13,
        flex:1,
    },
    infoIcon:{
        color:colors.movieDetailWriter,
        fontSize:15,
        marginRight:5,
    },
    infoIconContainer:{ 
        marginTop: 12, 
    },
    infoIconInnerContainer:{
        flexDirection:'row', 
        alignItems:'flex-start',
        marginBottom:6,
    },
    genre:{
        fontSize:15,
        color:colors.movieDetailType,
        marginTop:1,
    },
    readMore:{
        marginTop:3,
        color:colors.movieDetailDesc,
    },
    imgModalBack:{
        backgroundColor:colors.transparentGray,
    },
    scrollView:{
        justifyContent: 'flex-start', 
        flexGrow: 1, 
        justifyContent: 'space-between',
    },
    infoBoxContainer:{ 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        marginBottom: 12, 
    },
    collapseContainer:{ 
        alignItems: 'flex-start', marginTop: 20, 
    },
    collapseInnerContainer:{ 
        paddingHorizontal: 22, 
        paddingVertical: 10, 
        backgroundColor: colors.collapseInnerContainer, 
        borderRadius:8, 
    },
    errorContainer:{
        flex:1, 
        alignItems:'center', 
        justifyContent:'center', 
    },
    errorText:{
        paddingVertical:20, 
        paddingHorizontal:30, 
        backgroundColor:colors.errorContainer, 
        color:colors.errorText,
        fontWeight:'bold', 
        textAlign:'center',
    }
})