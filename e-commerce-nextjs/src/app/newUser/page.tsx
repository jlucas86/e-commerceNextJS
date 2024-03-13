'use client'

import { ChangeEvent, useState } from "react";


export default function newUser() {

    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("")
    const [confermPassword, setConfermPassword] = useState<string>("")


    const addUser = () =>{

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