const number = document.getElementById("field1");
const radio = document.querySelectorAll('input[name="myradio"]'); 
const select = document.getElementById('select');
const option = document.getElementById('select1');
const checkbox = document.getElementById('checkbox');
const check1 = document.getElementsByName('check-1');
const result = document.getElementById('result');

window.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    number.addEventListener('input', Summa);
    radio.forEach((input) => {
        input.addEventListener('change', () => {
            Summa();
            Show();
        });
});
    option.addEventListener('change', Summa);
});

function Summa() {
    const n = parseInt(number.value);
    const r = document.querySelector('input[name="myradio"]:checked').value;
    let selValue = 0;
    let checkValue = 0;

    r1 = document.querySelector('input[name="myradio"]:checked').value;
    if (r1 === '500') {
        selValue = parseInt(option.value);
    }
    else if (r1 === '300') {
        if (check1[0].checked) {
            checkValue = 100;
        }
    }
    result.textContent = n * (parseInt(r) + selValue + checkValue);
}

function Show() {
    r1 = document.querySelector('input[name="myradio"]:checked').value;
    if (r1 === '1000') {
        select.style.display = 'none';
        checkbox.style.display = 'none';
    } 
    else if (r1 === '500') {
        select.style.display = 'block';
        checkbox.style.display = 'none';
    } 
    else if (r1 === '300') {
        select.style.display = 'none';
        checkbox.style.display = 'block';
    }
    Summa();
}
