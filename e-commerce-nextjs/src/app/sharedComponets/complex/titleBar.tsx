export default function TitleBar() {
    return (
        <div className=" h-14 w-screen px-7 flex justify-between items-center bg-white shadow" >
            <div className=" flex justify-center items-center">
                <div>menu</div>
                <div className=" flex  border rounded-3xl  my-2">
                    <input type="text" name="searchBar" id="searchBar"  />
                    <button className=" rounded-3xl bg-purple-600"> search</button>
                </div>
                

            </div>
            <div>websit name</div>
            <div>account stuff</div>
        </div>)
}