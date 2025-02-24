import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useLocations } from '../firebase/FirestoreController';
import styles from '../styles/Styles.js';

function LocationsListScreen({ navigation }) {
    const locations = useLocations();

    function renderItem({ item }) {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <Text style={styles.itemRating}>Rating: {item.rating}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Button title="Add Location" onPress={() => navigation.navigate('AddLocation')} />
            
            {locations.length === 0 ? (
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
}

export default LocationsListScreen;
