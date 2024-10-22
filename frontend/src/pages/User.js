import { useEffect, useState } from "react";

// components
import WorkoutDetails from "../components/WorkoutDetails";

const User = () => {
    const [workouts, setWorkouts] = useState(null)
  
    useEffect(() => {
      const fetchWorkouts = async () => {
        const response = await fetch('/api/workouts')
        const json = await response.json()
  
        if (response.ok) {
          setWorkouts(json)
        }
      }
  
      fetchWorkouts()
    }, [])
  
    return (
      <div className="home">
        <div className="workouts">
          {workouts && workouts.map(workout => (
            <WorkoutDetails workout={workout} key={workout._id} setWorkouts={setWorkouts}/>
          ))}
        </div>
      </div>
    )
  }

export default User