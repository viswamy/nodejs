var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articlesSchema = new Schema({
    url: String,
    title: String,
    content: String    
});

mongoose.model('articles', articlesSchema);