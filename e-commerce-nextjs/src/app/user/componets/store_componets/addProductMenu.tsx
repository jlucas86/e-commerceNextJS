import { useState } from "react";

export default function AddProductMenu(props:{}){

    const [pMenuStyle, setPMenuStyle] = useState<string>("hidden")

    /********
     * values for the text boxes regarding adding a new product
     */
    const [productName, setProductName] = useState<String>("")
    const [productType, setProductType] = useState<String>("")
    const [productDescription, setProductDescription] = useState<String>("")
    const [productPrice, setProductPrice] = useState<Number>(0)
    const [productStore, setProductStore] = useState<store>()

    const addProductButtonClick = () =>{
        if(pMenuStyle == "hidden"){
            setPMenuStyle("block")
        }else{
            setPMenuStyle("hidden")
        }
    }

    return(
        <div className="">
            <button onClick={addProductButtonClick}>add product</button> 
                <div className={pMenuStyle}>
                    <input type="text" name="" id="" placeholder="Name"  onChange={ e =>setProductName(e.target.value)}/>
                    <br />
                    <input type="text" name="" id="" placeholder="type" onChange={ e =>setProductType(e.target.value)}/>
                    <br />
                    <input type="number" name="" id="" placeholder="0"  onChange={ e =>setProductPrice(Number(e.target.value))}/>
                    <br />
                    <input type="text" name="" id="" placeholder="desciption" onChange={ e =>setProductDescription(e.target.value)}/>
                </div>
        </div>
    );
}