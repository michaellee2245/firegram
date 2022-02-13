import { useState, useEffect } from "react";
import { projectStorage, projectFirestore } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from "firebase/firestore";

const useStorage = (file) => {
    

    const [progress, setProgress] = useState(0);
    const [error, setError ] = useState(null);
    const [url, setUrl ] = useState(null);


    useEffect(() => {
        //create reference
        console.log(projectStorage);
        const storageRef = ref(projectStorage, file.name);
        const collectionRef = collection(projectFirestore, 'images');
    
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        uploadTask.on(
            'state_changed', (snapshot) => {
                let percentage = (snapshot.bytesTransferred / snapshot.totalBytes ) * 100;
                setProgress(percentage);
            }, (err) => {
                setError(err);
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => setUrl(url)
                );
                addDoc(collectionRef, { 
                   url:url
                })
            }
        );
    }, [file, url]);


    return { progress, url, error }  
}

export default useStorage;