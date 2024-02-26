export default function Product(props:{img:string, imgAlt:string, title:string, price:number}) {
    return (
        <div className=" w-fit border border-2 border-white m-1">
            <img src={props.img} alt={props.imgAlt} />
            <h3>{props.title}</h3>
            <h4>{props.price}</h4>
        </div>
    );
}