import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, addDoc } from 'firebase/firestore';
import { db } from './Config.js';

export function useLocations() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'locations'), orderBy('name', 'asc'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const locationsList = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            console.log("Fetched locations:", locationsList); //Poista kun valmis
            setLocations(locationsList);
        });

        
        return () => unsubscribe();
    }, []);

    return locations;
}


export async function addLocation(name, description, rating) {
    try {
        await addDoc(collection(db, 'locations'), {
            name: name,  
            description: description,  
            rating: parseFloat(rating), // Muutetaan rating numeroksi
            createdAt: new Date()
        });
        console.log("Location added successfully!");
    } catch (error) {
        console.error("Error adding location:", error);
    }
}