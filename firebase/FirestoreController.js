import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, addDoc } from 'firebase/firestore';
import { db } from './Config';

// 🔹 Haetaan Firestoresta kaikki sijainnit
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

    return () => unsubscribe();
  }, []);

  return locations;
}

// 🔹 Tallennetaan uusi sijainti Firestoreen
export async function addLocation(name, description, rating) {
  try {
    await addDoc(collection(db, 'locations'), {
      name,
      description,
      rating: parseFloat(rating),
      createdAt: new Date()
    });
    console.log("Sijainti lisätty onnistuneesti!");
  } catch (error) {
    console.error("Virhe lisättäessä sijaintia:", error);
  }
}
