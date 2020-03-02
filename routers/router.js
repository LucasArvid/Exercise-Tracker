
const express = require("express")
const Exercise = require("../model/exercise").Exercise

const router = express.Router()

router.post("/exercise/new-user", (req, res) =>{
    var username = new Exercise({
      username: req.body.username
    })
    username.save( (err, data) =>{
      if (err) console.error(err)
      res.json({
        username: req.body.username,
        _id: data._id
      })
    })
})

router.get("/exercise/users", (req, res) => {
    var userArray = []
    Exercise.find({}).select({exercise: 0, __v: 0}).exec( (err, data) =>{
        if (err) return console.error(err)
        userArray.push(data)
        res.json(userArray)
    })
})

router.post("/exercise/add", (req, res) => {
    var request = req.body
    var date = request.date
    if(date === "") {
      date = new Date()
      date = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                      .toISOString()
                      .split("T")[0]
    }
    var exerciseToAdd = {desc: request.description, duration: request.duration, date: date}
    
    Exercise.findOneAndUpdate({_id: request.userId}, 
                              {$push: {exercise: exerciseToAdd}},
                              {new: true},
                              (err, data) =>{
        if (err) return console.error(err)                              
        res.json({
            user: data.username,
            exercises: data.exercise[data.exercise.length - 1]
        })
    })
})


router.get("/exercise/log", (req, res) => {
    var userId = req.query.userId
    if(userId){
        
        
        let from = req.query.from
        let to = req.query.to
        let limit = req.query.limit
        
        if(typeof from !== "undefined"){
            Exercise.findOne({_id: userId}, (err, user) => {
                if (err) return console.error(err)
                if(user){
                    const {username, exercise} = user
                    let log = [...exercise]
                    console.log(log)
                    log = log.filter(exercises => exercises.date >= from)
                    
                    if(to) {
                        log = log.filter(exercises => exercises.date < to)
                    }
                    if(limit){
                        log = log.slice(0,limit)
                    }
                    res.json({
                        username: username,
                        exercise: log
                    })
                }
            })
        } else {
            Exercise.findOne({_id: userId}, (err, data) =>{
                if (err) return console.error(err)
                res.json({
                exercises: data.exercise,
                count: data.exercise.length
                })
            })
        } 
    }   
})

module.exports = router