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
        backgroundColor: '#FFFFFF'

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
    button: {
        backgroundColor: '#87CEFA',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10, 
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    }
    
});

export default styles;
