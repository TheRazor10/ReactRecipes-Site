import React, { useContext, useEffect, useState } from "react";
import { getAllrecipes, getRecipesInformation, randomRecipes, searchRecipes, summarizeRecipe } from "../services/recipes";
import CardRecipe from "../components/card-recipe";

const RecipeContext = React.createContext();

export function useRecipeContext() {
  return useContext(RecipeContext);
}

export function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [randomRecipes, setRandomRecipes] =useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("favorite")) || []
  );
  const [recipeInfo, setRecipeInfo] = useState([]);
  const [summary, setSummary] = useState([]);

  const [search, setSearch] = useState('');
  const [message, setMessage] = useState({
    errorMessage: "",
    successMessage: "",
  });


  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(favorite));
  }, [favorite]);

  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);

      try {
        const data = await getAllrecipes();
        console.log(data);
        setRecipes(data);
      } catch (error) {
        setMessage({
          errorMessage: error?.message || "Error fetching recipes",
          successMessage: "",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchRandomRecipes();
    fetchRecipes();
  }, []);

  const searchHandler = async () => {
    const foundRecipes = await searchRecipes(search);

    setRecipes(foundRecipes);

    console.log(foundRecipes);
  }

  const addToFavorites = (recipes) => {
    setFavorite([...favorite, recipes])
    console.log("it is working")
  }

  const removeToFavorites = (id) => {
    const updateFavorites = favorite.filter((recipe) => recipe.id !== id)
    setFavorite(updateFavorites);
  }

  const InfoHandler = async (id) => {
    const recipeDetails = await getRecipesInformation(id);
    console.log('YES')
    setOpen(true);
    setRecipeInfo(recipeDetails);
  };
  
  const SummaryInfo = () => {
    const fetchSummary = async () => {
      setIsLoading(true);

      try {
        const data = await summarizeRecipe(id);
        console.log(data);
        setSummary(data);
      } catch (error) {
        setMessage({
          errorMessage: error?.message || "Error fetching recipes",
          successMessage: "",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchSummary();
  };


  const fetchRandomRecipes = async () => {
    setIsLoading(true);

    try {
      const data = await randomRecipes();
      console.log(data);
      setRandomRecipes(data);
    } catch (error) {
      setMessage({
        errorMessage: error?.message || "Error fetching recipes",
        successMessage: "",
      });
    } finally {
      setIsLoading(false);
    }
  };


  const value = {
    recipes,
    isLoading,
    message,
    search,
    setSearch,
    searchHandler,
    favorite,
    setFavorite,
    addToFavorites,
    setRecipeInfo,
    recipeInfo,
    SummaryInfo,
    InfoHandler,
    removeToFavorites,
    open,
    setOpen,
    randomRecipes,
    setRandomRecipes
  };

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
}
