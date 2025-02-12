// ex1
//let test = [1,2, 3, 4, 5];
//console.log(test[1]);

//ex2
//let num = [];
//num.push(5, 10, 20);
//num.pop();
//console.log(num);
//ex3
//let num = [];
//num.push(100);
//console.log(num);
//ex4

//js2 ex1
//let num22 = 0;
// function add(a, b){
//  console.log(a+b);
//return a+b;
//}

//function substract(a, b){
//   console.log(a-b);
//   return a-b;
//}

//function fin(){
//   num22 = add(num22, 50);
//   num22 = substract(num22, 30);
//}
//fin();

//js2 ex2

//let num = 52;
//function double(a, b){
//    console.log(a*b);
//    return a*b;
//}

//function addOne(a){
//    console.log(a+1);
//    return a+1;
//}

//function result(){
//    num = double(num, 3);
//    num = addOne(num);
//}
//result();

//js2 ex3

//let num = 50;
//function substract(a, b){
//   console.log(a-b);
//   return a-b;
//}

//function divide(a, b){
//    console.log(a-b);
//    return a-b;
// }
 
// function substractAndDivide(sub,div){
//    num = substract(num,sub);
//    console.log(num/div);
//    return num/div;
// }
//substractAndDivide(5, 2);
 
//js2 ex4

//function addGreaterThanOne(a, b){
//    return a+b;
//}

//function isHigtherThanOne(a,b){
//    return a>b;
//}

//function compare(a, b, c){
//    let num = addGreaterThanOne(a, b);
//    return isHigtherThanOne(num, c);
//}

//console.log(compare(5, 2, 10));
//console.log(compare(5, 9, 10));

//js2 ex 5
let gg = 44;
function mult(a, b){

    return a*b;

}

function divide(a, b){
    return a/b;
}

function calculate(multipicateur, dividende){

    gg = mult(gg, multipicateur);
   return  gg = divide(gg, dividende); 

}

console.log(calculate(5, 4)); 