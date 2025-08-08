// menu icon


const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("mobile-menu");
    toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});


// courses drop down

const courseBtn = document.querySelector(".courseBtn");
const courseDropdown = document.querySelector(".coursesDropdownM");

courseBtn.addEventListener('click', () => {
    courseDropdown.classList.toggle("hidden");
});


