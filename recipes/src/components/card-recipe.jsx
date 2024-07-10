import Card from 'react-bootstrap/Card';
import { useRecipeContext } from '../context/recipe-context';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import RecipeInfo from './recipe-info';

function CardRecipe({ recipe }) {

    const { addToFavorites, InfoHandler, favorite, removeToFavorites, recipeInfo } = useRecipeContext();

  const isFavorite = favorite.some((fav) => fav.id === recipe.id);

  return (
    <Col style={{paddingTop: '10px'}} xs={4}>
      <Card style={{ width: 'auto' }} className='h-100'>
        <Card.Img variant='top' src={recipe?.image} style={{width: 'auto'}} />
        <Card.Body>
          <Card.Title>{recipe?.title}</Card.Title>
          <Button
            variant={isFavorite ? 'danger' : 'secondary'}
            onClick={() => {
              if (isFavorite){
                removeToFavorites(recipe.id);
              }
              else{
                addToFavorites(recipe);
              }
            }}
            style={{ marginLeft: '10px' }}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </Button>
          <Button style={{width: 'auto', marginLeft: '25px'}} variant="primary" onClick={() => InfoHandler(recipe.id)}>
            View Details
          </Button>
        </Card.Body>
      </Card>
      {recipeInfo ? <RecipeInfo recipeInfo={recipeInfo}/> : null}
    </Col>
  );
}

export default CardRecipe;