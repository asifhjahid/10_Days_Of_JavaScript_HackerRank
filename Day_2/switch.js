function getLetter(s) {
    let letter;
    // Write your code here
    let toLowerCaseLetters = s.toLowerCase();
    switch(toLowerCaseLetters[0]){
        case 'a' || 'e' || 'i' || 'o'||'u':
        letter ='A' ;
        break;
        case 'b' || 'c' || 'd' || 'f'||'g':
            letter ='B'
            break;
        case 'h' || 'j' || 'k' || 'l'||'m':
            letter ='C';
            break;
      default:
        letter ='D'
    }
    return letter;
}


function main() {
    const s = readLine();
    // const s = 'adfgt';
    
    console.log(getLetter(s));
}
// main();