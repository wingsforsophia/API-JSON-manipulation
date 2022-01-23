const data = require ('../data')

function findRecipeNames(req, res){
    let names = {'recipeNames': []};
    data.recipes.forEach(function(recipe){
        names.recipeNames.push(recipe.name)  
    })
    res.status(200).json(names)    
}

function getDetails(req, res){
    let recipeDetails = {
        'details': {
            'ingredients': [],
    }}

    let name = req.params.recipeName
    
    data.recipes.forEach(function(recipe){
        if (recipe.name === name){
            recipe.ingredients.forEach(function(ingredient){
                recipeDetails.details.ingredients.push(ingredient)
            })
            recipeDetails.numSteps = recipeDetails.details.ingredients.length
            res.status(200).json(recipeDetails) 
        } 
    })

    
}

module.exports = {
    findRecipeNames,
    getDetails
}