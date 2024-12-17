'use client'

import axios from "axios";
import { useEffect, useState } from "react";


export default function TitleBar(props:{AccountMenu:Function, showMenu:Function}) {

    let userStat:boolean = true;

    const [loginStat, setLoginStat] = useState(false)

    useEffect(()=>{
        isLoggedin()
    },[])


    const searchButtonClick = () =>{
        console.log("search click")
    }

    const accountButtonClick = () =>{
        console.log("account click")
    }

    const  homeClick = () =>{
        console.log("home click")
        
    }

    const accountInfo = () =>{
        props.AccountMenu()
    }

    const menuInfo = () =>{
        props.showMenu()
    }

    const  isLoggedin = async() => { 

        axios.get("http://localhost:8080/user/isloggedIn",{
            withCredentials: true
        })
            .then(response => {
                // Handle successful registration
                setLoginStat(response.data)
            })
            .catch(error => {
                // Handle registration errors
                console.error('Error registering user:', error);
            });
    }

    return (
        <div className=" h-14 w-screen px-7 flex justify-between items-center bg-white shadow" >
            <div className=" flex justify-center items-center">
                <div className=" mr-4">
                    <button onClick={menuInfo}>Menu</button>
                </div>
                <div className=" flex  border-purple-300 border-2 rounded-3xl  my-2 bg-purple-300 ">
                    <input type="text" name="searchBar" id="searchBar" className=" rounded-3xl bg-purple-300 border-none px-2" />
                    <button className=" px-2 rounded-3xl bg-purple-400 border-2 border-purple-400" onClick={searchButtonClick}> search</button>
                </div>
                

            </div>
            <a href="/">
                <button >Buy Lots</button> 
            </a>
            <div onClick={homeClick}></div>
            <div>
                <div>
                    {loginStat ? 
                    (<div onClick={accountInfo}>
                        Account Info
                    </div>): 
                    (<a href="/login">
                        Log In / Register
                    </a>) }
                </div>
            </div>
        </div>)
}