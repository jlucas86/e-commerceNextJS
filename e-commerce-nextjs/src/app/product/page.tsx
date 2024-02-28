

import { useState } from "react";

import ImageDisplay from "./componets/ImageDisplay";

import { image } from "../interface/image";

export default function product() {

    let placeholder : image = {url:"https://picsum.photos/200/300", alt:"random"}
    let placeholder1 : image = {url:"https://picsum.photos/200/200", alt:"random"}
    let placeholder2 : image = {url:"https://picsum.photos/300/300", alt:"random"}
    let placeholder3 : image = {url:"https://picsum.photos/400/300", alt:"random"}
    let placeholder4 : image = {url:"https://picsum.photos/100/300", alt:"random"}

    let imgs : image[] = [placeholder, placeholder1, placeholder2, placeholder3, placeholder4]    

    
    return(
        <div className= " w-screen h-screen flex">
            
            <ImageDisplay images={imgs}></ImageDisplay>

            <div className=" w-full h-screen border-2 border-white rounded bg-slate-900 shadow-lg">
                <h1>product name</h1>
                <h3>price</h3>
                <button>add to cart</button>
                <p>desciption</p>
                
            </div>

        </div>
    );
    
}