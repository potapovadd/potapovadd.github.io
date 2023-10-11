window.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("f1");
    b.addEventListener("click", Summa);
    });

let variant = new Map();
variant.set("v1", 3000);
variant.set("v2", 2000);
variant.set("v3", 1500);

function Summa() {
    event.preventDefault();
    let f1 = document.getElementById("field1").value;
    let m = f1.match(/^[0-9]+$/);
    if (m!== null){
        let s = document.getElementById("select1").value;
        let result = "Стоимость: " + variant.get(s) * f1;
        document.getElementById("r").innerHTML = result;
        }
    else {
        alert("Неверное количество товара");
    }
}



 
        
