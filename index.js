var express = require("express");
const { findRecipeNames, getDetails } = require("./controllers/recipes");
var app = express();

//get request to find all the recipe names only
app.get("/recipes", findRecipeNames)

// get request for ingredients and number of steps
app.get('/recipes/details/:recipeName', getDetails)

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

