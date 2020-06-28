import { StyleSheet, Dimensions } from 'react-native';

const Style = StyleSheet.create({
    button: {
        fontSize: 24,
        fontWeight: "bold",
        height: Dimensions.get('window').width / 6,
        width: Dimensions.get('window').width / 1.2,
        padding: 15,
        backgroundColor: '#4a5c6b',
        textAlign: 'center',
        color: '#fff',
        borderColor: '#888',
        margin: 20,   
        borderRadius: 10,
    },
    text: {
        textAlign: 'center',
    },
    image: {
        height: 15,
        width: 15, 
    }
});

export default Style;