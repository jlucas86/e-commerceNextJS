'use client'

import axios from "axios";

export default function AccountMenu() {

    const logOut = async () =>{
        console.log("button click")
         axios.get('http://localhost:8080/logout',{
            withCredentials: true
        })
         .then(response => {
            // Handle successful registration
            console.log("in respone section")
            location.replace("http://localhost:3000/")
        })
        .catch(error => {
            // Handle registration errors
            console.error('Error lgoin out user:', error);
        });
    }

    return(
        <div className=" z-30 absolute top-14 right-0 border border-gray-400 rounded bg-white p-3 opacity-100">
            <div> order history</div>
            <div> account details</div>
            <button onClick={logOut}> logout</button>
        </div>
    );
}