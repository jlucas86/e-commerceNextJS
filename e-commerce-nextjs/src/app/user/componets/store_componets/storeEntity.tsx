import { useEffect, useState } from "react";
import AddProductMenu from "./addProductMenu";
import Product from "./product";
import { getStore } from "@/app/api/store/storeApiCall";

export default function StoreEntity(props:{storeId:Number}) {

    // style for the main div that is responsable for showing the sotre or now
    const [showMenu, setShowMenu] = useState<Boolean>(false)

    // value of store data
    const [storeVal, setStoreVal] = useState<store>()

    // state var used to keep track of when any product is changed and this 
    // componet needs rerendered
    const [productChange, setProductChange] = useState<Boolean>(false)

    const [productIdList, setProductIdList] = useState<Array<Number>>([1,1,1,1,1,1,1,1])

    useEffect(()=>{
        // get a new list of products form the data base because a new one was added
        getStoreInfo()

        
    }, [productChange])

    const getStoreInfo = async () =>{

        let s:store = await getStore(1)
        console.log("store",s)
        if(s.name !== ""){
            setStoreVal(s)
        }
    }

    // get store info form id
    
    // get a list of product ids that the store own (get 20 at a time if possible)


    // menu  html and css
    const StoreMenu = () =>{
        return(
            <div className=" border-2 rounded">
                <h3> {storeVal?.name} </h3>
                <p> {storeVal?.description} </p>

                {/* scrole window for products */}
                {productIdList.length>0 ?
                    <div className=" border-2 rounded mx-2 max-h-32 overflow-y-scroll">
                        {productIdList.map((p,i)=>
                            <Product productId={p} />
                        )}
                    </div>:<div></div>}
                <AddProductMenu storeId={props.storeId} />
                <button onClick={()=>{setShowMenu(false)}}> hide menu</button>
            </div>
        )
    }
    
    return(
        <div>
            {showMenu? 
                <div>
                    <StoreMenu />  
                </div>:<div>
                    <div onClick={()=>{setShowMenu(true)}} className=" border-2 rounded">
                        store name
                    </div>     
                </div>}   
        </div>
    );
}