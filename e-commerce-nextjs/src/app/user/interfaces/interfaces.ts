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
    name:String,
    type:String,
    description:String,
    price:Number,
    store:store,
    // carts
    // orders
}