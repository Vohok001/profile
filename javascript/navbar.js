document.addEventListener("DOMContentLoaded", function() {
  // Select all nav links inside your <ul>
  const navLinks = document.querySelectorAll("nav ul li a");
  // Select the checkbox input
  const checkBox = document.getElementById("check");

  // For each link, add a click event listener that unchecks the checkbox
  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      checkBox.checked = false;
    });
  });
});
