
import { StyleSheet, PixelRatio } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 14,
        paddingBottom: 14,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderTopColor: '#eee',
        borderTopWidth: 1/PixelRatio.get(),
    },
    headerLeft: {
        width: 69,
        height: 19,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    headerLeftText: {
        width: 55,
        height: 18,
        fontSize: 13,
        color: '#fff',
        lineHeight: 20,
    },
    headerRight: {
        height: 20,
        fontSize: 14,
        lineHeight: 20,
        color: '#6F6F4D',
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'right'
    }
});