import Header from "./componets/header/Header";
export default function home() {

  return (
    <div>
      <Header></Header>
      <div className=" flex">
        <div>menu/filters</div>
        <div>item display</div>
      </div>
    </div>
  );
  
}