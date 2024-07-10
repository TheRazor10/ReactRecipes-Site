const apiKey = '554aa4d577784429af184a84e1e95f9d';
export const getAllrecipes = async () => {
    try {
        const recipes = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`);
        const data = await recipes.json();

        return data.results;

    } catch (error) {

        console.log('Error');
    }
};

export const searchRecipes = async (query) => {
    try {
        const recipes = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`);
        const data = await recipes.json();
        console.log(data);

        return data.results;

    } catch (error) {

        console.log('Error');
    }
};
export const getRecipesInformation = async (id) => {
    try {
        const recipes = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
        const data = await recipes.json();

        return data;

    } catch (error) {

        console.log('Error');
    }
}
export const summarizeRecipe = async (id) => {
    try {
        const recipes = await fetch(`https://api.spoonacular.com/recipes/${id}/summary?apiKey=${apiKey}`);
        const data = await recipes.json();

        return data.results;

    } catch (error) {

        console.log('Error');
    }
}
export const randomRecipes = async () => {
    try {
        const recipes = await fetch(`https://api.spoonacular.com/recipes/random?number=6&apiKey=${apiKey}`);
        const data = await recipes.json();

        return data.results;

    } catch (error) {

        console.log('Error');
    }
}

