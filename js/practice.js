x =4;
{

    console.log(x);
}

//this - refers to block where it live
//bind - replace this with whatever we passed
//bind - bind(object1, 2,3,4)();
//call - .call(object1, 2,3,4);
//apply -.apply(object1,[1,2,3]);
// IIFE - for encapsulation or hidding data
//(function(){})()
//Reveal Module pattern
// function s(){
//     func1 : ""
//     return{
//             returnFunc : func1
//     }
// }
x=1;
var a = 5;
var b = 10;
var c = function(a,b,c){
    console.log("1. "+x);
    console.log("2. "+a);
    var f = function(a,b,c){
        b=a;
        console.log("3. "+b);
        b =c;
        varx = 5;
    }
    f(a,b,c);
    console.log("4. "+b);
    var x =10;
}
c(8,9,10);
console.log("5. "+b);
console.log("6. "+x);

var x = 9;
function myFunction(){
    return x*x;
}
console.log(myFunction());
x =5;
console.log(myFunction());

var foo =1;
function bar(){
    if(!foo){
        var foo =10;
    }
    alert(foo);
}
bar();

let emp = function(){
    let ab = {
        name :"justice",
        getName : function(){
            console.log(this.name);
         function a(){
            console.log(this.name)
            function b(){
                console.log("b func "+this.name)
            
                }
                return b();
            }

            return a;
            
        }
    }
     return ab;
}
 console.log(emp().getName()());
