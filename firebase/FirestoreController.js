import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from './Config.js';

export const useLocations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const locationsQuery = query(collection(db, 'locations'), orderBy('name', 'asc'));

        const unsubscribe = onSnapshot(locationsQuery, (snapshot) => {
            const locationsList = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setLocations(locationsList);
        });

        return () => unsubscribe(); 
    }, []);

    return locations;
};

//export default useLocations;
