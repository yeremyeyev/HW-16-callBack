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

const request = require("request");
const http = require("http");
const port = 3000;
let api = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
// let data = fs.readFile("index.html");

// function piska (){ http
//   .createServer(function func(request, response, callBack) {
//     if (req.url === "/courses") {
//       res.write(api);
//       res.end();
//       return callBack;
//     } else (req.url === "/about");
//       console.log(req.url);
  
//   })
//   .listen(port, function() {
//     console.log("Server at http://localhost:3000/courses");
//   });
// }
// piska(
  // request.get("localhost:3000/courses").pipe(request.put(api)));
  // return callBack(api);


//request.get('localhost:3000/courses').pipe(request.put('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'))

// https://metanit.com/web/nodejs/3.1.php
// https://www.npmjs.com/package/request
// https://www.npmjs.com/package/http


function request111(coffee, cb){
 
http.createServer(function (req, resp) {
  if (req.url === '/courses') {
    r.get(cb).pipe(resp)
  }
}).listen(port, function() {
    console.log("Server at http://localhost:3000/courses");
     });
}

let coffee = "black";
let data = 1000;
request111(function (coffee,data){
       console.log(data);
  
   });