import { useEffect, useState } from "react";
import AddProductMenu from "./addProductMenu";
import Product from "./product";
import { getStore } from "@/app/api/store/storeApiCall";
import { getStoreProduct } from "@/app/api/product/productApiCall";
import { AxiosResponse } from "axios";

export default function StoreEntity(props:{storeId:number}) {


    // style for the main div that is responsable for showing the sotre or now
    const [showMenu, setShowMenu] = useState<Boolean>(false)

    // value of store data
    const [storeVal, setStoreVal] = useState<store>()

    // state var used to keep track of when any product is changed and this 
    // componet needs rerendered
    const [productChange, setProductChange] = useState<Boolean>(false)

    const [productIdList, setProductIdList] = useState<Array<Number>>([1,1,1,1,1,1,1,1])
    const [productList, setProductList] = useState<Array<product>>([])

    // page informatino
    const [pageOfProducts, setPageOfProducts] = useState<productPage>()

    useEffect(()=>{
        // get a new list of products form the data base because a new one was added
        getStoreInfo() 
        getProducts(0, 3, "id", true) 
    }, [productChange])

    const getStoreInfo = async () =>{

        let s:store = await getStore(props.storeId)
        console.log("store",s)
        if(s.name !== ""){
            setStoreVal(s)
        }
        console.log("store in function being teseted",s)
    }

    // get store info form id
    
    // get a list of product ids that the store own (get 20 at a time if possible)

    const getProducts = async (page:number, size:number, sortBy:String, ascending:Boolean) =>{

        let p = await getStoreProduct(props.storeId, page, size, sortBy, ascending)
        setPageOfProducts(p)
        // console.log(results.data)
    }

    // menu  html and css
    const StoreMenu = () =>{
        return(
            <div className=" border-2 rounded">
                <h3> {storeVal?.name} </h3>
                <p> {storeVal?.description} </p>

                {/* scrole window for products */}
                {pageOfProducts!==undefined ?
                    <div className="">
                        {pageOfProducts.products.length>0? 
                        <div className=" border-2 rounded mx-2 max-h-32 overflow-y-scroll">
                            {pageOfProducts.products.map((p,i)=>
                                <Product p={p} />
                            )}
                        </div>:<div></div>}
                    </div>:<div></div>}


                <AddProductMenu storeId={props.storeId} />
                <button onClick={()=>{getProducts(0, 3, "id", true)}}>test for return type</button>
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
                        {storeVal?.name}
                    </div>     
                </div>}   
        </div>
    );
}