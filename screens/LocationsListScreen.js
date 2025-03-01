import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useLocations } from '../firebase/FirestoreController.js';
import styles from '../styles/Styles.js';

const LocationsListScreen = ({ navigation }) => {
    const locations = useLocations();

    const renderItem = ({ item }) => (
        <TouchableOpacity 
            style={styles.itemContainer}
            onPress={() => navigation.navigate('Map', { locationName: item.name })}
        >
            <View style={styles.itemRow}>
                <Text style={styles.itemName}>{item.name}</Text>
                <MaterialIcons style={styles.mapIcon} name="place" size={24}   /> 
            </View>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemRating}>Rating: {item.rating}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('AddLocation')} 
            >
                <Text style={styles.buttonText}>Add Location</Text> 
            </TouchableOpacity>
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
};


export default LocationsListScreen;
