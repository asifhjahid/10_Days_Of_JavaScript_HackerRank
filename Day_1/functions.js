/*
 * Create the function factorial here
 */
function factorial(n){
    let facto=1;
    if(n==0 || n==1){
        return facto;
    }else{
        for(let num=n;num>1;num--){
            facto = facto * num;
            
        };
        return facto;
    }
}

function main() {
  const n = +(readLine());
    //  const n = 4;
  
  console.log(factorial(n));
}
// main();