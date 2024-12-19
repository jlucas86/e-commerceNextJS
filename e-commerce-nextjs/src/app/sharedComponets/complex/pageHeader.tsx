'use client'

import { useState } from "react"
import TitleBar from "./titleBar"
import StoreMenu from "./storeMenu"
import AccountMenu from "./accountMenu"

export default function PageHeader( props:{mainStyle:String, setMainStyle:Function}) {
    

    
        // stuff for acount managment menu
        const [menuAccount, setMenuAccount] = useState(false)
        const showAccountMenu = () =>{
            if (menuAccount === false){
                setMenuAccount(true)
                props.setMainStyle("opacity-25")
            } else{
                setMenuAccount(false)
                props.setMainStyle("opacity-100")
            }
    
        }
        
        // stuff for product menu
        const [menuMenu,setMenuMenu] = useState(false)    
        const showMenu = () =>{
            console.log("show menu")
            if (menuMenu === false){
                setMenuMenu(true)
                props.setMainStyle("opacity-25")
            } else{
                setMenuMenu(false)
                props.setMainStyle("opacity-100")
            }
    
        }

    return (
        <div>
            {menuMenu ? <StoreMenu/>: <div></div> }
            {menuAccount ? <AccountMenu/>: <div></div> }
            <TitleBar AccountMenu={showAccountMenu} showMenu={showMenu}></TitleBar>
        </div>
    )
}