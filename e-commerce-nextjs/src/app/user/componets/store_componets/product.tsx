export default function Product(props:{ p:product}) {
    
    // get product based on productId, this will likly be changed to receving the 
    // product from the parent, to reduce redundant API calls

    return(
        <div className="">
            <div>{props.p.name}</div>
            <div>{props.p.description}</div>
            <div>{props.p.price}</div>
        </div>
    );

}