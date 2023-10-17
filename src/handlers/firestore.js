import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDGNNfJ_mH_m4usBm671SEf9gu9cfYmoLc",
    authDomain: "merchist-f41d7.firebaseapp.com",
    projectId: "merchist-f41d7",
    storageBucket: "merchist-f41d7.appspot.com",
    messagingSenderId: "315287455776",
    appId: "1:315287455776:web:c5a98edc9b76184e4d5445"
  };
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const Firestore = {
    readDocs: (...args) => {
        const [collection_name, sub_collection] = args
        let docs = []
        const docRef = collection(db, collection_name)

        return new Promise(async(resolve, reject) => {
            try{
                const snapshots = await getDocs(docRef)
                snapshots.forEach(doc => {
                    docs.push({...doc.data(), id: doc.id})
                })
                resolve(docs)
            } catch (err){
                console.log(err)
            }
        })
    }
}