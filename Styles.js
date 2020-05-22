import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
        alignItems: 'center',

        fontFamily: "Open Sans",
    },

    logo: {
        zIndex: 1
    },

    imageContainer: {
        width: 100,
        height: 120
    },

    header: {
        fontSize: "5em",
        fontFamily: "Lato-Regular"
    },
});

export default styles