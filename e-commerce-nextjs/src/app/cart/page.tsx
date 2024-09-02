import { List } from "postcss/lib/list";
import product from "../product/page";

export default function cart() {


    interface product {
        id: Number; 
        name: String;
        type: String;
        description: String;
        price: Number;
    }

    const products: product[] = [
        {id:0, name:"thing1", type:"car", description:"it drives", price:10000.34},
        {id:1, name:"thing2", type:"bus", description:"it drives", price:80000.99},
        {id:2, name:"thing3", type:"tv", description:"it play", price:8000.85},
        {id:3, name:"thing4", type:"computer", description:"it compute", price:2456.99},
        {id:4, name:"thing5", type:"book", description:"it read", price:30.45}
    ]
    
    
    return(
        <div>
            <div>title bar</div>
            <div className=" flex justify-between bg-red-600 mx-8">
                <div className=" bg-blue-800 w-full">
                    {products.map((p)=> {
                        return(
                            <div className="flex justify-between">
                                <div className="flex">
                                    image
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
                <div className=" bg-green-700 w-64"> pricing break down </div>
            </div>
            
        </div>
    );
}