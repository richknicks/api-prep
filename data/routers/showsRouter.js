//const router = require("express").Router();
const express = require('express');
const router = express.Router()

const showsDB = require('../helpers/showsModel');



// routes
// GET shows
router.get("/", (req, res)=> {
    showsDB
    .get().then(shows =>{
        res.status(200).json(shows);
    })
    .catch(error=>{
        res.status(500).json({
            errorMessage: `There is an error ${error}`
        })
    })
})
// GET /:id
router.get("/:id",  (req, res)=>{
    const {id}=req.params
    showsDB
    .get(id)
    .then(show=>{
        res.status(200).json(show)
    })
    .catch(error=>{
        res.status(500).json({
            errorMessage: `There is an error ${error}`
        })
    })
})

// GET shows characters /:id
router.get("/:id/characters", (req, res)=>{
    const {id}=req.params
    showsDB
    .getShowsCharacters(id)
    .then(characters=>{
        res.status(200).json(characters)
    })
    .catch(error=>{
        res.status(500).json({
            errorMessage: `There was an error ${error}`
        })
    })
})


// POST
router.post("/", (req, res)=>{
    showsDB
    .insert(req.body)
    .then(()=>{
        res.status(201).json(req.body)
    })
    .catch(error=>{
        res.status(500).json({
            error: `There is an error ${error}`
        })
    })
})

// DELETE /:id
router.delete("/:id", (req, res)=>{
    const {id}=req.params
    showsDB
    .remove(id)
    .then(deleteShow =>{
        res.status(200).json(deleteShow)
    })
    .catch(error=>{
        res.status(500).json({
            error: `There is an error ${error}`
        })
    })
})
// PUT / PATCH /:id
router.put("/:id", (req, res)=>{
    const {id}=req.params
    const updateShow=req.body
    showsDB
    .update(id, updateShow)
    .then(updateShow=>{
        res.status(200).json(updateShow);
    })
    .catch(error=>{
        res.status(500).json({ error: `There is an error ${error}`})
    })
})




module.exports= router;