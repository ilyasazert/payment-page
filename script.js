

// document.getElementById("newPage").addEventListener("click", function() {
//     // Navigate to the new page when the button is clicked
//    window.location.href = "checking.html";
//    });





const inputField = document.getElementById("input-number");

inputField.addEventListener("input", function (event) {
    let value = event.target.value.replace(/\s/g, ''); // Remove existing spaces
    let formattedValue = '';

    for (let i = 0; i < value.length; i++) {

        formattedValue += value[i];
        if ((i + 1) % 4 === 0 && i !== value.length - 1) {
        formattedValue += '    ';
    }
}

event.target.value = formattedValue;
});

document.querySelector('.card-number-input').oninput = () => {
document.querySelector('.card-number-box').innerHTML = 
document.querySelector('.card-number-input').value;
}




document.querySelector('.card-holder-input').oninput = () => {
document.querySelector('.card-holder-name').innerText = 
document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () => {
document.querySelector('.ex-mm').innerText = 
document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () => {
document.querySelector('.ex-yy').innerText = 
document.querySelector('.year-input').value-2000;
}

document.querySelector('.cvv-input').onmouseenter = () => {
document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
document.querySelector('.back').style.transform='perspective(1000px) rotateY(0deg)';
}


document.querySelector('.cvv-input').onmouseleave = () => {
document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
document.querySelector('.back').style.transform='perspective(1000px) rotateY(180deg)';
}


document.querySelector('.cvv-input').oninput = () => {
document.querySelector('.cvv').innerText =
document.querySelector('.cvv-input').value;
}





