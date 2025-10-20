import { updateProduct } from "@/app/api/product/productApiCall"
import { useState } from "react"

export default function Product(props:{ p:product}) {

    const [expandMode, setExpandMode] = useState<boolean>(false)
    const [editMode, setEditMode] = useState<boolean>(false)

    // updted product valuse

    const [pName,setPName] = useState<string>(props.p.name)
    const [pDescription,setPDescription] = useState<string>(props.p.description)
    const [pType,setPType] = useState<string>(props.p.type)
    const [pPrice,setPPrice] = useState<number>(props.p.price)

    
    // get product based on productId, this will likly be changed to receving the 
    // product from the parent, to reduce redundant API calls

    const updateProductHelper = async () =>{
            let p:product = props.p
            p.name = pName
            p.description = pDescription
            p.type = pType
            p.price = pPrice 

            if( props.p.store !== undefined)
                updateProduct(props.p.store!==undefined?props.p.store.id:0, p)
    
            
        }

    return(
        <div>
            {!expandMode?
                <div className=" border-2 rounded w-full flex justify-between" onClick={()=>{setExpandMode(true)}}>
                    <div className=" flex">
                        <div> picture of product</div>
                        <div>
                            {!editMode?
                                <div>
                                    <h3>{props.p.name}</h3>
                                    <p>{props.p.description}</p>
                                </div>:
                                <div>
                                    <input type="text" name="" id="" placeholder={props.p.name}  onChange={ e =>setPName(e.target.value)}/>
                                    <br/>
                                    <input type="text" name="" id="" placeholder={props.p.description}  onChange={ e =>setPDescription(e.target.value)}/>
                                    
                                </div>
                            }
                            
                        </div>
                        {!editMode?
                            <div>
                                <p>{props.p.type}</p>
                            </div>:
                            <div>
                                <input type="text" name="" id="" placeholder={props.p.type}  onChange={ e =>setPType(e.target.value)}/>
                            </div>
                        }
                    </div>
                    {!editMode?
                        <div>
                            <p>${props.p.price}</p>
                        </div>:
                        <div>
                            $<input type="number" name="" id="" placeholder={props.p.price.toString()}  onChange={ e =>setPPrice(Number(e.target.value))}/>
                        </div>
                    }

                    
                    
                </div>:

                
                <div className=" p-3">
                    <div className=" relative ">
                        <button className=" absolute right-0 top-0 bg-red-600" onClick={()=>{setExpandMode(false); setEditMode(false)}}>x</button>
                    </div>
                    
                    <div className="flex justify-between">
                        <div> pictures </div>
                        <div>
                            {!editMode?
                                <div>
                                    <h3>{props.p.name}</h3>
                                    <p><small>{props.p.type}</small></p>
                                    <p>{props.p.description}</p>
                                </div>:
                                <div>
                                    <input type="text" name="" id="" defaultValue={props.p.name}  onChange={ e =>setPName(e.target.value)}/>
                                    <br />
                                    <input type="text" name="" id="" defaultValue={props.p.type}  onChange={ e =>setPType(e.target.value)}/>
                                    <br/>
                                    <input type="text" name="" id="" defaultValue={props.p.description}  onChange={ e =>setPDescription(e.target.value)}/>
                                    
                                </div>
                            }
                        </div>
                        <div>
                            {!editMode?
                        <div>
                            <p>${props.p.price}</p>
                        </div>:
                        <div>
                            $<input type="number" name="" id="" defaultValue={props.p.price.toString()}  onChange={ e =>setPPrice(Number(e.target.value))}/>
                        </div>
                    }

                        </div>
                    </div>
                    <div className=" flex">
                        {!editMode?
                            <div>
                                <button onClick={()=>{setEditMode(true)}}>edit</button>
                            </div>:
                            <div>
                                <button onClick={() =>updateProductHelper()}>update</button>
                                <button onClick={()=>{setEditMode(false)}}>cancel</button>
                            </div>
                        }
                    </div>
                </div>
            }

            {/* <div className="">
                    update product menu 
                    <div className="flex">
                        <input type="text" name="" id="" placeholder={props.p.name}  onChange={ e =>setPName(e.target.value)}/>
                        <br />
                        <input type="text" name="" id="" placeholder={props.p.type}  onChange={ e =>setPType(e.target.value)}/>
                        <br />
                        <input type="text" name="" id="" placeholder={props.p.description}  onChange={ e =>setPDescription(e.target.value)}/>
                        <br />
                        <input type="number" name="" id="" placeholder={props.p.price.toString()}  onChange={ e =>setPPrice(Number(e.target.value))}/>
                </div>
                <button onClick={() => updateProductHelper()}>Update Product</button>
            </div> */}
        </div>
    );

}