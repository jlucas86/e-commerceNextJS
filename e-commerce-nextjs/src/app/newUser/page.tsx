'use client'

import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";


export default function newUser() {

    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("")
    const [confermPassword, setConfermPassword] = useState<string>("")
    const [seller, setSeller] = useState<boolean>(false)

    useEffect(()=>{
        if(password != confermPassword)
            console.log("passwords do not match");
            
    },[password, confermPassword])


    const addUser = async () =>{

        console.log(username, email, password, confermPassword);

        if(password !== confermPassword){
            return
        }

        
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
                <div>
                    Would you like to be a seller
                    <input type="checkbox" name="seller" id="seller" defaultChecked={seller} onChange={e => {setSeller(!seller); console.log(seller);
                    }} />
                </div>
                <button onClick={addUser}>Submit</button>         

            <p>Already have an account? <a href="http://localhost:3000/login">Sign in here</a>.</p>
        </div>
    );
}