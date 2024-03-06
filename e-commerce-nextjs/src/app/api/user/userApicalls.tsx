import axios, { AxiosResponse} from 'axios';

// login
export function login() {

    console.log("in login");
    

    try {
        const postData = async () => {
            console.log("in post data");
            try {
                const dataToSend = {username:"admin", password:"password"}

                const response: AxiosResponse = await axios.post('http://localhost:8080/login', dataToSend);
    
                console.log(response.data);
                
                // const responseData: YourResponseType = response.data;
            } catch (error) {
                
            }
        }
    } catch (error) {
        
    }
    
}

// add user

// get user

// update user

// delete user