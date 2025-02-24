import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useLocations } from '../firebase/FirestoreController.js'; 
import styles from '../styles/Styles.js';

const LocationsListScreen = () => {
    const locations = useLocations(); 

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemRating}>Rating: {item.rating}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            {locations.length === 0 ? ( // Näytetään viesti, jos lista on tyhjä
                <Text style={styles.emptyMessage}>No locations found.</Text>
            ) : (
                <FlatList
                    data={locations}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            )}
        </View>
    );
};

export default LocationsListScreen;
