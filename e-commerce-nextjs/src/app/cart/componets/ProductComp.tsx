import { product } from "../interfaces/interfaces";



export default function ProductComp(props:{p:product}) {

    return(
        <div className="flex justify-between">
                                <div className="flex">
                                    <img src={props.p.image} alt="" />
                                    <div className=" flex-col">
                                        <div>{props.p.name}</div>
                                        <div>{props.p.description}</div>
                                    </div>
                                </div>
                                
                                <div>
                                    {props.p.price.toString()}
                                </div>
                            </div>
    )
    
}