/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
        let reverseValue= s.split('').reverse().join('');
        console.log(reverseValue);
    }catch(error){
        console.log(error.message);
        console.log(s);
    }
    
}


function main() {
    const s = eval(readLine());
    // const s = '1234';
    // const s = Number(1234);
   
    
    reverseString(s);
}
// main();