'use client'

import { ChangeEventHandler, useState } from "react";
import { product } from "../interfaces/interfaces";



export default function ProductComp(props:{p:product}) {

    const [q, setQ] = useState<number>(0)

    const changeQ = (e: ChangeEventHandler<HTMLInputElement>) =>{

        
        if (e.target.value !== ''){
            setQ(+e.target.value)
            console.log("herre", +e.target.value)
        }
            
    }

    return(
        <div className="flex justify-between">
                                <div className="flex w-full bg-orange-600">
                                    <img src={props.p.image} alt="" />
                                    <div className="flex justify-between w-full">
                                        <div className=" flex-col">
                                            <div>{props.p.name}</div>
                                            <div>{props.p.description}</div>
                                        </div>
                                        <div className="text-black">
                                            <form action="">
                                                <input type="number" onChange={changeQ} defaultValue={q} />
                                            </form>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <div>
                                    {props.p.price.toString()}
                                </div>
                            </div>
    )
    
}