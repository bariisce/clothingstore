import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#bdbdbd',
        backgroundColor: '#cbcbcb',
        margin: 10,
        flexDirection: 'row',
    },
    body_container: {
        flex: 1,
        padding: 5,
        justifyContent: 'space-between',
    },
    image: {
        width: 150,
        minHeight: 150,
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        textAlign: 'right',
        fontSize: 16,
        fontStyle: 'italic',
    },
});