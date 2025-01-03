'use client'

import { useState, useEffect } from "react";

import axios from "axios";

interface updateMenu{
    dispaly:boolean,
    name:string,
    desciption:string
}

export default function store(props:{}) {


    const [adding, setAdding] = useState<boolean>(false)
    const [edit, setEdit] = useState<boolean>(false)
    const [expand, setExpand] = useState<boolean>(false)
    const [expandUpdate, setExpandUpdate] = useState<boolean>(false)

    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [updateName, setUpdateName] = useState<string>("");
    const [updateDescription, setUpdateDescription] = useState<string>("");

    const [update, setUpdate] = useState<array<updateMenu>>([])

    const [storeSubMenu, setStoreSubMenu] = useState<array<string>>([]);

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
        console.log(data.length);
        

        const dataHold:array<string> = []
        const storesUpdateHold:array<updateMenu> = []

        for (let index = 0; index < data.length; index++) {
            dataHold.push("hidden")

            let updateHold:UpdateMenu = {display:false, name:"", desciption:""}
            storesUpdateHold.push(updateHold)
            
        }

        console.log(storesUpdateHold);
        

        setStoreSubMenu(dataHold)
        setUpdate(storesUpdateHold)


    }

    const getUser = async () => {
        
        // const response = await axios.get('http://localhost:8080/user/getUsername/jimmithy');
        // console.log(response);

        // axios.get('http://localhost:8080/user/getUsername/jimmithy')
        

        const response = await fetch("http://localhost:8080/user/getUsername/jimmithy");
        
        const data = await response.json()
        console.log(data);

    }

    
    
    const deleteStore = async (i:number) => {
        axios.delete("http://localhost:8080/api/v1/store/deleteStore/jimmithy/"+stores[i].id
        ).then(() => {
            getAllStores()
          })
    }


    // render
    const expansionButton = (i:number) =>{

        
        if(storeSubMenu[i] === "hidden"){
            return(
                <button onClick={()=>expansionButtonClick(i)}>down</button>
            )
        } else{
            return(
                <button onClick={()=>expansionButtonClick(i)}>up</button>
            )
        }
    }

    const expansionButtonClick = (i:number) =>{ 
        
        const hold:arry<String> = storeSubMenu;
        
        // sub-menu is being shown
        if(storeSubMenu[i] !== "hidden"){
            console.log("hidden");
            
            hold[i] = "hidden"
            setStoreSubMenu(hold)
        } else{ // sub-menu is not being shown

            console.log("ml-4 flex-col");
            
            hold[i] = "ml-4 flex-col"
            setStoreSubMenu(hold)
        }
        setExpand(!expand)
    }

    const updateMenu = (i:number) =>{
        
        if(update[i].display === false){
            return (<button onClick={() =>updateButtonClick(i)}>update information</button>);
        }else{ 
            return (<div>
                <input type="text" placeholder="Name" onChange={e => setUpdateName(e.target.value)} />
                <br />
                <input type="text" placeholder="Description" onChange={e => setUpdateDescription(e.target.value)} />
                <br />
                <div className=" flex-row">
                    <button onClick={() =>updateStore(i)}> Update</button>
                    <button onClick={()=>cancelUpdateStore(i)}> cancel</button>
                </div>
            </div>);
        }    
    }

    const updateButtonClick = (i:number) =>{
        console.log(update[i]);
        
        /**
         * try to find a new way to update withouth for loop.
         * if not posible move for loop to its own function
         */

        const storesUpdateHold:array<updateMenu> = []
        
        if(update[i].display === false){
            update[i].display = true
            for (let index = 0; index < update.length; index++) {
                if( index !== i)
                    storesUpdateHold.push(update[index])
                else
                    storesUpdateHold.push(update[i])  
            }
            setUpdate(storesUpdateHold)
        }else{ 
            update[i].display = false
            for (let index = 0; index < update.length; index++) {
                if( index !== i)
                    storesUpdateHold.push(update[index])
                else
                    storesUpdateHold.push(update[i])  
            }
            setUpdate(storesUpdateHold)
        }
        
    }

    const updateStore = async (i:number) => {
        
        const hold = stores[i]
        hold.name = updateName
        hold.description = updateDescription
        
        axios.post("http://localhost:8080/api/v1/store/addStore/jimmithy",hold).then(() => {
            getAllStores()
          }).then(() => {
            getAllStores()
          })
    }

    const cancelUpdateStore = (i:number)=>{
        const storesUpdateHold:array<updateMenu> = []
        update[i].display = false

        for (let index = 0; index < update.length; index++) {
            if( index !== i)
                storesUpdateHold.push(update[index])
            else
                storesUpdateHold.push(update[i])  
        }
        setUpdate(storesUpdateHold)
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
                                {expansionButton(i)}


                                
                                <button onClick={() =>deleteStore(i)} className=" border-2 border-red-700 rounded" > Delete</button>
                            </div>
                        </div>
                        <div className={storeSubMenu[i]}>
                            <p>{store.description}</p>
                            {updateMenu(i)}
                            
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