import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyC8JjsIZG-hM0Y6YXGpan5cSzAKqHfEptY",
    authDomain: "crwn-db-838e9.firebaseapp.com",
    databaseURL: "https://crwn-db-838e9.firebaseio.com",
    projectId: "crwn-db-838e9",
    storageBucket: "",
    messagingSenderId: "917378896543",
    appId: "1:917378896543:web:915a561897273553"
  };

  export const createUserProfileDocument = async(userAuth,additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
      }catch(error){
        console.log('error creating user',error.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle =() => auth.signInWithPopup(provider);
  
  export default firebase;
