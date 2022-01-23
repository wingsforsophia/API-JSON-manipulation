var express = require("express");
const recipesCtrl = require("./controllers/recipes");
var app = express();

//get request to localhost:3000/recipes to find all the recipe names only
app.get("/recipes", recipesCtrl.findRecipeNames)

// get request to localhost:3000/recipes/details/:recipeName for ingredients and number of steps
app.get('/recipes/details/:recipeName', recipesCtrl.getDetails)

//post request to http://localhost:3000/recipes 
app.post('/recipes', recipesCtrl.addRecipe)



//server
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

