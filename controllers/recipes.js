const data = require ('../data')

function findRecipeNames(req, res){
    let names = {'recipeNames': []};
    data.recipes.forEach(function(recipe){
        names.recipeNames.push(recipe.name)  
    })
    res.status(200).json(names)    
}

function getDetails(req, res){
    // make new response object
    let recipeDetails = {
        'details': {
            'ingredients': [],
    }}
    // set variable for name params
    let name = req.params.recipeName
    // tests name param against data set for a name match
    data.recipes.forEach(function(recipe){
        if (recipe.name === name){
            // if true, push each ingredient into the new object
            recipe.ingredients.forEach(function(ingredient){
                recipeDetails.details.ingredients.push(ingredient)
            })
            // add number of steps
            recipeDetails.numSteps = recipeDetails.details.ingredients.length
            //respond with new object
            res.status(200).json(recipeDetails) 
        } 
    })
    //if conditions are not met, return empty json object
    res.status(200).json({}) 
}

module.exports = {
    findRecipeNames,
    getDetails
}