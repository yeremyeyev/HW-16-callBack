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

const request = require("request");
const http = require("http");
const port = 3000;
let api = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

http
  .createServer(function(req, res, callBack) {
    
    if (req.url === "/") {
      res.write("hello world");
      res.end();
    } else if (req.url === "/about") {
      res.write("we are from here!");
      res.end();
    } else if (req.url === "/courses") {
      let x = request(api);
      req.pipe(x);
      x.pipe(res);
      return callBack;
    }
  })
  .listen(port, function(callBack) {
    console.log("callBack пришёл!!!!!");
  });
