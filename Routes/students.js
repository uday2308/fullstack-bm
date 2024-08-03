const express = require('express');
const router = express.Router();
const student = require('../Models/students');

router.get('/',async (req,res) => 
    {
    try{
         const s = await student.find()
         res.json(s);
       }
    catch(e)
        {
            res.send("Error" + e);
        }
    }
);


router.get('/:id',async (req,res) => 
    {
    try{
         const s = await student.findById(req.params.id)
         res.json(s);
       }
    catch(e)
        {
            res.send("Error" + e);
        }
    }
);

router.patch('/:id',async (req,res) => { 
    try{
         const s = await student.findById(req.params.id)
         s.grade = req.body.grade;
         const saveddata = await s.save();
         res.json(saveddata);
       }
    catch(e)
        {
            res.send("Error" + e);
        }
    })

 router.delete('/:id',async (req,res) => { 
        try{
            const s = await student.findById(req.params.id);
            const s1 = await student.find();
            console.log(s1[0]._id);
            for (const i in s1)
            {
                console.log(s1[i]._id.toString()===s._id.toString());
                if(s1[i]._id.toString()===s._id.toString())
                {
                    s1.splice(i, 1);
                    break;
                }
 
            }
            console.log();
            res.json("deleted sucessfully");
           }
        catch(e)
            {
                res.send("Error" + e);
            }
        })



router.post('/', async (req,res) => {
    console.log(req.body);
    const s = new student({
        name: req.body.name,
        age: req.body.age,
        grade: req.body.grade
    });

      try{
        const savedStudent = await s.save();
        res.json(savedStudent);
      } catch(e) {
        res.json({message: e.message});
      }
});


module.exports = router