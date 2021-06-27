import Axios from "axios";
//import React, { Component } from "react";
import React from "react";
import { useState  } from "react";
import "./App.css";
import RecipeTile from './RecipeTile';

function App() {

  const [query, setquery] = useState(' ');
  const [recipes, setrecipes] = useState([]);
  const [healthlabels, sethealthlabels] = useState("vegan");


  const YOUR_APP_ID = "50782348";
  const YOUR_APP_KEY = "302b7d620c81978a65aad15be067155a";

//  var url = "https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free";
//var url = 'https://api.edamam.com/search?q=query&apple&app_id=50782348&app_key=302b7d620c81978a65aad15be067155a&&health=healthlabels';
 
    var url = 'https://api.edamam.com/search?q=query&apple&app_id=50782348&app_key=302b7d620c81978a65aad15be067155a&&health=alcohol-free';

  
  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log("result",result);
    console.log(result.data);
  }

  const onSubmit = (e) => {
     console.log("eeeeeeee==>", e);
     //console.log("e.preventDefault()==>", e.defaultPrevented);
    console.log(" e.target.value==>",  e.target.value);
   //e.defaultPrevent();

    e.preventDefault();
    getRecipes();
  };
  return (
    <div className="App">
   
      <h1>🍕 Food Recipe Plaza🍕 </h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          className="app__input"
          placeholder="Enter_Ingreident"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />
      <select className="app_healthLabels" >
         <option className="option"  onClick={()=> sethealthlabels('vegan')}> 
           vegan
         </option>
          <option className="option"  onClick={()=> sethealthlabels('alcohol-free')}> 
            alcohol-free
         </option>
        
         </select>
      </form>
     
      <div className="app__recipes">

      {
        recipes.map((recipe)=>{
           return <RecipeTile recipe={recipe} />;
            // return <p>{recipe.recipe["label"]}</p>;

        })
      }
    
      </div>
    </div>

  );
}

export default App;
