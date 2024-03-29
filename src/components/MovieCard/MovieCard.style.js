import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{

    },
    innerContainer:{
        flexDirection:'row',
        backgroundColor:'rgba(34,44,80,0.5)',
        borderRadius:8,
        marginHorizontal:10, 
        borderWidth:1,
        borderColor:'rgba(34,44,80,1)'
    },
    img:{
        width:85, 
        height:115, 
        resizeMode:'cover', 
        borderRadius:8,
    },
    infoContainer:{
        flex:1, 
        paddingBottom:5,
        justifyContent:'space-around',
    },
    title:{
        fontWeight:'bold', 
        paddingHorizontal:12, 
        fontSize:17, 
        marginVertical:5,
    },
    year:{ 
        paddingHorizontal:12, 
        fontSize:14, 
        marginTop:5,
    },
    type:{
        paddingHorizontal:12, 
        fontSize:14, 
        marginTop:5,
    }
});