import Header from "./componets/header/header";
import FilterMenu from "./componets/filterMenu/filterMenu";
import Product from "./sharedComponets/product/product";
export default function home() {

  return (
    <div >
      <Header></Header>
      <div className=" flex">
        <FilterMenu></FilterMenu>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-1 w-full">
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
      </div>
    </div>
  );
  
}