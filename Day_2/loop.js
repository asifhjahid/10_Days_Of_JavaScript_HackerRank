/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowelsLetters = [];
    let consonantLetters = [];
    let inputText = s.toLowerCase();
    for(let i=0; i<inputText.length; i++){
        if((inputText[i]==='a')|| (inputText[i]==='e')||(inputText[i]==='i')||( inputText[i]  ==='o')||(inputText[i]==='u'))   {
         vowelsLetters.push(inputText[i]); 
           
        }else{
            consonantLetters.push(inputText[i]);
        }
    }
    let vowelsAndConsonants=[...vowelsLetters,...consonantLetters]
    for(let letter of vowelsAndConsonants){
        console.log(letter);
    }
    
}


function main() {
const s = readLine();
// const s = 'javascriptloops';

vowelsAndConsonants(s);
}
// main();