let button = document.getElementById("button");
let mylabel = document.getElementById("myid");
let maxInput = document.getElementById("maxInput");
let min = 1;
button.onclick = function() {
    let max = maxInput.value;
    if (isNaN(max) || max < min) {
        mylabel.textContent = "Please enter a valid max value.";
        return;
    }
    
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    mylabel.textContent = randomNum;
}
