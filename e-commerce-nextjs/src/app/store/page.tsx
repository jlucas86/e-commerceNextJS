import Product from "../componets/product/product";

export default function store() {
    return (
        <div className=" w-screen h-screen">
            <h1>store name</h1>
            <div className="  flex border border-2 border-white rounded">
                <div className=" border border-2 border-white rounded">
                    filters
                    <div>
                        <h3>Type</h3>
                    </div>
                </div>
                <div className=" w-full flex flex-wrap border border-2 border-white rounded">
                    <Product img={"https://picsum.photos/200/300"} imgAlt="randome photo" title={"title"} price={200}></Product>
                </div>

                
            </div>
        </div>
    );
}