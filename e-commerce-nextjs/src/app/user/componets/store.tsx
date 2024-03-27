'use client'

import { useState, useEffect } from "react";

import axios from "axios";

export default function store(props:{}) {


    const [adding, setAdding] = useState<boolean>(false)
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const [stores, setStores] = useState([])


    

    useEffect(()=>{getAllStores()},[])

    const addStore = async () => {   

        axios.post("http://localhost:8080/api/v1/store/addStore/jimmithy",{
            name: name, 
            description: description,
        }).then(() => {
            getAllStores()
          })  
        
        setAdding(false)
    }

    const getAllStores = async () => {
        
        const response = await axios.get("http://localhost:8080/api/v1/store/getAllStore/jimmithy")
        
        const data = await response.data
        setStores(data)
        console.log(data);



    }

    const getUser = async () => {
        
        // const response = await axios.get('http://localhost:8080/user/getUsername/jimmithy');
        // console.log(response);

        // axios.get('http://localhost:8080/user/getUsername/jimmithy')
        

        const response = await fetch("http://localhost:8080/user/getUsername/jimmithy");
        
        const data = await response.json()
        console.log(data);

    }

    const updateStore = async () => {
        
    }
    
    const deleteStore = async () => {
        
    }


    
    return(
        <div className=" w-screen lg:w-1/2 border-2 border-white rounded" >
            <div>
                list of stores this will be done by mapping a list got from the api
            </div>
            {stores.map(store =>
                    <div className=" flex  justify-between">
                        
                        <div>
                            {store.name}
                        </div>
                        

                        <div>
                            <button onClick={updateStore}> Update</button>
                            <button onClick={deleteStore} className=" border-2 border-red-700 rounded" > Delete</button>
                        </div>
                    </div>
                )}
            <button onClick={() => setAdding(!adding)}>
                + add store
            </button>
            <br />
            <button onClick={getAllStores}>get all stores</button>
            <button onClick={getUser}>get user</button>
            {adding == true &&
                <div className=" ml-4">
                    <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
                    <br />
                    <input type="text" placeholder="Description" onChange={e => setDescription(e.target.value)} />
                    <br />
                    
                    <button onClick={addStore}>Add Store</button>
                </div>
            }
            <form method="get" action="http://localhost:8080/user/getUsername/jimmithy">
            
            
            <button  type="submit">getuserJ</button>
          </form>
        </div>
    );
}