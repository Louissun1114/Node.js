var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = [
        { _id: 154, name: 'Cholocate Heaven'},
        { _id: 155, name: 'Tasty lemon'},
        { _id: 156, name: 'Vamilla Dream'}
    ];
    /*dbo.collection("products").insertMany(myobj, function(err, res){
        if(err) throw err;
        console.log(res);
        db.close();
    });*/
});