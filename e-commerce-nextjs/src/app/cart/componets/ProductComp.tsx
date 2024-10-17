'use client'

import { ChangeEventHandler, useState } from "react";
import { product } from "../interfaces/interfaces";



export default function ProductComp(props:{p:product}) {

    const [q, setQ] = useState<number>(0)

    const changeQ = (e: ChangeEventHandler<HTMLInputElement> ) =>{

        if (e.target.value !== ''){
            if(+e.target.value > 0)
                setQ(+e.target.value)
            else if (+e.target.value === 0){
                //remove form cart
                setQ(+e.target.value)
            }
            console.log("herre", +e.target.value)
        }     
    }

    return(
        <div className="flex justify-between p-1">
            <div className="flex w-full  bg-orange-600">
                <img src={props.p.image} alt="" />
                <div className="flex justify-between w-full px-1 pt-1">
                    <div className=" flex-col">
                        <div>{props.p.name}</div>
                        <div>{props.p.description}</div>
                    </div>
                    <div className="text-black ">
                        <form action="">
                            <input className=" w-10" type="number" onChange={changeQ} defaultValue={q} />
                        </form>
                        <button>Remove</button>
                        
                    </div>
                </div>
                
            </div>
            
            <div className="px-1 pt-1 w-20">
                {props.p.price.toString()}
            </div>
        </div>
    )
    
}