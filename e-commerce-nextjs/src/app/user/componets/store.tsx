'use client'

import { useState, useEffect } from "react";
import AddProductMenu from "./store_componets/addProductMenu";

import axios from "axios";
import StoreEntity from "./store_componets/storeEntity";
import { addProduct, deleteProduct, getProduct } from "@/app/api/product/productApiCall";
import UpdateProductMenu from "./store_componets/updateProductMenu";

interface updateMenu{
    display:boolean,
    name:string,
    desciption:string
}

// interface user{
//     id:Number,
//     email:String,
//     username:String,
//     password:String,
//     // roles
//     // stores
// }

// interface store{
//     id:Number,
//     name:String,
//     description:String,
//     user:user|undefined
// }

// interface product{
//     id:Number,
//     name:String,
//     type:String,
//     description:String,
//     price:Number,
//     store:store,
//     // carts
//     // orders
// }

export default function Store(props:{}) {


    const [adding, setAdding] = useState<boolean>(false)
    const [edit, setEdit] = useState<boolean>(false)
    const [expand, setExpand] = useState<boolean>(false)
    const [expandUpdate, setExpandUpdate] = useState<boolean>(false)

    // store information for adding a new store and editing and existing one

    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [updateName, setUpdateName] = useState<string>("");
    const [updateDescription, setUpdateDescription] = useState<string>("");

    const [update, setUpdate] = useState<Array<updateMenu>>([])

    const [storeSubMenu, setStoreSubMenu] = useState<string[]>([]);

    const [error, setError] = useState<string>("");

    const [stores, setStores] = useState<store[]>([])

    // product information for adding a product as well as editing one

    const [productName, setProductName] = useState<String>("")
    const [productType, setProductType] = useState<String>("")
    const [productDescription, setProductDescription] = useState<String>("")
    const [productPrice, setProductPrice] = useState<Number>(0)
    const [productStore, setProductStore] = useState<store>()
    const [productP, setProductP] = useState<product>()


    

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
        
        axios.post("http://localhost:8080/api/v1/store/addStore/".concat(localStorage.getItem("username")||""),{
            name: name, 
            description: description,
        }).then(() => {
            getAllStores()
          })  
        
        setAdding(false)
    }

    const getAllStores = async () => {
        
        const response = await axios.get("http://localhost:8080/api/v1/store/getAllStore/".concat(localStorage.getItem("username")||""))
        
        const data = await response.data
        setStores(data)
        console.log(data);
        console.log(data.length);
        

        const dataHold:Array<string> = []
        const storesUpdateHold:Array<updateMenu> = []

        for (let index = 0; index < data.length; index++) {
            dataHold.push("hidden")

            let updateHold:updateMenu = {display:false, name:"", desciption:""}
            storesUpdateHold.push(updateHold)
            
        }

        console.log(storesUpdateHold);
        

        setStoreSubMenu(dataHold)
        setUpdate(storesUpdateHold)


    }

    const getStore = async (storeId:Number) =>{

        axios.get("http://localhost:8080/api/v1/store/getStore/".concat(storeId.toString()),{
            withCredentials: true
        })
            .then(response => {
                // Handle successful find
                console.log( "value i want", response)
            })
            .catch(error => {
                // Handle find errors
                console.error('Error getting store:', error);
                // throw new Error("some thing went wrong when getting store")
                
            });
        
    }

    const getUser = async () => {
        
        // const response = await axios.get('http://localhost:8080/user/getUsername/jimmithy');
        // console.log(response);

        // axios.get('http://localhost:8080/user/getUsername/jimmithy')
        

        const response = await fetch("http://localhost:8080/user/getUsername/jim");
        
        const data = await response.json()
        console.log(data);

    }

    
    
    const deleteStore = async (i:number) => {
        axios.delete("http://localhost:8080/api/v1/store/deleteStore/".concat(localStorage.getItem("username")||"","/",stores[i].id.toString()),
        {withCredentials: true})
        
            .then(() => {
            getAllStores()
          })
          .catch(error => {
                // Handle find errors
                console.error('Error deleting store:', error);
            });
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
        
        const hold:string[] = storeSubMenu;
        
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

        const storesUpdateHold:Array<updateMenu> = []
        
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
        console.log(hold)
        
        axios.put("http://localhost:8080/api/v1/store/updateStore/".concat(localStorage.getItem("username")||""),
            hold,{
            withCredentials: true
        }).then(() => {
            getAllStores()
          }).then(() => {
            getAllStores()
          })
    }

    const cancelUpdateStore = (i:number)=>{
        const storesUpdateHold:Array<updateMenu> = []
        update[i].display = false

        for (let index = 0; index < update.length; index++) {
            if( index !== i)
                storesUpdateHold.push(update[index])
            else
                storesUpdateHold.push(update[i])  
        }
        setUpdate(storesUpdateHold)
    }

    /*********************************************
     * product functions
     */

    // const addProductHelper = async (sId:Number) =>{
    //     axios.get("http://localhost:8080/api/v1/store/getStore/".concat(sId.toString()),{
    //         withCredentials: true
    //     })
    //         .then(response => {
    //             // Handle successful find
    //             console.log(response)
    //             addProduct(response.data)
    //         })
    //         .catch(error => {
    //             // Handle find errors
    //             console.error('Error getting store:', error);
    //             // throw new Error("some thing went wrong when getting store")
                
    //         });
    // }

    // const addProduct = async (s:store)=>{

    //     console.log(s)

    //     axios.post("http://localhost:8080/api/v1/product/createProduct/".concat(localStorage.getItem("username")||"", "/", s.id.toString()),{
    //             name:productName,
    //             type:productType,
    //             description:productDescription,
    //             price:productPrice,
    //             store: s
    //         },
    //         {
    //             withCredentials: true,
    //         })
    //         .then(response => {
    //             // Handle successful registration
    //             console.log(response.data);
    //         })
    //         .catch(error => {
    //             // Handle registration errors
    //             console.error('Error registering user:', error);
    //         });
    // }

    // const getProduct = async (id:number) =>{
    //     axios.get("http://localhost:8080/api/v1/product/getProduct/".concat(id.toString()),{
    //         withCredentials:true,
    //     })
    //         .then(response => {
    //             console.log(response)
    //         })
    //         .catch(error =>{
    //             console.error(error);
                
    //         });

            
    // }

    const getProductHelper = async(pId:number) =>{
        let p:product = await getProduct(pId) 
        console.log("prodcut val :", p)
        if (p.id !== 0) setProductP(p)
    }

    
    return(
        <div className=" w-full border-2 border-white rounded" >
            <div>
                list of stores this will be done by mapping a list got from the api
            </div>
            {
                stores.length > 0 ? <div>
                    {stores.map((store,i) =>
                    <div className="border-2 w-full border-white rounded">
                        <div className=" flex justify-between ">

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
                
                </div> :
                <div></div>
            }
            
            <button onClick={() => setAdding(!adding)}>
                + add store
            </button>
            <br />
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
            <button onClick={getAllStores}>get all stores</button>
            <button onClick={getUser}>get user</button>
            <form method="get" action="http://localhost:8080/user/getUsername/jimmithy">
            <button  type="submit">getuserJ</button>
          </form>
          <br />
          <button onClick={() => getStore(3)}>getStore by id 3</button>
          <br />
          <div className="">
                <input type="text" name="" id="" placeholder="Name"  onChange={ e =>setProductName(e.target.value)}/>
                <br />
                <input type="text" name="" id="" placeholder="Type"  onChange={ e =>setProductType(e.target.value)}/>
                <br />
                <input type="text" name="" id="" placeholder="Description"  onChange={ e =>setProductDescription(e.target.value)}/>
                <br />
                <input type="number" name="" id="" placeholder=""  onChange={ e =>setProductPrice(Number(e.target.value))}/>
          </div>
          <button onClick={() => addProduct(1, productName, productType, productDescription, productPrice)}>add product 1 </button>
          <br />
          <button onClick={() =>{getProductHelper(1)}}>get product 1</button>
          <br />
          <button onClick={()=>deleteProduct(1,1)}> delete product</button>
          <br />
          {productP? <div>
                <UpdateProductMenu sId={1} p={productP} />
          </div>: <div> product is not defined</div> }
          

            <br />
            
            <div>
                <StoreEntity storeId={1} />
            </div>  
            
        </div>
    );


    // type:String,
    // description:String,
    // price:Number,
}