import { useState, useEffect } from "react";
import { projectFirestore, collectionRef } from "../firebase/config";
import { onSnapshot, orderBy } from "firebase/firestore";

const useFirestore = (collection) => {

    const [docs, setDocs] = useState([]);
    //const collectionRef = (projectFirestore, 'images')
    
    useEffect(() => {
        //const unsub = projectFirestore(collection)
        onSnapshot(collectionRef, (snapshot) => {
            let images = []

            snapshot.docs.forEach((doc) => {
                images.push({...doc.data(), id:doc.id})
            })
            setDocs(images);
        })

        //return () => unsub();
    }, [collection])


    return { docs };

}

export default useFirestore;