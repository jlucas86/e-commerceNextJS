export default function FilterMenu(props:{}) {
    
    let types = ["toy", "food", "computer", "cloths"]

    return (
        <div>
            <h2> Menu</h2>
            <div>
                <h3>Search</h3>
                <input type="text" name="" id="" placeholder="search product" />
            </div>
            <div>
                <h3>Types</h3>
                <div>
                    {types.map((type) =>{
                        return(<div>
                            <input type="checkbox" /> {type}
                        </div>);
                    })}
                </div>
            </div>
        </div>
    );

}