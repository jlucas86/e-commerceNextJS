import Product from "../sharedComponets/product/product"

export default function search() {
    
    return (
        <div className=" w-screen">
            <div>header</div>
            <div className=" flex">
                <div> filter menu</div>
                <div>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  gap-1 w-full">
                        <Product img={"https://picsum.photos/200/300"} imgAlt="randome photo" title={"title"} price={200}></Product>
                        <Product img={"https://picsum.photos/200/300"} imgAlt="randome photo" title={"title"} price={200}></Product>
                        <Product img={"https://picsum.photos/200/300"} imgAlt="randome photo" title={"title"} price={200}></Product>
                        <Product img={"https://picsum.photos/200/300"} imgAlt="randome photo" title={"title"} price={200}></Product>
                        <Product img={"https://picsum.photos/200/300"} imgAlt="randome photo" title={"title"} price={200}></Product>
                        <Product img={"https://picsum.photos/200/300"} imgAlt="randome photo" title={"title"} price={200}></Product>
                        <Product img={"https://picsum.photos/200/300"} imgAlt="randome photo" title={"title"} price={200}></Product>
                        <Product img={"https://picsum.photos/200/300"} imgAlt="randome photo" title={"title"} price={200}></Product>
                        <Product img={"https://picsum.photos/200/300"} imgAlt="randome photo" title={"title"} price={200}></Product>
                        <Product img={"https://picsum.photos/200/300"} imgAlt="randome photo" title={"title"} price={200}></Product>
                        <Product img={"https://picsum.photos/200/300"} imgAlt="randome photo" title={"title"} price={200}></Product>
                        <Product img={"https://picsum.photos/200/300"} imgAlt="randome photo" title={"title"} price={200}></Product>
                        <Product img={"https://picsum.photos/200/300"} imgAlt="randome photo" title={"title"} price={200}></Product>
                        <Product img={"https://picsum.photos/200/300"} imgAlt="randome photo" title={"title"} price={200}></Product>
                        <Product img={"https://picsum.photos/200/300"} imgAlt="randome photo" title={"title"} price={200}></Product>
                        <Product img={"https://picsum.photos/200/300"} imgAlt="randome photo" title={"title"} price={200}></Product>
                    </div>
                    <div className=" w-full flex items-center justify-center">
                        pages
                    </div>
                </div>
                

            </div>
        </div>
    );

}