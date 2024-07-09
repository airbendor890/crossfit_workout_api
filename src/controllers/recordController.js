const recordService = require("../services/recordServices");

const getRecordForWorkout = (req,res)=>{
    const {
        params: { workoutId },
      } = req;

    const record = recordService.getRecordForWorkout(workoutId);
    res.send({ status: "OK", data: record });

}; 

module.exports={ getRecordForWorkout };


// const getOneWorkout = (req, res) => {
//     const {
//       params: { workoutId },
//     } = req;
//     if (!workoutId) {
//       return;
//     }
//     const workout = workoutService.getOneWorkout(workoutId);
//     res.send({ status: "OK", data: workout });
//   };
  