import { updateProduct } from "@/app/api/product/productApiCall"
import { useState } from "react"

export default function UpdateProductMenu(props:{p:product, sId:number}) {

    const [pName, setPName] = useState(props.p.name)
    const [pType, setPType] = useState(props.p.type)
    const [pDesciption, setPDescription] = useState(props.p.description)
    const [pPrice, setPPrice] = useState(props.p.price)

    const updateProductHelper = async () =>{
        let p:product = props.p
        p.name = pName
        p.description = pDesciption
        p.type = pType
        p.price = pPrice 

        updateProduct(props.sId, p)
    }
    
    
    return(
        <div>
            update product menu 
            <div className="">
                <input type="text" name="" id="" placeholder={props.p.name}  onChange={ e =>setPName(e.target.value)}/>
                <br />
                <input type="text" name="" id="" placeholder={props.p.type}  onChange={ e =>setPType(e.target.value)}/>
                <br />
                <input type="text" name="" id="" placeholder={props.p.description}  onChange={ e =>setPDescription(e.target.value)}/>
                <br />
                <input type="number" name="" id="" placeholder={props.p.price.toString()}  onChange={ e =>setPPrice(Number(e.target.value))}/>
          </div>
          <button onClick={() => updateProductHelper()}>Update Product</button>
        </div>
    )
}