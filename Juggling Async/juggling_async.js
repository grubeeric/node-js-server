var http = require("http");
var bl = require("bl");
var count = 0;
var results = [];

function printResults(){
    for(var i = 0; i < 3; i++){
        console.log(results[i]);
    }
}

function httpGet(index){
    http.get(process.argv[index+2], function(response){
        response.pipe(bl(function(err, data){
            if(err){console.log(err);}
            
            results[index] = data.toString();
            count++;
            
            if(count == 3)
                printResults();
        }));
    });
}

for(var i = 0; i < 3; i++)
    httpGet(i);


