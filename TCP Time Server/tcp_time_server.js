var net = require("net");

var server = net.createServer(function (socket){
    var currentTime = new Date();
    var month = currentTime.getMonth()+1;
    var date = currentTime.getFullYear()+"-"
                +("0" + month).slice(-2)+"-"
                +("0" + currentTime.getDate()).slice(-2)+" "
                +currentTime.getHours()+":"
                +currentTime.getMinutes()+"\n";
    socket.write(date);
    socket.end();
});
server.listen(process.argv[2]);