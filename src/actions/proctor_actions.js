export const uploadFlaggedImages = (uploadData) => {
    return async (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        const firebase = getFirebase();
        const storage = firebase.storage()
        const storageRef = storage.ref();
        const fileRef = storageRef.child(uploadData.selectedFile.name)
        await fileRef.put(uploadData.selectedFile)
        firestore.collection('flaggedData').add({
            name: uploadData.name,
            image: await fileRef.getDownloadURL()
        }).then(() => {
            console.log('UPLOADEDD')
            dispatch({type: 'UPLOAD_FLAGGEDIMAGE', uploadData});
        }).catch((error) => {
            dispatch({type:'UPLOAD_FLAGGEDIMAGE_ERROR', error});
        })
        
    }
};