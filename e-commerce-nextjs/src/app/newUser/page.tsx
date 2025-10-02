'use client'

import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";


export default function newUser() {

    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("")
    const [confermPassword, setConfermPassword] = useState<string>("")
    const [seller, setSeller] = useState<boolean>(false)

    const [users, setUsers] = useState<JSON>()
    
    let userRoles:any[] = []

    useEffect(()=>{
        if(password != confermPassword)
            console.log("passwords do not match");
            // add make this such that it apears on the screen
            
    },[password, confermPassword])

    const addNewUser = async () => {
        if(seller === true){
            getSellerRole()
        } else {
            getCustomerRole()
        }
    }

    const getCustomerRole = async () => {
        axios.get("http://localhost:8080/api/v1/role/getRole/2",{
            withCredentials: true
        })
            .then(response => {
                // Handle successful registration
                userRoles.push(response.data)
                addUser()
                })
            .catch(error => {
                // Handle registration errors
                console.error('Error registering user:', error);
            });
    }

    const getSellerRole = async () => {     
        axios.get("http://localhost:8080/api/v1/role/getRole/3",{
            withCredentials: true
        })
            .then(response => {
                userRoles.push(response.data)
                getCustomerRole()
            });     
    }

    const getAllUsers = async () => {     
        axios.get("http://localhost:8080/user/getAllUsers?pageNo=0&pageSize=1&name=bob",{
            withCredentials: true
        })
            .then(response => {
                console.log(response.data)
            });     
    }


    const addUser = async () =>{

        console.log(username, email, password, confermPassword);

        if(password !== confermPassword){
            return
        }
        
        let roles = userRoles
        axios.post("http://localhost:8080/user/addUser", {email, username, password, seller, roles})
            .then(response => {
                // Handle successful registration
                console.log('User registered successfully:', response.data);
            })
            .catch(error => {
                // Handle registration errors
                console.error('Error registering user:', error);
            });  
    }

    const initUsers = async () =>{
        axios.get("http://localhost:8080/api/v1/role/getRole/3",{
            withCredentials: true
        })
            .then(response => {
                userRoles.push(response.data)
                 
                // add jim
                initUsersHelper("jim@gmail.com", "jim")
                // add bob
                initUsersHelper("bob@gmail.com", "bob")
                // add tom
                initUsersHelper("tom@gmail.com", "tom")
            });


    }

    const initUsersHelper = async (emailHold:string, usernameHold:string)  =>{
        let roles = userRoles

        axios.post("http://localhost:8080/user/addUser", {email:emailHold, username:usernameHold, password:"password", seller, roles})
            .then(response => {
                // Handle successful registration
                console.log('User registered successfully:', response.data);
            })
            .catch(error => {
                // Handle registration errors
                console.error('Error registering user:', error);
            }); 
    }

    
    return (
        <div className=" w-screen h-screen flex flex-col items-center justify-center border-2 border-white radious ">
            <h1>New User</h1>
            
                <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
                <br />
                <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <br />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <br />
                <input type="password" placeholder="confirm Password" value={confermPassword} onChange={e => setConfermPassword(e.target.value)} />
                <br />
                <div>
                    Would you like to be a seller
                    <input type="checkbox" name="seller" id="seller" defaultChecked={seller} onChange={e => {setSeller(!seller); console.log(seller);
                    }} />
                </div>
                <button onClick={addNewUser}>Submit</button>  
                <button onClick={initUsers}> init users</button>    
                <button onClick={getAllUsers}> get all users</button>  


            <p>Already have an account? <a href="http://localhost:3000/login">Sign in here</a>.</p>
        </div>
    );
}