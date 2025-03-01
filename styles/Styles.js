import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#E6E6FA',
    },

    itemContainer: {
        marginBottom: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
    },

    form: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
    }, 

    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#FFFFFF'
    },

    itemDescription: {
        fontSize: 14,
        marginVertical: 4,
    },

    itemRating: {
        fontSize: 14,
        color: 'gray',
    },

    emptyMessage: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },

    LocationListButton: {
        backgroundColor: '#87CEFA',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10, 
        marginTop: 5,
    },

    button: {
        backgroundColor: '#87CEFA',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        margin: 10,
        marginTop: 20
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
    },

    mapIcon: {
        color: 'gray'
    },

    label: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },

    input: {
        marginLeft: 10,
    },
    
    mapContainer:{
    flex: 1,
    backgroundColor: '#E6E6FA',
    },

    map: {
        width: '100%',
        height: '100%',
    }
});

export default styles;
