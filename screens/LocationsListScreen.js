import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LocationsListScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Testi</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LocationsListScreen;