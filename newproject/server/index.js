const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const EmpModel = require("./models/RegisterModel");
const { useEffect } = require("react");
const { Axios } = require("axios");


app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/CRUDApp", {
    useNewUrlParser: true,
});
    
    app.post('/register', async (req, res)=> {
    const empname = req.body.empName;
    const empusername =req.body.empUsername;
    const empemail = req.body.empEmail;
    const emppassword = req.body.empPassword;
    const emp = new EmpModel({empName: empname, empUsername: empusername, empEmail: empemail, empPassword:emppassword });

    app.get("/read", async (req, res)=> {
        console.log(read)
        EmpModel.find([], (err, result) =>{
            if(err){
                res.send(err);
            }
    
            res.send(result);
        });
    
    
    });


   
    
    try {
        await emp.save();
        res.json(emp)
    } catch (err) {
        console.log(err)
    }
});



useEffect(() =>{
    Axios.get("http://localhost:3001/read").then((response)=>{
        console.log(response);
    });
},[]);
app.listen(27017, ()=>{
    console.log("Server running on PORT 27017");
})