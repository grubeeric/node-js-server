var filterFN = require("./filterFilesModule.js");
var folder = process.argv[2];
var extension = process.argv[3];

filterFN(folder, extension, function(err, list){
     if (err){
        return console.error('There was an error:', err);   
     }
     list.forEach(function(file){
         console.log(file);
     });
});
