import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { addLocation } from '../firebase/FirestoreController';
import styles from '../styles/Styles.js';

function AddLocationScreen({ navigation }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');

    async function handleAddLocation() {
        if (!name || !description || !rating) {
            Alert.alert("All fields are required!");
            return;
        }

        await addLocation(name, description, rating);
        Alert.alert("Location added successfully!");

        setName('');
        setDescription('');
        setRating('');

        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.label}>Name:</Text>
                <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Enter location name" />

                <Text style={styles.label}>Description:</Text>
                <TextInput style={styles.input} value={description} onChangeText={setDescription} placeholder="Enter description" />

                <Text style={styles.label}>Rating (1-5):</Text>
                <TextInput
                    style={styles.input}
                    value={rating}
                    onChangeText={(text) => {
                        const num = parseInt(text, 10);
                        if (!isNaN(num) && num >= 1 && num <= 5) {
                            setRating(text);
                        } else if (text === '') {
                            setRating('');
                        }
                    }}
                    placeholder="Enter rating"
                    keyboardType="numeric"
                />

                <TouchableOpacity style={styles.button} onPress={handleAddLocation}>
                    <Text style={styles.buttonText}>Add location</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default AddLocationScreen;
