'use client'

import { useState } from "react";

import { image } from "@/app/interface/image";

export default function ImageDisplay(props:{images:Array<image>}) {

    const [mainImg, setMainImg] = useState<string>("https://picsum.photos/200/300")

    const changeMain = (i:string) =>{
        setMainImg(i);
    }
    

    return (
        <div>
            
                <div>
                    <img src={mainImg} alt="" />
                </div>
                <div className=" flex">
                    {props.images.map((i)=>{
                        console.log(i.url);
                        
                        return (
                            <div onClick={()=>changeMain(i.url)} >
                                <img src={i.url} alt={i.alt} />
                            </div>
                        );
                    })}
                </div>

            
        </div>
    );
    
}