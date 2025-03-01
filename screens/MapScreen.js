import React, { useState, useEffect } from 'react';
import { Alert, Text, View } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import styles from '../styles/Styles.js';

const MapScreen = ({ route }) => {
  const [loc, setLoc] = useState(null);
  const locationName = route.params?.locationName || '';

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Location permission denied!');
      return;
    }

    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Lowest,
    });
    setLoc({ lat: location.coords.latitude, lon: location.coords.longitude });
  };

  useEffect(() => {
    const fetchLocation = async () => {
      if (locationName) {
        const coords = await Location.geocodeAsync(locationName);
        if (coords.length > 0) {
          setLoc({ lat: coords[0].latitude, lon: coords[0].longitude });
          return;
        }
        Alert.alert('Location not found! Showing current location.');
      }
      getCurrentLocation();
    };

    fetchLocation();
  }, [locationName]);

  return (
    <View style={styles.mapContainer}>
      {loc ? (
        <MapView
          style={styles.map}
          region={{
            latitude: loc.lat,
            longitude: loc.lon,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker title={locationName} coordinate={{ latitude: loc.lat, longitude: loc.lon }} />
        </MapView>
      ) : (
        <Text>Loading map...</Text>
      )}
    </View>
  );
};

export default MapScreen;
