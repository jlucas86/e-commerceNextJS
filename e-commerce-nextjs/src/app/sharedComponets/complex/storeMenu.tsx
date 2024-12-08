export default function StoreMenu() {

    let productTypes:Array<string> = ["food", "shelter"]

    return(
        <div className=" absolute border border-gray-400 rounded bg-white p-3 opacity-100">
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