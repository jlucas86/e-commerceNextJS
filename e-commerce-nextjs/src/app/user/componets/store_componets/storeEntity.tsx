import { useEffect, useState } from "react";
import AddProductMenu from "./addProductMenu";

export default function StoreEntity(props:{storeId:Number}) {

    // state var used to keep track of when any product is changed and this 
    // componet needs rerendered
    const [productChange, setProductChange] = useState<Boolean>(false)

    useEffect(()=>{
        // get a new list of products form the data base because a new one was added
    }, [productChange])
    
    return(
        <div>
            <div className=" border-2 rounded">
                list of products
            </div>
            <AddProductMenu storeId={props.storeId} />
        </div>
    );
}