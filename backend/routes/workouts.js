const express = require("express");
 const router = express.Router();


const {createWorkout,  getAllWorkout, getMatchedWorkout, deleteWorkout, updateWorkout} = require("../controllers/workoutController");

// Get all the records
 router.get("/", getAllWorkout);

 // Get single records
 router.get("/:value/:id", getMatchedWorkout);

//  POST a workout
 router.post("/", createWorkout);

//  Delete a workout
 router.delete("/:id", deleteWorkout);

//  Update a workout
 router.patch("/:id", updateWorkout);

 module.exports = router;