var url = require("url");
var http = require("http");

var server = http.createServer(function (req, res){
    res.writeHead(200, {"Content-Type": "application/json"});
    if(url.parse(req.url).pathname === "/api/parsetime"){
        var timeArray = url.parse(req.url).search.split("=");
        var time = timeArray[1];
        var theHour = Number(time.substring(11,13));
        var theMinute = Number(time.substring(14,16));
        var theSecond = Number(time.substring(17,19));
        
        var json = JSON.stringify({
            hour: theHour,
            minute: theMinute,
            second: theSecond
        });
        res.end(json);
    }
    
    else if(url.parse(req.url).pathname === "/api/unixtime"){
        var isoTimeArray = url.parse(req.url).search.split("=");
        var isoTime = isoTimeArray[1];
        var milliseconds = new Date (isoTime).getTime();
        
        var isoJson = JSON.stringify({
            unixtime: milliseconds
        });
        res.end(isoJson);
    }
    
});
server.listen(process.argv[2]);