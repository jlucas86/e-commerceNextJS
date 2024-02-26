
export default function product() {

    return(
        <div className= " w-screen h-screen flex">
            <div> image wraper</div>
            <div className=" w-full h-screen border-2 border-white rounded bg-slate-900 shadow-lg">
                <h1>product name</h1>
                <h3>price</h3>
                <button>add to cart</button>
                <p>desciption</p>
                
            </div>

        </div>
    );
    
}