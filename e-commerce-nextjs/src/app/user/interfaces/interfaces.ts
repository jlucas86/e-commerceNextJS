interface user{
    id:Number,
    email:String,
    username:String,
    password:String,
    // roles
    // stores
}

interface store{
    id:Number,
    name:String,
    description:String,
    user:user|undefined
}

interface product{
    id:Number,
    name:string,
    type:string,
    description:string,
    price:Number,
    store:store| undefined,
    // carts
    // orders
}