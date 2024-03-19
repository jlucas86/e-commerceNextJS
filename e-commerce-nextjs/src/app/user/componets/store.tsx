'use client'

import { useState } from "react";
export default function store(props:{}) {


    const [adding, setAdding] = useState<boolean>(false)
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const addStore = async () => {
        
        setAdding(false)
    }
    
    return(
        <div className=" w-screen lg:w-1/2 border-2 border-white rounded" >
            <div>
                list of stores this will be done by mapping a list got from the api
            </div>
            <button onClick={() => setAdding(!adding)}>
                + add store
            </button>
            {adding == true &&
                <div className=" ml-4">
                    <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
                    <br />
                    <input type="text" placeholder="Description" onChange={e => setDescription(e.target.value)} />
                    <br />
                    <button onClick={addStore}>Add Store</button>
                </div>
            }
            
        </div>
    );
}