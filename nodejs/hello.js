const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('What is your name?', (name) =>{
    console.log(`Welcome ${name}`);
    readline.question("What is your age?", (age) =>{
        if(age < 16){
            console.log('you\'re not allowed to drive in Iowa');
        }else{
            console.log('You\'re allowed to get a drivers license in Iowa');
        }
        readline.close();
    });
    
})

let sum=0;
const getNumber =function(){
    readline.question("Enter number: ",(number) =>{       
        if(number == 'stop'){
            console.log('The sum is: '+sum);
            return readline.close();
        }else{
            sum = sum+parseInt(number);
            getNumber();
        }
        
    })
}

getNumber();
