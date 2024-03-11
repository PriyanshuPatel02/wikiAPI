const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view-engine', 'ejs');
// in order to parse our request
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public")); // static file to store imges, css 

// connect to database
mongoose.connect("mongodb://localhost:27017/wikiDB");

/// collection name is articles schema
const articleSchema = {
    title : String,
    content : String
};
// create a model 
const Article = mongoose.model("Article", articleSchema);

app.route("/articles")

// *****REstful GET method************
 .get(function(req, res){
    Article.find()
    .then(foundArticles => {
        //   console.log(foundArticles);
        res.send(foundArticles); 
    })
    .catch(err => {
        // console.error(err);
        res.send(err);
    })
})


// *****REstful POST method************

 .post(function(req, res){
    console.log(req.body.title);  // when the request get passed by body-parser. when  we tap into variable title 
    console.log(req.body.content);

  // create database on mongoose // creating new article
  const newArticle = new Article({
    title : req.body.title,
    content : req.body.content
  });

//   newArticle.save(function(err){
//     if(!err){
//         res.send("Successfully added a new article")
//     }
//     else{
//         res.send(err);
//     }
//   });

  newArticle.save()
    .then(() =>{
        res.send("Successflly added a new article")
    })
    .catch((err)=>{
        res.send(err);
    })
 })
 

 // *****REstful Delete method************

 .delete(function(req, res){
    Article.deleteMany()
    .then(()=>{
        res.send("Successfully dlted all articles.");
    })
    .catch((err)=>{
        res.send(err);
    })
 }); 

app.route("/articles/:articleTitle")

//********GET *********** */
  .get(function(req, res){
    Article.findOne({title : req.params.articleTitle})
    .then(foundArticle=>{  // hume sirf singluar chahiye isliye "s" nhi lagye
        res.send(foundArticle);
    })
    .catch(foundArticle=>{  // hume sirf singluar chahiye isliye "s" nhi lagye
        // res.send(foundArticle)
        res.send("No articles matching that title was found!");
    })
  })
// *********Put --> UPDATE krna*************
  .put(function(req, res){
    Article.updateOne(
    // ye CONDITION hai --> 1st one   
        {title: req.params.articleTitle},
    // ye actual UPDATES we want to make --> 2nd one  
    // ye client submit new article  
        {title: req.body.title, content: req.body.content},
    // ye OVERWRITE condn --> True
        {overwrite: true}    
    )
    .then(() =>{
        res.send("Successfully updated the selected article")
    })
    .catch((err)=>{
        res.send(err);
    })
  })

 // ********PATCH***********
    .patch(function(req, res){
        Article.updateOne(
            {title: req.params.articleTitle},
            {$set: req.body} // ye dynamic hai yeha pass aap title or content update krna chahte h
        )

    .then(() => {
        res.send("Successfully updated article.")
        
    })
    .catch((err)=>{
        res.send(err);
        console.log(err);
    })
    })

 // ********DELETE********************
    .delete(function(req, res){
        Article.deleteOne(
            {title : req.params.articleTitle}
        )
    .then(() => {
            res.send("Successfully delete the article.")
        })
    .catch((err)=>{
            res.send(err);
            // console.log(err);
        })    
    })

app.listen(3000, function(){
    console.log("Server is started at 3000");
})
