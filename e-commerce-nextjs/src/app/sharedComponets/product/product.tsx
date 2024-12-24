export default function Product(props:{img:string, imgAlt:string, title:string, price:number}) {
    return (
        <div className=" p-2 mt-2 bg-white w-fit border-white shadow border rounded">
            <img src={props.img} alt={props.imgAlt} />
            <h3>{props.title}</h3>
            <h4>{props.price}</h4>
        </div>
    );
}