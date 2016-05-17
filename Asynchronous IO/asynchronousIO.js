var fs = require("fs");
var lines = undefined;

function numLines(callback){
    fs.readFile(process.argv[2], function doneReading(err, fileContents){
        lines = fileContents.toString().split('\n').length-1;
        callback();
    })
}

function logNumLines(){
    console.log(lines);
}

numLines(logNumLines);