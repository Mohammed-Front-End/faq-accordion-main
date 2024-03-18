document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(button => {
    button.addEventListener("click", function() {
      // Toggle the 'active' class to change visibility
      this.classList.toggle("active");

      // get next Element  
      const info = this.nextElementSibling;
      info.classList.toggle("showInfo");
      // Adjust the aria-expanded attribute for accessibility
      const expanded = info.classList.contains("showInfo") ? "true" : "false";
      this.setAttribute("aria-expanded", expanded);
    });

    button.addEventListener("keydown", function(event) {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        const currentLi = this.parentElement;
        let nextLi;
        if (event.key === "ArrowDown") {
          nextLi = currentLi.nextElementSibling || buttons[0].parentElement;
        } else if (event.key === "ArrowUp") {
          nextLi = currentLi.previousElementSibling || buttons[buttons.length - 1].parentElement;
        }
        const nextButton = nextLi.querySelector(".btn");
        nextButton.focus();
      } else if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        // Toggle accordion content visibility
        const info = this.nextElementSibling;
        this.classList.toggle("active");
        info.classList.toggle("showInfo");
        // Adjust the aria-expanded attribute for accessibility
        const expanded = info.classList.contains("showInfo") ? "true" : "false";
        this.setAttribute("aria-expanded", expanded);
      }
    });
  });
});