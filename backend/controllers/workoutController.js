const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// Get all workouts
const getAllWorkout = async(req, res) =>{
    
    try {
        const workout = await Workout.find({}).sort({createdAt: -1});
        res.status(200).json(workout);
    }
    catch (err){
        res.status(400).json({error: err.message});
    }
};

// Get a single workout
const getMatchedWorkout = async (req,res) => {
    try {
        const key = req.params.value;
        const id = req.params.id;
        const workout = await Workout.find({[key]: id}).sort({createdAt: -1});
        if (workout.length) {
            res.status(200).json(workout);
        }
        else {
            const err = {error: "no results for that matching id"};
            res.status(404).json(err);
        }
        
    }
    catch (err) {
        res.status(400).json({error: err.message});
    }
};

// Create a workout
const createWorkout = async(req, res) =>{
    const {title, load, reps} = req.body;

    try {
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout);
    }
    catch (err){
        res.status(400).json({error: err.message});
    }
};

// delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    const workout = await Workout.findOneAndDelete({_id: id})
  
    if(!workout) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    res.status(200).json(workout)
  }
  
// update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    const workout = await Workout.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!workout) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    res.status(200).json(workout)
  }

module.exports = {createWorkout,  getAllWorkout, getMatchedWorkout, deleteWorkout, updateWorkout};