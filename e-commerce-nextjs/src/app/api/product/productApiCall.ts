
import product from "@/app/product/page";
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
    let p:product = {id:0, name:"", type:"", description:"", price:0, store: undefined}
    let response = await axios.get("http://localhost:8080/api/v1/product/getProduct/".concat(id.toString()),{
        withCredentials:true,
    })
        .then(response => {
            console.log(response)
            return response.data
        })
        .catch(error =>{
            console.error(error);
        });
    console.log("do thing",response)
    
    return response
     
}

export const getProductsPage = async(page:number, size:number, sortBy:String, ascending:Boolean, types:Array<string>) =>{
        // let types = ["car","bus"]
        console.log(types.join(","))

        let response = await axios.get("http://localhost:8080/api/v1/product/getProducts",{
            params:{
                page:page,
                size:size,
                sortBy: sortBy,
                ascending: ascending,
                type:types.join(",")
            },
            withCredentials:true,
    })
        .then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.error(error);
        });
    }

    export const getStoreProduct = async(sId:number, page:number, size:number, sortBy:String, ascending:Boolean) =>{
        
        let response = await axios.get("http://localhost:8080/api/v1/product/getStoreProducts",{
            params:{
                page:page,
                size:size,
                sortBy: sortBy,
                ascending: ascending,
                storeId:sId
            },
            withCredentials:true,
    })
        .then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.error(error);
        });
    }

export const updateProduct = async (sId:number, p:product) => {  

    axios.put("http://localhost:8080/api/v1/product/updateProduct/".concat(localStorage.getItem("username")||"","/",sId.toString()),
        p,{
        withCredentials: true
    }).then(() => {
        console.log("product updated")
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