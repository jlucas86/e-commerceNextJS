import axios from "axios";
import { useState } from "react";

export default function AddProductMenu(props:{storeId:Number,}){

    const [pMenuStyle, setPMenuStyle] = useState<string>("hidden")

    /********
     * values for the text boxes regarding adding a new product
     */
    const [productName, setProductName] = useState<String>("")
    const [productType, setProductType] = useState<String>("")
    const [productDescription, setProductDescription] = useState<String>("")
    const [productPrice, setProductPrice] = useState<Number>(0)

    const addProductButtonClick = () =>{
        if(pMenuStyle == "hidden"){
            setPMenuStyle("block")
        }else{
            setPMenuStyle("hidden")
        }
    }


    /***************************************
     * functions for api calls regarding products
     */

    const addProduct = async (sId:Number) =>{
        axios.get("http://localhost:8080/api/v1/store/getStore/".concat(sId.toString()),{
            withCredentials: true
        })
            .then(response => {
                // Handle successful find
                console.log(response)
                addProductHelper(response.data)
            })
            .catch(error => {
                // Handle find errors
                console.error('Error getting store:', error);
                // throw new Error("some thing went wrong when getting store")
                
            });
    }

    const addProductHelper = async (s:store)=>{

        console.log(s)

        axios.post("http://localhost:8080/api/v1/product/createProduct/".concat(localStorage.getItem("username")||"", "/", s.id.toString()),{
                name:productName,
                type:productType,
                description:productDescription,
                price:productPrice,
                store: s
            },
            {
                withCredentials: true,
            })
            .then(response => {
                // Handle successful registration
                console.log(response.data);
            })
            .catch(error => {
                // Handle registration errors
                console.error('Error registering user:', error);
            });
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
                    <br />
                    <button onClick={() =>addProduct(props.storeId)}> add </button>
                </div>
        </div>
    );
}