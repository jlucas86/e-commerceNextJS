'use client'

import TitleBar from "../sharedComponets/complex/titleBar";
import Store from "./componets/store";

export default function user() {
    return(
        <div>
            
            {/* <TitleBar></TitleBar> */}

            <div className=" flex justify-items-end">
                <div className=" bg-gray-200 w-1/2 border border-gray-400 rounded ">
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
                        security
                    </div>
                </div>
                <div className=" bg-white w-1/2  border border-gray-400 rounded ">
                    menu information
                </div>
            </div>

            <div className=" flex flex-wrap">
                <div className=" w-screen lg:w-1/2 border border-2 border-white rounded">orders</div>
                <div className=" w-screen lg:w-1/2 border border-2 border-white rounded">payment methods</div>
                <Store></Store>
                <div className=" w-screen lg:w-1/2 border border-2 border-white rounded">stores</div>
                <div className=" w-screen lg:w-1/2 border border-2 border-white rounded">user info</div>
            </div>
            

        </div>
    );
}