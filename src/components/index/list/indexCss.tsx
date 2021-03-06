
import { StyleSheet, PixelRatio } from 'react-native';

export default StyleSheet.create({

    container: {
        backgroundColor: '#fff',
    },
    listCentent: {
        height: 258
    },
    pubView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    header: {
        height: 40,
        paddingTop: 9,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomColor: '#eee',
        borderBottomWidth: 1/PixelRatio.get(),
    },
    headerLeft: {
        left: 15,
        width: 120,
        alignItems: 'flex-start', 
        flexDirection: 'row',
    },
    headerLeftImage: {
        top: 3
    },
    headerLeftText: {
        fontSize: 16,
        color: '#6C6C4B',
        lineHeight: 22,
        left: 4
    },
    headerRight: {
        width: 70,
        height: 23,
        right: 15,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    headerRightText: {
        width: 48,
        height: 17,
        fontSize: 12,
        color: '#3E310F',
        textShadowColor: '#F0DDB2',
        lineHeight: 17,
    },
    listCententItem: {
        height: 217
    },
    listCententItemCentent: {
        height: 170,
        alignItems: 'center', 
    },
    left: {
        height: 65,
        width: 120,
        justifyContent: 'center'
    },
    leftText1: {
        height: 45,
        lineHeight: 45,
        fontSize: 32,
        color: '#FF211A',
        fontWeight: 'bold',
    },
    leftText2: {
        fontSize: 17,
        color: '#FF211A',
        alignSelf: 'center',
        marginTop: 8,
    },
    leftText3: {
        height: 20,
        fontSize: 14,
        color: '#99999A',
        lineHeight: 20,
        textAlign: 'center',  
    },
    
    right: {
        height: 65,
        width: 100,
        justifyContent: 'center'
    },
    rightText1: {
        height: 45,
        lineHeight: 45,
        fontSize: 32,
        color: '#333',
        fontWeight: 'bold'
    },
    rightText2: {
        fontSize: 17,
        color: '#333',
        alignSelf: 'center',
        marginTop: 8,
    },
    buttonBack: {
        width: 250,
        height: 35,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 17,
        marginBottom: 16
    },
    buttonBackText: {
        width: 64,
        height: 22,
        lineHeight: 22,
        textAlign: 'center',
        color: '#3E310F',
    },
    bottomTip: {
        width: 145,
        height: 16,
        color: '#99999A',
        fontSize: 11,
        textAlign: 'center',
        lineHeight: 16,
    },
    gomeBac: {
        width: 345,
        height: 110,
        marginTop: 24,
        marginLeft: 16,
        marginBottom: 24
    },
    gomeBacText: {
        fontSize: 14,
        color: '#974D0D',
        height: 26,
        lineHeight: 26,
        marginLeft: 8,
        marginTop: 20
    }
});