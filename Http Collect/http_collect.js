var http = require("http");
var url = process.argv[2];
var bl = require("bl");

http.get(url, function callback(response){
    response.pipe(bl(function (err, data){
        if(err){
            console.log(err);
        }
        console.log(data.toString().length);
        console.log(data.toString());
    })
    );
})