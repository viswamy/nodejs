var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var articles = mongoose.model('articles');

router.get('/', function(req, res, next) {
  if(req.query.title)
  {
      articles.find({title:req.query.title}, function(err, data) {
        res.send(data);
      });    
  }
  else
  {
      articles.find( function(err, data) {
         res.send(data);
      });
  }
});

router.post('/', function(req, res, next) {
    console.log(req.body);
   var _title = req.body.title;
   var _url = req.body.url;
   var _content = req.body.content;
   if(_title && _url && _content)
   {
       var article = new articles({
          title: _title,
          url: _url,
          content :_content
       });
       article.save( function(err) {
           if(err) {
               res.status(501);
               res.send("error saving the article to mongodb");
           }
           else {
               res.send("successfully saved article to mongodb");
           }
       });
   }
   else
   {
       res.send('requried three parameters => title, url, content');
   }
});

module.exports = router;
