export default function UpdateProductMenu(props:{p:product}) {

    
    
    return(
        <div>
            update product menu 
            <div className="">
                <input type="text" name="" id="" placeholder={props.p.name}  onChange={ e =>setProductName(e.target.value)}/>
                <br />
                <input type="text" name="" id="" placeholder={props.p.type}  onChange={ e =>setProductType(e.target.value)}/>
                <br />
                <input type="text" name="" id="" placeholder={props.p.description}  onChange={ e =>setProductDescription(e.target.value)}/>
                <br />
                <input type="number" name="" id="" placeholder={props.p.price.toString()}  onChange={ e =>setProductPrice(Number(e.target.value))}/>
          </div>
        </div>
    )
}