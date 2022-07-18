var fs = require('fs')

var JavaScriptsObfuscate = require('javascript-obfuscator')

fs.readFile('./bot.js', "UTF-8", function(err, data) {
    if(err) {
        throw err;
    }

    var obfuscationResult = JavaScriptsObfuscate.obfuscate(data);

    fs.write('./my-obfuscated.js', obfuscationResult.getObfuscatedCode(), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    })
})