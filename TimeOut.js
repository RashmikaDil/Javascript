//with timeout
const greet1 = name1 => {
    setTimeout(() => {
    console.log(`${name1}!`)
    },1000)
};

greet1("rashmika");