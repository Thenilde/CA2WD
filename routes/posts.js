const express=require('express');
const router=express.Router();
const Post=require('../models/Post');

router.get('/',(req,res)=>{
    res.send('we are on posts');

});

router.post('/', (req ,res)=> {
  const post= new Post({

      intrument:req.body.instrument,
      price:req.body.price,
      color:req.body.color,
      year:req.body.year,
      comments:req.body.comments
  });

  post.save()
      .then(data =>{
          res.json(data);
      })

      .catch(err=>{
          res.json({message:err});
      });
});


module.exports=router;
