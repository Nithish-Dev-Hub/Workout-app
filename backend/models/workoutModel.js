// Mongoose required for creating the SCHEMA structure
const mongoose = require('mongoose');

// Initialize the schema in a variable name
const Schema = mongoose.Schema;

// Creating a custom schema 
const workoutSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
},{ timestamps: true });

/** 
 * @type is used to specify the type of the data we sih to save 
 * @required is used to notice the application that the particular value is a mandatory one 
 * @timestamps are predefined attributes 
 * if set to true gives us the time the data it is created
*/


/**
 * This below piece of code will create a model for us to save the data which will be 
 * imported through out the code whenever we do a CRUD operation.
 * kinda pattern
 */
module.exports = mongoose.model("Workout", workoutSchema);

