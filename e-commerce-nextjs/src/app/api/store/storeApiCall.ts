import axios from "axios";

export const getStore = async (storeId:Number) => {

    let responseVal:store = await axios.get("http://localhost:8080/api/v1/store/getStore/".concat(storeId.toString()),{
        withCredentials: true
    })
        .then(response => {
            // Handle successful find
            return(response.data)
        })
        .catch(error => {
            // Handle find errors
            console.error('Error getting store:', error);
            // throw new Error("some thing went wrong when getting store")
            
        });
    
        return responseVal
}