// function coffeMachine(coffee, callBack){
//     setTimeout (function (){
//         return callBack(coffee);
//     }, 1000);
// }

// let coffee = "nescafe";

// coffeMachine(coffee, function (data){
//     console.log(data);

// });
// _________--------------------_____
// function coffeMachine(coffee, callBack) {
//   setTimeout(function() {
//     coffee += m;  
//     return callBack(coffee);
//   }, 1000);
// }
// let m = " with MIlk'";
// let coffee = "NesCafee";

// coffeMachine(coffee, function(data) {
//   console.log(data);
// });
//-----------------------
//const fs = require("fs");
const request = require('request');
const http = require("http");
const port = 3000;
let api = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
// let data = fs.readFile("index.html");
http
  .createServer(function(request, response) {
    if (req.url === "/courses") {
      res.write(api);
      res.end();
    } else if (req.url === "/about") {
      console.log(req.url);
      res.write("we are from here!");
      res.end();
    } 
  })
  .listen(port, function() {
    console.log("Server at http://localhost:3000");
  });


    let any = func('localhost:3000/courses').pipe(request.put(api));

    return callBack(api);
  
    https://metanit.com/web/nodejs/3.1.php
    https://www.npmjs.com/package/request
    https://www.npmjs.com/package/http