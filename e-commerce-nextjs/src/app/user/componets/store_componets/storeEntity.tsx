import { useEffect, useState } from "react";
import AddProductMenu from "./addProductMenu";
import Product from "./product";

export default function StoreEntity(props:{storeId:Number}) {

    // style for the main div that is responsable for showing the sotre or now
    const [showMenu, setShowMenu] = useState<Boolean>(false)

    // state var used to keep track of when any product is changed and this 
    // componet needs rerendered
    const [productChange, setProductChange] = useState<Boolean>(false)



    useEffect(()=>{
        // get a new list of products form the data base because a new one was added
    }, [productChange])

    // menu 
    const StoreMenu = () =>{
        return(
            <div>
                <div className=" border-2 rounded">
                    <h3> store name</h3>
                    <p>desciption</p>
                    list of products
                    <Product productId={1}/>
                </div>
                <AddProductMenu storeId={props.storeId} />
                <button onClick={()=>{setShowMenu(false)}}> hide menu</button>
            </div>
        )
    }
    
    return(
        <div>
            {showMenu? <div>
                    <div>
                        <StoreMenu />
                    </div>
                </div>:<div>
                    <div onClick={()=>{setShowMenu(true)}}>
                        store name
                    </div>     
                </div>}
            
            
        </div>
    );
}