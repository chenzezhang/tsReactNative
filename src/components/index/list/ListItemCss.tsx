
import { StyleSheet, PixelRatio } from 'react-native';

export default StyleSheet.create({

    listView: {
        flex: 1,
    },
    listViewCenter: {
        paddingLeft: 17,
        paddingRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        height: 85,
    },
    pubView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    imaStyle: {
        
    },
    listItemLeft: {
        justifyContent: 'center',
        width: 100,
        height: 65
    },
    listItemCenter: {
        width: 70,
        height: 24,
        lineHeight: 24,
        fontSize: 17,
        color: '#333',
        alignItems: 'baseline'
    },
    listItemRight: {
        width: 90,
        height: 45,
        alignSelf: 'flex-end',
    },
    listItemText1: {
        height: 45,
        lineHeight: 45,
        fontSize: 32,
        color: '#FF211A',
    },
    listItemText2: {
        fontSize: 17,
        color: '#FF211A',
        alignSelf: 'center',
        marginTop: 8,
    },
    listItemText3: {
        height: 20,
        fontSize: 14,
        color: '#99999A',
        lineHeight: 20,
        textAlign: 'center',  
    }
});