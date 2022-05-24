const { Router } = require('express');
const {Recipe} = require("../db");
const {Op} = require("sequelize")
const router = Router();
const axios = require("axios")


const recipes = []
router.get("/", (req,res,next)=>{
    const name = req.query.name;
    if(!name){
    axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=793acf980ad2494d91a5d6b16d60a740")
    .then ((api)=>{
        api.data.results.map((recipe)=>{
            recipes.push(recipe)
        })
        Recipe.findAll({
        })
        let recipesN = recipes.concat(Recipe)
        console.log(recipesN)
        res.send(recipesN)
    })
    .catch((error)=>{
        next(error)
    })}
})
router.get("/:id", async (req,res,next) =>{
    try{
        const id= req.params.id;
        let recipe = await Recipe.findOne({
            where: { 
                id: {
                    [Op.iLike]: "%" + id + "%"
                }
            },
        })
        if(recipe){
        return res.send(recipe)}
        else {
            recipe = axios.get("https://api.spoonacular.com/recipes/complexSearch?query=${id}&addRecipeInformation=true&apiKey=793acf980ad2494d91a5d6b16d60a740")
            return res.send(recipe)
        }
    }
    catch(error){
        next(error)
    }
})
router.post("/recipes", async(req,res,next)=>{
    try{
    let newRec = await Recipe.create({
        id: req.body.id,
        name: req.body.name,
        summary: req.body.summary,
        score: req.body.score,
        healthScore: req.body.healthScore,
        analyzedInstructions: req.body.analyzedInstructions,
        dietType: req.body.dietType,
    })
    res.send(newRec)}
    catch(error){
        console.log(error)
    }
    }
)
module.exports = router;