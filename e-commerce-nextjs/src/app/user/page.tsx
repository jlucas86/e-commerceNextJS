'use client'

import TitleBar from "../sharedComponets/complex/titleBar";
import Store from "./componets/store";

export default function user() {
    return(
        <div>
            
            {/* <TitleBar></TitleBar> */}

            <div className=" flex justify-items-end">
                <div className=" h-svh bg-gray-200 w-1/2 border border-gray-400 rounded  ">
                    <div>
                        orders
                    </div>
                    <div>
                        stores
                    </div>
                    <div>
                        account info
                    </div>
                    <div>
                        payment menthods
                    </div>
                    <div>
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
                    menu information
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