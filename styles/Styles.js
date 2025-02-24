import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    itemContainer: {
        marginBottom: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
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
});

export default styles;
