


export default function Header(props:{}) {

    

    
    return (

        
        <div className="flex flex-col justify-between lg:flex-row w-screen  rounded">
            <button>menu</button>
            <h1>buy lots</h1>
            <div>
                <a href="/login">
                    <button >Sign in / Regiser</button> 
                </a>
                
            </div>

        </div>
    );

}