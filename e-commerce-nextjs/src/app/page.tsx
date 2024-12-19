'use client'

import Header from "./componets/header/header";
import FilterMenu from "./componets/filterMenu/filterMenu";
import Product from "./sharedComponets/product/product";
import { useState } from "react";
import PageHeader from "./sharedComponets/complex/pageHeader";
export default function home() {

  const [mainStyle, setMainStyle] = useState("opacity-100")

  return (
    
    <div >
      <PageHeader mainStyle={mainStyle} setMainStyle={setMainStyle}></PageHeader>

      <div className={mainStyle}>

          <div className=" flex">
            <FilterMenu></FilterMenu>
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
          </div>
      </div>
      
      
    </div>
  );
  
}