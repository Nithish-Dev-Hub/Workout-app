const express = require("express");
const workoutroutes = require("../backend/routes/workouts");
const connectionString = require("./mongoAUTH/authM");

// Express app
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routes
app.use("/api/workouts",workoutroutes);


// Middleware 
/**
 * This Part is used to interoogate the req while reaching the server.
 */
app.use((req, res, next) => {
    console.log(req.path);
    /** next is a function that allows our middleware 
    * to execute the above line and pass on to the next code part
    *  */
    next();
});

// Mongo db Connect
mongoose.connect(connectionString)
.then(()=>{
    // Listen from Requests only if we connect to the DB
    app.listen(8000, () =>{
        console.log(`Express Server Ready at http://localhost:${8000}`);
    });
})
.catch((error)=>{
    console.log(error);
});

