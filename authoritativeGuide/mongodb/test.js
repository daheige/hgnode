var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/dbname';
MongoClient.connect(url, function(err, db) {
    if(err){
        console.error(err);
        return;
    }else{
        console.log("Connected correctly to server");
        db.close();
    }
});