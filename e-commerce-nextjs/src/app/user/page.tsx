'use client'

import { useState } from "react";
import TitleBar from "../sharedComponets/complex/titleBar";
import Store from "./componets/store";
import Orders from "./componets/orders";
import AccountInfo from "./componets/accountInfo";
import PaymentMethods from "./componets/paymentMethods";
import Securtiy from "./componets/security";

export default function user() {

    const [orderStyle, setOrderStyle] = useState("hidden")
    const [storeStyle, setStoreStyle] = useState("hidden")
    const [accountInfoStyle, setAccountInfoStyle] = useState("hidden")
    const [paymentMethodStyle, setPaymentMethodStyle] = useState("hidden")
    const [securityStyle, setSecurityStyle] = useState("hidden")

    const orderClick = () =>{
        if(orderStyle !=="hidden"){
            
        } else{
            setOrderStyle("")
            setStoreStyle("hidden")
            setAccountInfoStyle("hidden")
            setPaymentMethodStyle("hidden")
            setStoreStyle("hidden")
        }
    }

    const storeClick = () =>{
        if(storeStyle !=="hidden"){
            
        } else{
            setOrderStyle("hidden")
            setStoreStyle("")
            setAccountInfoStyle("hidden")
            setPaymentMethodStyle("hidden")
            setSecurityStyle("hidden")
        }
    }

    const accountInfoClick = () =>{
        if(accountInfoStyle !=="hidden"){
            
        } else{
            setOrderStyle("hidden")
            setStoreStyle("hidden")
            setAccountInfoStyle("")
            setPaymentMethodStyle("hidden")
            setSecurityStyle("hidden")
        }
    }

    const paymentMethodClick = () =>{
        if(paymentMethodStyle !=="hidden"){
            
        } else{
            setOrderStyle("hidden")
            setStoreStyle("hidden")
            setAccountInfoStyle("hidden")
            setPaymentMethodStyle("")
            setSecurityStyle("hidden")
        }
    }

    const securityClick = () =>{
        if(securityStyle !=="hidden"){
            
        } else{
            setOrderStyle("hidden")
            setStoreStyle("hidden")
            setAccountInfoStyle("hidden")
            setPaymentMethodStyle("hidden")
            setSecurityStyle("")
        }
    }

    return(
        <div>
            
            {/* <TitleBar></TitleBar> */}

            <div className=" flex justify-items-end">
                <div className=" h-svh bg-gray-200 w-1/2 border border-gray-400 rounded  ">
                    <div onClick={orderClick}>
                        orders
                    </div>
                    <div onClick={storeClick}>
                        stores
                    </div>
                    <div onClick={accountInfoClick}>
                        account info
                    </div>
                    <div onClick={paymentMethodClick}>
                        payment menthods
                    </div>
                    <div onClick={securityClick}>
                        security
                    </div>
                </div>
                {/**
                 * use this div as abox for other window types
                 * - orders: list of orders with represented buy order number and date.
                 *   on click it expands to show the ofder details, then the items in the oreder
                 * 
                 * - store: list of stores owned by the use. when clicked expands to show store
                 *   details, and a link to the store page, then the products sold in the store 
                 * 
                 * - accoutn info: shows the useres general account information as well as allows
                 *   it to be edited.
                 * 
                 * - payment method: shows a list of payment methods. when clicked expands to 
                 *   show details and allow them to be edited
                 * 
                 * - security: shows users password and security questions. allows them to be 
                 *   edited.
                 */}
                <div className=" bg-white w-1/2  border border-gray-400 rounded ">
                    <Orders style={orderStyle}/>
                    <div className={storeStyle}>
                        stores
                    </div>
                    <AccountInfo style={accountInfoStyle}/>
                    <PaymentMethods style={paymentMethodStyle}/>
                    <Securtiy style={securityStyle}/>
                </div>
                
            </div>

            {/* <div className=" flex flex-wrap">
                <div className=" w-screen lg:w-1/2 border border-2 border-white rounded">orders</div>
                <div className=" w-screen lg:w-1/2 border border-2 border-white rounded">payment methods</div>
                <Store></Store>
                <div className=" w-screen lg:w-1/2 border border-2 border-white rounded">stores</div>
                <div className=" w-screen lg:w-1/2 border border-2 border-white rounded">user info</div>
            </div> */}
            

        </div>
    );
}