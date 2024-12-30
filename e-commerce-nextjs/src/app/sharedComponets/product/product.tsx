export default function Product(props:{img:string, imgAlt:string, title:string, price:number}) {
    return (
        <div className="justify-items-start w-full p-2 mt-2 bg-white border-white shadow border rounded">
            <img className="w-full rounded" src={props.img} alt={props.imgAlt} />
            <div className=" w-full bg-orange-500 w-">
                <h1>price</h1>
                <h2>title</h2>
                <h4>store/seller</h4>
                <h4>review</h4>
                <h3>description</h3>
                <button>add to cart</button>
                
                
            </div>
        </div>
    );
}