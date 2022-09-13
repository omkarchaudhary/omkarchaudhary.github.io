//Question 1
var count = (function(){
    var counter = 0;
    let add = function(){
        return counter += 1;
    }
    let reset = function(){
        return counter =0;
    }
    return{
        add: add,
        reset : reset
    };
})();

console.log(count.add());
console.log(count.reset());

//Question 2
//  Free Variables = A variable referred to by a function that is not one of its
//  parameters or local variables.
//  The Free variable in the first question for add function is counter.

function make_adder(inc){
    var value = 0;
    return function(){
        return value += inc;
    }
}
var add5 = make_adder(5);
add5();
console.log(add5());

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