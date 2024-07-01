const WorkoutDetails = ({ workout, setWorkouts }) => {
    const deleteRecord = async (val) =>{
      console.log(val);
      const response = await fetch(`/api/workouts/${val}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response);
      if(response.status === 200) {
        const response = await fetch('/api/workouts')
        const json = await response.json()
  
        if (response.ok) {
          setWorkouts(json)
        }
      }
    };
    return (
      <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Number of reps: </strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
        <button>EDIT</button>
        <button onClick={() => deleteRecord(workout._id)}>Delete</button>

      </div>
    )
  }
  
  export default WorkoutDetails