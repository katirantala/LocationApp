import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
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
            setLocations(locationsList);
        });

        // Puhdistetaan tilaus, kun komponentti irrotetaan
        return () => unsubscribe();
    }, []);

    return locations;
}

// export default useLocations; // Tämä rivi voidaan pitää kommentoituna, jos käytetään nimettyä vientiä
