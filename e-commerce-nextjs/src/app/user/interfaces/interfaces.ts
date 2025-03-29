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
    price:Number,
    store:store| undefined,
    // carts
    // orders
}