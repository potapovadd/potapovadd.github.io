document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("startButton").addEventListener("click", function() {
      document.getElementById("popup").style.display = "block";
      history.pushState(null, null, "#popup");
    });
  
    document.querySelector(".close").addEventListener("click", function() {
      document.getElementById("popup").style.display = "none";
      history.pushState(null, null, " ");
    });
  
    window.addEventListener("popstate", function(event) {
      if (event.state !== null) {
        document.getElementById("popup").style.display = "block";
      } 
      else {
        document.getElementById("popup").style.display = "none";
      }
    });
  
    document.getElementById("feedbackForm").addEventListener("submit", function(event) {
      event.preventDefault();
      var inputs = document.querySelectorAll("#feedbackForm input, #feedbackForm textarea");
      var empty = false;

      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === "") {
            empty = true;
            inputs[i].classList.add("error");
        } 
        else {
            inputs[i].classList.remove("error");
        }
    }
  
    var emailField = document.getElementById("fc-generated-1-email");
    var phoneField = document.getElementById("fc-generated-1-phone");
    var wrongEmail = !emailField.checkValidity();
    var wrongPhone = !phoneField.checkValidity();
  
    if (empty || wrongEmail || wrongPhone) {
      alert("Поля заполенены неверно");
      return;
    }

    var form = event.target;
    var formData = new FormData(form);
    var req = new XMLHttpRequest();
    req.open("POST", "https://formcarry.com/s/wZEF7db2Np", true);

    req.onreadystatechange = function() {
    if (req.readyState === 4) {

        if (req.status !== 500) {
            alert("Форма отправлена");
            form.reset();
            } 
        else {
            alert("Ошибка");
            }
        }
    };
        req.send(formData);
    });
  
    var inputs = document.querySelectorAll("input, textarea");
    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      var value = localStorage.getItem(input.id);
      if (value) {
        input.value = value;
      }
      
      input.addEventListener("input", function(event) {
        localStorage.setItem(event.target.id, event.target.value);
      });
    }
  });