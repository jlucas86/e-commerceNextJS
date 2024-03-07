'use client'

import {login} from "../api/user/userApicalls"

export default function Login() {

    const loginButton = () =>{
        console.log("in function");
        
          login()
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
            {/* </form> */}

            <p>Dont have an account? <a href="http://localhost:3000/newUser">Register here</a>.</p>
        </div>
    );
}