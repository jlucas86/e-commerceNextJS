import axios from "axios";
import { pid } from "process";

export const addProduct = async (sId:Number, pName:String, pType:String, pDescription:String, pPrice:Number) =>{
    axios.get("http://localhost:8080/api/v1/store/getStore/".concat(sId.toString()),{
        withCredentials: true
    })
        .then(response => {
            // Handle successful find
            console.log(response)
            addProductHelper(response.data, pName, pType, pDescription, pPrice)
        })
        .catch(error => {
            // Handle find errors
            console.error('Error getting store:', error);
            // throw new Error("some thing went wrong when getting store")
            
        });
}

const addProductHelper = async (s:store, pName:String, pType:String, pDescription:String, pPrice:Number)=>{

    console.log(s)

    axios.post("http://localhost:8080/api/v1/product/createProduct/".concat(localStorage.getItem("username")||"", "/", s.id.toString()),{
            name:pName,
            type:pType,
            description:pDescription,
            price:pPrice,
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

export const getProduct = async (id:number) =>{
    axios.get("http://localhost:8080/api/v1/product/getProduct/".concat(id.toString()),{
        withCredentials:true,
    })
        .then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.error(error);
            
        });     
}

export const deleteProduct = async (sId:number, pId:number) =>{
    console.log((localStorage.getItem("username")||"").concat(", ", sId.toString(), ", ", pId.toString()))
    axios.delete("http://localhost:8080/api/v1/product/deleteProduct/".concat(localStorage.getItem("username")||"","/",sId.toString(),"/",pId.toString()),
    {withCredentials: true})
        .then(() => {
            console.log("no error")
          })
          .catch(error => {
                // Handle find errors
                console.error('Error deleting product:', error);
            });
}