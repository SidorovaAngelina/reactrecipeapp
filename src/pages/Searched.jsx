/*import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Serched() {

  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, []);

  return (
    <div>Serched</div>
  )
}

export default Serched;
*/