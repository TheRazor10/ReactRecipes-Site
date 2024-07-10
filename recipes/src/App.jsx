import { useState, useEffect } from 'react'
import NavScrollExample from './components/navbar';
import RecipeCard from './components/card-recipe';
import { getAllrecipes } from './services/recipes'
import CarouselStart from './components/CarouselStart';
import CardRecipe from './components/card-recipe';
import { useRecipeContext } from './context/recipe-context';
import { Container, Row } from 'react-bootstrap';
import Footer from './components/footer';

function App() {
  const { recipes, randomRecipes } = useRecipeContext();
  console.log(recipes);

  return (
    <>
      <NavScrollExample></NavScrollExample>
      <CarouselStart></CarouselStart>
      <div className="recipe-list">
        <h1 style={{ fontWeight: 'bold', textAlign: 'center', padding: '10px' }}>Most popular ones</h1>
        <Container>
          <Row>
            {randomRecipes?.map((recipeData, index) => {
              return <CardRecipe key={recipeData?.id} recipe={recipeData} />
            })}
          </Row>
        </Container>
      </div>

      <div className="recipe-list">
        <h1 style={{ fontWeight: 'bold', textAlign: 'center', padding: '10px' }}>Best of the day</h1>
        <Container>
          <Row>
            {recipes?.map((recipeData, index) => {
              return <CardRecipe key={recipeData?.id} recipe={recipeData} />
            })}
          </Row>
        </Container>
        <div>
          <Footer />
        </div>
      </div>

    </>
  )
}

export default App
