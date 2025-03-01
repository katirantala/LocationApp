import { useState, useEffect } from 'react';
import { Alert, Text, View } from 'react-native';
import styles from '../styles/Styles.js';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';

const MapScreen = ({ route }) => {
  const [loc, setLoc] = useState(null);
  const locationName = route.params?.locationName || '';

  useEffect(() => {
    (async () => {
      if (locationName) {
        const coords = await Location.geocodeAsync(locationName);
        if (coords.length > 0) {
          setLoc({ lat: coords[0].latitude, lon: coords[0].longitude });
          return;
        }
        Alert.alert('Sijaintia ei löytynyt! Näytetään nykyinen sijainti.');
      }
      getCurrentLocation();
    })();
  }, [locationName]);

  async function getCurrentLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Sijaintilupa evätty!');
      return;
    }

    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Lowest,
    });
    setLoc({ lat: location.coords.latitude, lon: location.coords.longitude });
  }

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
          <Marker title={locationName || 'Nykyinen sijainti'} coordinate={{ latitude: loc.lat, longitude: loc.lon }} />
        </MapView>
      ) : (
        <Text>Loading map...</Text>
      )}
    </View>
  );
};



export default MapScreen;