console.log("Hello World!")

let B = false, I = false, N = false, G = false, O = false;

let BNumber, INumber, NNumber, GNumber, ONumber;

function generateNumber (maxNumber){
let x = Math.floor(Math.random() * maxNumber) + 1;


if(x <= 15){
    console.log('New number is 75 belongs to B');
    B=true;
    BNum = 75;
} else if (x >= 16 && x <= 30 ){
    console.log ('New number is 67 belongs to I');
    I= true;
    INum = x;
} else if (x >= 31 && x <=45 ) {
    console.log ('New number is 61 belong to N');
    N=true;
    NNum = x;
} else if ( x >= 46 && x  <= 60){
    console.log ('New number is 46 belongs to G');
    G=true;
    GNum = x;
}else if ( x >=  61 && x <= 75){
    console.log ('New Number is 21 belongs to 0');
    O=true;
    ONum = x;
}else{
    console.log('New number is invalid!');   
}

if (B = true && I == true && N == true && G == true && O == true){
    console.log('BINGOOOO!!!!');
    console.table({
        B: BNumber,
        I: INumber,
        N: NNumber,
        G: GNumber,
        O: ONumber,
})

}

return console.log(x);
}

//newNumber(75);

let counter = 5;
//for (counter = 10; counter >= 0; counter--){
//    console.log(Current counter is ${counter});
//    if (counter == 2 )break;

//    newNumber(75);
//}


while (
    B == false || 
    I == false ||
    N == false || 
    G == false || 
    O == false
    ){
    generateNumber(75);
}
