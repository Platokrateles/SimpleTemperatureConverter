let btn1 = document.querySelector('button:first-child');
let btn2 = document.querySelector('button:nth-child(2)');
let btn3 = document.querySelector('button:last-child');

let leftInput = document.querySelector('input:first-child');
let rightInput = document.querySelectorAll('input')[1];

let isCelsiusScaleSet = true;

function Convert()
{
    if(leftInput.value == "")
    {
        alert("Blank field or incorrect data format");
        return;
    };

    if(isCelsiusScaleSet === true)
        rightInput.value = Math.round(leftInput.value * 1.8 + 32);
    else
        rightInput.value = Math.round((leftInput.value - 32) * 5 / 9);
}

function Reset()
{
    leftInput.value = "";
    rightInput.value = "";
}

function Revert()
{
    if(leftInput.value == "")
    {
        alert("Blank field or incorrect data format");
        return;
    };

    let p1 = document.querySelector('p'); // w sumie i tak mi pierwszy zwróci
    let p2 = document.querySelectorAll('p')[1];

    let span1 = document.querySelector('span'); // w sumie i tak mi pierwszy zwróci
    let span2 = document.querySelector('span:nth-child(2)');
    
    if(isCelsiusScaleSet === true)
    {
        p1.textContent = "F is";
        p2.textContent = "°C";
        span1.textContent = "F";
        span2.textContent = "°C"; 
        isCelsiusScaleSet = false;
    }
    else
    {
        p1.textContent = "°C is";
        p2.textContent = "F";
        span1.textContent = "°C";
        span2.textContent = "F";
        isCelsiusScaleSet = true;
    }

    let buforVar = rightInput.value;
    rightInput.value = leftInput.value;
    leftInput.value = buforVar;
}

btn1.addEventListener("click", Convert);
btn2.addEventListener("click", Reset);
btn3.addEventListener("click", Revert);