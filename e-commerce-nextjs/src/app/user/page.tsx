import Store from "./componets/store";

export default function user() {
    return(
        <div>
            user page
            <div className=" flex flex-wrap">
                <div className=" w-screen lg:w-1/2 border border-2 border-white rounded">orders</div>
                <div className=" w-screen lg:w-1/2 border border-2 border-white rounded">payment methods</div>
                <Store></Store>
                <div className=" w-screen lg:w-1/2 border border-2 border-white rounded">stores</div>
                <div className=" w-screen lg:w-1/2 border border-2 border-white rounded">user info</div>
            </div>
            

        </div>
    );
}