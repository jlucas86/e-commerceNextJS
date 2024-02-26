'use client'

import { useState } from "react";

export default function product() {

    let imgs : string[] = ["https://picsum.photos/200/300", "https://picsum.photos/200/200","https://picsum.photos/300/300","https://picsum.photos/400/300"]    

    const [mainImg, setMainImg] = useState<string>("https://picsum.photos/200/300")

    const changeMain = (i:string) =>{
        setMainImg(i);
    }
    
    return(
        <div className= " w-screen h-screen flex">
            <div>
                <div>
                    <img src={mainImg} alt="" />
                </div>
                <div className=" flex">
                    {imgs.map((i)=>{
                        return (
                            <div onClick={()=>changeMain(i)} >
                                <img src={i} alt="none" />
                            </div>
                        );
                    })}
                </div>

            </div>
            <div className=" w-full h-screen border-2 border-white rounded bg-slate-900 shadow-lg">
                <h1>product name</h1>
                <h3>price</h3>
                <button>add to cart</button>
                <p>desciption</p>
                
            </div>

        </div>
    );
    
}