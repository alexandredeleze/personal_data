import {scaledSize} from "../tools/sizeFont";
import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
    },
    content: {
        flex: 9,
        justifyContent: 'flex-start',
    },
    title:{
        marginTop: 10,
        marginBottom:20,
        textAlign:'center',
        fontWeight:'bold',
        fontSize: scaledSize(20),
    },
    standard_text:{
        marginTop: 10,
        marginLeft:10,
        marginRight:10,
        fontSize: scaledSize(15),
        textAlign: 'left',
    },
    checkbox:{
        marginTop: 10,
        marginLeft:10,
        marginRight:10,
        flexBasis:scaledSize(20),
    },
    submit:{
        height: 40,
        width:160,
        borderRadius:10,
        marginTop :20,
        marginBottom: 20,
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#8D8C8C',
        fontWeight: 'bold',
        flexDirection: 'row',
    },
    footer_button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        flexDirection: 'row',
    },
    text_button: {
        fontWeight: 'bold',
        fontSize: scaledSize(15),
    },


});

export {styles}