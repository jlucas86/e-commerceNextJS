import { List } from "postcss/lib/list";
import product from "../product/page";
import { useState } from "react";

export default function cart() {


    interface product {
        id: Number; 
        image: string;
        name: String;
        type: String;
        description: String;
        price: number;
    }

    const products: product[] = [
        {id:0, image:"https://picsum.photos/200/300", name:"thing1", type:"car", description:"it drives", price:10000.34},
        {id:1, image:"https://picsum.photos/200/300", name:"thing2", type:"bus", description:"it drives", price:80000.99},
        {id:2, image:"https://picsum.photos/200/300",  name:"thing3", type:"tv", description:"it play", price:8000.85},
        {id:3, image:"https://picsum.photos/200/300", name:"thing4", type:"computer", description:"it compute", price:2456.99},
        {id:4, image:"https://picsum.photos/200/300", name:"thing5", type:"book", description:"it read", price:30.45}
    ]

    var subtotal:number = 0
    var shiping:number = Math.round(Math.random()*10000)/100


    for( let i in products)
        subtotal += products[i].price
    
    var total = Math.round((subtotal + shiping)*100)/100
    
    return(
        <div>
            <div>title bar</div>
            <div className=" flex justify-between bg-red-600 mx-8">
                <div className=" bg-blue-800 w-full">
                    {products.map((p)=> {
                        return(
                            <div className="flex justify-between">
                                <div className="flex">
                                    <img src={p.image} alt="" />
                                    <div className=" flex-col">
                                        <div>{p.name}</div>
                                        <div>{p.description}</div>
                                    </div>
                                </div>
                                
                                <div>
                                    {p.price.toString()}
                                </div>
                            </div>
                    )})}
                </div>
                <div className=" bg-green-700 w-64"> 
                    Summary
                    <div>
                        <div className="flex justify-between">
                            <p>item(s):</p>
                            <p>
                                {/* {products.map((p)=> { return(total = total+ p.price) })} */}
                                {Math.round(subtotal*100)/100}
                            </p>
                        </div>  
                        <div className="flex justify-between">
                            <p> Est. Delivery:</p>
                            <p> {shiping} </p>    
                        </div> 
                    </div>
                    <b>

                        <div className=" flex justify-between border-b-2">
                            <p>Apple Promo Code</p>
                            <button> + </button>
                        </div>
                    </b>
                    <div className=" flex justify-between">
                        <p> Est. Total: </p>
                        <p><b>{total} </b></p>
                    </div>
                    
                    <button className=" bg-orange-500"> SECURE CHECKOUT</button>
                    <p>OR</p>
                    <button className=" bg-blue-700"> 
                        <b><i>PAYPAL</i></b> Checkout
                    </button>
                 </div>
            </div>
            
        </div>
    );
}