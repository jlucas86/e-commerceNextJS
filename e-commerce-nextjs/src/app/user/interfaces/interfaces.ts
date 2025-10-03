interface user{
    id:Number,
    email:String,
    username:String,
    password:String,
    // roles
    // stores
}

interface store{
    id:number,
    name:String,
    description:String,
    user:user|undefined
}

interface product{
    id:number,
    name:string,
    type:string,
    description:string,
    price:number,
    store:store| undefined,
    // carts
    // orders
}

interface productPage{
        products:Array<product>,
        empty:boolean,
        first:boolean,
        last:boolean,
        pageNumber:number,
        size:number,
        numberOfElementsPerPage:number,
        totalElements:number,
        totalPages:number,
        
    }