let numbers = [1,2,3,6,9,8,7,4]

let button5 = document.querySelector("#btn5")
button5.addEventListener("click", rotate)

function rotate(){
    numbers.unshift(numbers[7]);
    numbers.pop();
        
    document.querySelector("#btn1").innerHTML = numbers[0]
    document.querySelector("#btn2").innerHTML = numbers[1]
    document.querySelector("#btn3").innerHTML = numbers[2]
    document.querySelector("#btn4").innerHTML = numbers[7]
    document.querySelector("#btn6").innerHTML = numbers[3]
    document.querySelector("#btn7").innerHTML = numbers[6]
    document.querySelector("#btn8").innerHTML = numbers[5]
    document.querySelector("#btn9").innerHTML = numbers[4]
}
