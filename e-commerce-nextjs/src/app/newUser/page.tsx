'use client'

import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";


export default function newUser() {

    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("")
    const [confermPassword, setConfermPassword] = useState<string>("")

    useEffect(()=>{
        if(password != confermPassword)
            console.log("passwords do not match");
            
    },[password, confermPassword])


    const addUser = async () =>{

        console.log(username, email, password, confermPassword);


        // axios.post('http://localhost:8080/user/addUser', {
        //     "email":"email1",
        //     "username":"jimmithy1",
        //     "password":"password",
        //     "role":null
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });

        // fetch("http://localhost:8080/user/addUser", {
        //     method: "POST",
        //     body: JSON.stringify({
        //         email:"email1",
        //         username:"jimmithy1",
        //         password:"password",
        //         role:null
        //     }),
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8"
        //     }
        //     });

        const response = await fetch("http://localhost:8080/user/addUser", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                username: username,
                password: password,
                role:null
            }),
            headers: {
                "Content-type": "application/json;"
            }
            });
        
        const data = await response.json()
        console.log(data);
        
            
        
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
                <button onClick={addUser}>Submit</button>
            
                
            

            <p>Already have an account? <a href="http://localhost:3000/login">Sign in here</a>.</p>
        </div>
    );
}