'use client'

import { useState, useEffect } from "react";

import axios from "axios";

export default function store(props:{}) {


    const [adding, setAdding] = useState<boolean>(false)
    const [edit, setEdit] = useState<boolean>(false)
    const [expand, setExpand] = useState<boolean>(false)

    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [updateName, setUpdateName] = useState<string>("");
    const [updateDescription, setUpdateDescription] = useState<string>("");

    const [storeSubMenu, setStoreSubMenu] = useState<string>("hidden ");

    const [error, setError] = useState<string>("");

    const [stores, setStores] = useState([])


    

    useEffect(()=>{getAllStores()},[])

    const addStore = async () => {   

        if(name === ""){
            setError("Store is blank")
            return
        }

        if (description === "") {
            setError("Description is blank")
            return
        }

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

        const hold = stores[0]
        hold.name = updateName
        hold.description = updateDescription
        
        axios.post("http://localhost:8080/api/v1/store/addStore/jimmithy",hold).then(() => {
            getAllStores()
          }).then(() => {
            getAllStores()
          })
    }
    
    const deleteStore = async (i:number) => {

        console.log(stores[i]);
        

        axios.delete("http://localhost:8080/api/v1/store/deleteStore/jimmithy/1"
        ).then(() => {
            getAllStores()
          })
    }


    // render
    const expansionButton = () =>{
        if(expand == false){
            return(
                <button onClick={()=>expansionButtonClick()}>down</button>
            )
        } else{
            return(
                <button onClick={()=>expansionButtonClick()}>up</button>
            )
        }
    }

    const expansionButtonClick = () =>{
        // sub-menu is being shown
        if(expand === true){
            setStoreSubMenu("hidden")
        } else{ // sub-menu is not being shown
            setStoreSubMenu("ml-4")
        }
        setExpand(!expand)
    }


    
    return(
        <div className=" w-screen lg:w-1/2 border-2 border-white rounded" >
            <div>
                list of stores this will be done by mapping a list got from the api
            </div>
            {stores.map((store,i) =>
                    <div className="border-2 border-white rounded">
                        <div className=" flex  justify-between">

                            <div>
                                {store.name}
                            </div>
                            <div>
                                {expansionButton()}

                                
                                <button onClick={() =>deleteStore(i)} className=" border-2 border-red-700 rounded" > Delete</button>
                            </div>
                        </div>
                        <div className={storeSubMenu}>
                            {store.description}
                            <div>
                                <input type="text" placeholder="Name" onChange={e => setUpdateName(e.target.value)} />
                                <br />
                                <input type="text" placeholder="Description" onChange={e => setUpdateDescription(e.target.value)} />
                                <br />
                                <button onClick={updateStore}> Update</button>
                            </div>
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
                    <div>{error}</div>
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