import { StyleSheet, Dimensions } from 'react-native';


const line = {
    width: Dimensions.get('window').width + 20, 
    height: 2, 
    backgroundColor: '#1c2e7d', 
    position: 'absolute', 
    left: -20, 
}

export default StyleSheet.create({
    container:{ 
        marginBottom: 20, 
        paddingBottom: 5, 
        paddingTop: 12, 
    },
    lineUp:{
        ...line,
        top:0,
    },
    lineDown:{
        ...line,
        bottom:0,
    },
    headerContainer:{
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText:{
        paddingHorizontal: 20,
        fontSize: 16,
        fontWeight: '600',
    },
    closeIcon:{ 
        color: '#fff', 
        fontSize: 19, 
        paddingLeft: 10, 
    },
    itemSeparator:{ 
        width: 15, 
    },
    listContainer:{
        flexGrow: 1, 
        paddingBottom: 12, 
        marginHorizontal: 20,
        paddingEnd:40,
    }
})