const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')


const PORT = process.env.PORT || 3020;
const app = express();


// app.use(bodyParser.json())
app.use(express.json())
app.use(cors())

const uri = "mongodb+srv://EGD123:eY0OKatyuPtjPA1j@egd.z7obr2r.mongodb.net/questionSet?retryWrites=true&w=majority&appName=EGD"
mongoose.connect(uri)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

//define mongodb schema

const questionScema = new mongoose.Schema({
    question: String,
    options: [String],
    answer: String
})

/* const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

//create model
*/

const Question = mongoose.model("Question",questionScema,"questions")

/*
const User = mongoose.model("User",userSchema);

app.post('/users',async (req,res)=>{
    const user = new User(req.body)
    await user.save() //save???
    res.json({message : "user Saved" , user});
})
 */





app.get('/questions',async (req,res)=>{
    try {
        const questions = await Question.find()
        res.json(questions);
    }catch (err) {
        res.status(500).json({error: err.message})
    }

/*     const users = await User.find();    
    res.send(users); */
})

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})
