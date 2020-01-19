// function coffeMachine(coffee, callBack){
//     setTimeout (function (){
//         return callBack(coffee);
//     }, 1000);
// }

// let coffee = "nescafe";

// coffeMachine(coffee, function (data){
//     console.log(data);

// });

function coffeMachine(coffee, callBack) {
  setTimeout(function() {
    coffee += m;  
    return callBack(coffee);
  }, 1000);
}
let m = " with MIlk'";
let coffee = "NesCafee";

coffeMachine(coffee, function(data) {
  console.log(data);
});
