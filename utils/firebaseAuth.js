import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {addDoc, collection, deleteDoc, doc, getDocs, getFirestore, onSnapshot} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAgjBzzb7cBTfzJMdLdI9mAYZjfFebLSSA",
    authDomain: "react-auth-345c0.firebaseapp.com",
    projectId: "react-auth-345c0",
    storageBucket: "react-auth-345c0.appspot.com",
    messagingSenderId: "1008017283341",
    appId: "1:1008017283341:web:039c6b02945b9072fa7844",
    measurementId: "G-2V23T315FC"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app);

export const collectionRef = collection(db,'books');

// export async function readData(){
//     const snapshot = await getDocs(collectionRef)
//     let arr = []
//     snapshot.docs.forEach(aa=>{
//         arr.push({id:aa.id,...aa.data()})
//     })

//     console.log("Arr: ",arr);
//     return arr
// }

export async function updateData(data){
    try {
        const docRef = await addDoc(collectionRef,data);
        console.log('Updated Data: ',docRef);       
    } catch (error) {
        console.log("Update Error: ",error);
    }
}

export async function deleteData(delId){
    const delData =  doc(db,'books',delId)
    const dataDeleted = await deleteDoc(delData)
}

export const realTimeData = () =>{
    const realArr = []
    onSnapshot(collectionRef,(snapshot)=>{
        snapshot.docs.forEach(aa=>{
            realArr.push({id:aa.id,...aa.data()})
        })
        console.log('Inside: ',realArr);
    })

    console.log('Outside: ',realArr);

    return realArr
}

// export const realTimeData = onSnapshot(collectionRef,(snapshot)=>{
//     let realArr = []
//     snapshot.docs.forEach(aa=>{
//         realArr.push({id:aa.id,...aa.data()})
//     })
//     console.log('realTimeData: ',realArr);
//     return realArr;
// })



export default app;

export const fireAuth = getAuth()