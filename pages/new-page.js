import { async } from "@firebase/util";
import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { collectionRef, deleteData, readData, realArr, realTimeData, updateData } from "../utils/firebaseAuth";

const NewPage =(props) => {

    console.log('Props of New Page: ',props);

    // readData().then(result=>{
    //     console.log("Result: ",result);
    // }).catch(err=>{
    //     console.log(err);
    // })

    const [input,setInput] = useState({
        title:'',
        author:''
    })

    const [fireBaseData, setFireBaseData] = useState([]);

    useEffect(()=>{
        const unsubscribe = onSnapshot(collectionRef,(snapshot)=>{
            let arr = []
            snapshot.docs.forEach(aa=>{
                arr.push({id:aa.id,...aa.data()})
            })
            setFireBaseData(arr)
        });
        return unsubscribe
    },[])

    console.log("===>RENDERING TEST");

    const handleChange = e =>{

        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log("Input: ",input);
    }

    const handleForm = e =>{
        e.preventDefault()
        console.log("Form submit: ",input);
        updateData(input).then(aa=>{
            console.log('Updated Done: ',aa);
        })
    }

    return ( 
        <>
            <h1>Hello New Page</h1>
            <br />
            <button onClick={updateData}>Update Data</button>
            <hr />
          
            {fireBaseData.map(x=>(
                <ol key={x.id}>
                    <li>Title: {x.title} / Author: {x.author} </li> 
                    <button 
                    onClick={()=>deleteData(x.id)}
                    className=" bg-red-600 text-white px-2 py-1 text-sm rounded-md">Delete</button>
                    <hr />
                </ol>
            ))}

            <form action="" className=" border-orange-500 border p-3 " onSubmit={handleForm}>
                <input className=" outline-none bg-gray-500 text-white rounded p-1 mb-2" 
                    type="text" 
                    name="title" 
                    id=""
                    onChange={handleChange}
                    value={input.title} 
                    placeholder="Type Title"/>

                <input className=" bg-gray-500 text-white rounded p-1 mb-2" 
                    type="text" 
                    name="author" 
                    id=""
                    onChange={handleChange}
                    value={input.author} 
                    placeholder="Type Author"/>

                <button className=" bg-teal-600 text-white px-4 py-2 block rounded-md ">Submit</button>
            </form>
        </> 
    );
}
 
export default NewPage;


export async function getStaticProps(){

    return {
        props:{
            data: 'text'
        }
    }
}