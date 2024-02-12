window.onscroll = function() {
    let header = document.querySelector("header");
    if (window.pageYOffset > 0) {
      header.style.backgroundColor = "#fff";
      header.style.color = "#102a43";
    } else {
      header.style.backgroundColor = "#102a43";
      header.style.color = "#fff";
    }
  };


function validateForm() {
  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let date = document.getElementById("date").value;

  if (firstName === "" || lastName === "" || email === "" || date === "") {
            alert("Vul alle verplichte velden in.");
            return false;
  }
        
  alert("Bedankt voor je bericht!");
        return true;
}
