console.log("Hello World!");

generateNumber (15);

function generateNumber(max) {
    let randomNumber = Math.floor(Math.random() * max) + 1;



    if(randomNumber >= 15) {
        console.log('The number is in B.');
    } else if (randomNumber >= 16 && randomNumber <= 30) {
        console.log('The number is in I.');
    } else if (randomNumber >= 31 && randomNumber <= 30) {
        console.log('The number is in N.');
    } else if (randomNumber >= 46 && randomNumber <= 30) {
        console.log('The number is in G.');
    } else if (randomNumber >= 61 && randomNumber <= 30) {
        console.log('The number is in O.');
    } else {
        console.log('The number is invalid');
    } 

    return console.log(randomNumber);
}
