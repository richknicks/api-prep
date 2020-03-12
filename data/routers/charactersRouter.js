const express = require("express");
const router = express.Router();

const charactersDB = require("../helpers/charactersModel");

// GET characters
router.get("/", (req, res)=>{
    charactersDB
    .get()
    .then(characters => {
        res.status(200).json(characters);
    })
    .catch(error=>{
        res.status(500).json({
            error: `There is an error ${error}`
        })
    })
})

// GET a character by :id
router.get("/:id", (req, res)=>{
    const{id}=req.params
    charactersDB
    .get(id)
    .then(characters=>{
        res.status(200).json(characters)
    })
    .catch(error=>{
        res.status(500).json({
            error:`There is an error ${error}`
        })
    })
})

// POST character
router.post("/", (req, res)=>{
    const newCharacter=req.body
    charactersDB
    .insert(newCharacter)
    .then(()=>{
        res.status(201).json(req.body)
    })
    .catch(error=>{
        res.status(500).json({error: `There is an error ${error}`})
    })
})

// DELETE /:id
router.delete("/:id", (req, res)=>{
    const {id}=req.params
    charactersDB
    .remove(id)
    .then(deleteCharacter =>{
        res.status(200).json(deleteCharacter)
    })
    .catch(error =>{
        res.status(500).json({
            error: `This is an error ${error}`
        })
    })
})

// PUT /:id
router.put("/:id", (req, res)=>{
    const {id}=req.params
    const updateCharacter=req.body
    charactersDB
    .update(id, updateCharacter)
    .then(updateCharacter=>{
        res.status(200).json(updateCharacter)
    })
    .catch(error=>{
        res.status(500).json({
            error: `There was an error ${error}`
        })
    })
})




module.exports = router;