'use client'

import { FormEvent } from 'react'
import axios, { AxiosResponse} from 'axios';

import {login} from "../api/user/userApicalls"

export default function Login() {

    const loginButton = () =>{
        console.log("in function");
        
          login()
    }
    const getAllUsers = async () => {
        console.log("in get all users");
        try {

            const response: AxiosResponse = await axios.get('http://localhost:8080/user/getAllUsers');

            console.log(response.data);
            
            // const responseData: YourResponseType = response.data;
        } catch (error) {
            
        }
    }

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log("in function");
        
     
        const formData = new FormData(event.currentTarget)
        console.log("after fromData", formData);
        const response = await fetch('http://localhost:8080/login', {
          method: 'POST',
          body: formData,
        })
        console.log("after fetch");
     
        // Handle response if necessary
        const data = await response
        console.log(data);
        
        // ...
      }

    return(
        <div className=" w-screen h-screen flex flex-col items-center justify-center border-2 border-white radious ">
            <h1>Log In</h1>
            {/* <form action="" method="post">
                <input type="text" placeholder="Username" />
                <br />
                <input type="password" placeholder="Password"/>
                <br /> */}
                <button onClick={loginButton}>Login</button>
                <button onClick={getAllUsers}> get all users</button>
            {/* </form> */}

            <form onSubmit={onSubmit}>
                <input type="text" name="username" placeholder='Username'/>
                <br />
                <input type="password" name="password" placeholder='Password' />
                <br />
                <button type="submit">Submit</button>
            </form>


            <p>Dont have an account? <a href="http://localhost:3000/newUser">Register here</a>.</p>
        </div>
    );
}