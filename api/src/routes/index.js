const { Router } = require('express');
const recipeRoute = require ("./recipes.js");


const router = Router();

router.use("/recipes", recipeRoute)

module.exports = router;
