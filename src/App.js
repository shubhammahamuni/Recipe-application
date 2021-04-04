import logo from './logo.svg';
import {useEffect , useState} from "react";
import './App.css';
import RecipeeList from "./component/recipeegrid";

function App() {
  const [recipe , setrecipe] = useState([]);
  const [text , settext] = useState("");
  const [search ,setsearch] = useState("chicken");

  const APP_ID  = "bc93ba81";
  const APP_KEY = "8b080b7ef1618cdb457139cb257068ea";
  const url = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`;
//new
  useEffect(()=>{
  getdata();
  },[search])

  const getdata = async ()=>{
    const responce = await fetch(url);
    const data  = await responce.json();
    //console.log(data);
    setrecipe(recipe=>data.hits);
  }
  const handlesubmit = (e)=>{
      e.preventDefault();
      setsearch(text);
    
  }
  const updatechange = (e)=>{
    settext(e.target.value);
     //console.log(text);
  }

  

  return (
    <div className="container">
        <h1>Search Your Favourite Recipe</h1>
        <nav className="navba navbar-expand-sm ">
            <form className="form-inline my-2  my-lg-0 " onSubmit={handlesubmit}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={updatechange}/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
        <div className="recipe-list">
       {recipe.length>0?recipe.map((recipe,index)=>{
          return <RecipeeList 
                  key={index}
                  recipe_name= {recipe.recipe.label} 
                  image ={recipe.recipe.image} 
                  cuisinnetyepe = {recipe.recipe.cuisineType} 
                  calories={recipe.recipe.calories}  
                  url_of_recipe ={recipe.recipe.url} />
       }):<h2>Not Found !!!</h2> }
       </div>
        
    </div>
  );
}

export default App;
