// window.onscroll = function() {
//     let header = document.querySelector("header");
//     if (window.pageYOffset > 0) {
//       header.style.backgroundColor = "#fff";
//       header.style.color = "#102a43";
//     } else {
//       header.style.backgroundColor = "#102a43";
//       header.style.color = "#fff";
//     }
//   };


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


document.addEventListener("DOMContentLoaded", function() {
  let dropdownIcon = document.querySelector('.mobile-dropdown');
  let nav = document.querySelector('nav');

  dropdownIcon.addEventListener('click', function() {
      nav.classList.toggle('show-nav'); // Toggle een klasse om de navigatiebalk te tonen/verbergen
  });
});

function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


