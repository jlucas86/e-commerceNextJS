export default function Product(props:{ p:product}) {
    
    // get product based on productId, this will likly be changed to receving the 
    // product from the parent, to reduce redundant API calls

    return(
        <div className=" bg-red-700 w-full flex justify-between">
            <div> picture of product</div>
            <div>
                <h3>{props.p.name}</h3>
                <p>{props.p.description}</p>
            </div>
            <p>{props.p.price}</p>
        </div>
    );

}