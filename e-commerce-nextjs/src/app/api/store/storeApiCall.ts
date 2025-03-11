import axios from "axios";

export const getStore = async (storeId:Number) => {

    let s:store = {id:0, 
        name:"", 
        description:"", 
        user:undefined}

    // const response = await axios.get("http://localhost:8080/api/v1/store/getStore/".concat(storeId.toString()),{
    //     withCredentials: true
    // }).catch(error =>{})

    // console.log("store get Function: ", response)
    // s = {id:response.data.id, 
    //     name:response.data.name, 
    //     description:response.data.description, 
    //     user:undefined}
    // return(s)   

    const responseVal = await axios.get("http://localhost:8080/api/v1/store/getStore/".concat(storeId.toString()),{
        withCredentials: true
    })
        .then(response => {
            // Handle successful find
            s = {id:response.data.id, 
                name:response.data.name, 
                description:response.data.description, 
                user:undefined}
            return(s)
        })
        .catch(error => {
            // Handle find errors
            console.error('Error getting store:', error);
            // throw new Error("some thing went wrong when getting store")
            
        });
    
        return s
}