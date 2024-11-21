//Single parameter

const greet = name => {
    return `Hello, ${name}!`;
};
console.log(greet("RASHMIKA !"));


//multiple parameter

const greet2 = (n,m,name3) =>{
    console.log( `${name3}!` + " Your number is : " + n*m )
};

greet2(2,3,"rashmika");


//no parameter

const greet3 = () =>{
    console.log("no parameter");
};
greet3();


//Implicit Return

const greet4 = (x,y) => x+y;
console.log(greet4(2,6));