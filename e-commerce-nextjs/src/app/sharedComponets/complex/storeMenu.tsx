export default function StoreMenu() {

    let productTypes:Array<string> = ["food", "shelter"]

    return(
        <div>
            <div> product type</div>
            <div>
                {productTypes.map((type) =>{
                    return(
                        <div>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">{type}</label>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}