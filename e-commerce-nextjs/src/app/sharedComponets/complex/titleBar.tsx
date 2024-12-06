'use client'


export default function TitleBar(props:{AccountMenu:Function}) {

    let userStat:boolean = true;

    const menuButtonClick = () =>{
        console.log("menu click")
    }

    const searchButtonClick = () =>{
        console.log("search click")
    }

    const accountButtonClick = () =>{
        console.log("account click")
    }

    const  homeClick = () =>{
        console.log("home click")
        
    }

    const accountInfo = () =>{
        props.AccountMenu()
    }

    return (
        <div className=" h-14 w-screen px-7 flex justify-between items-center bg-white shadow" >
            <div className=" flex justify-center items-center">
                <div className=" mr-4">
                    <button onClick={menuButtonClick}>menu</button>
                </div>
                <div className=" flex  border-purple-300 border-2 rounded-3xl  my-2 bg-purple-300 ">
                    <input type="text" name="searchBar" id="searchBar" className=" rounded-3xl bg-purple-300 border-none px-2" />
                    <button className=" px-2 rounded-3xl bg-purple-400 border-2 border-purple-400" onClick={searchButtonClick}> search</button>
                </div>
                

            </div>
            <a href="/">
                <button >websit name</button> 
            </a>
            <div onClick={homeClick}></div>
            <div>
                <div>
                    {userStat ? 
                    (<div onClick={accountInfo}>
                        Account Info
                    </div>): 
                    (<div>
                        Log In / Register
                    </div>) }
                </div>
            </div>
        </div>)
}