// ========================================
// NAVIGATION MENU
// ========================================

const menu = document.getElementById("menu");
const menuButton = document.getElementById("menuButton");

// Open and close the sidebar
function toggleMenu() {
    if (!menu || !menuButton) return;

    const isOpen = menu.classList.toggle("active");

    menuButton.classList.toggle("active", isOpen);

    menuButton.setAttribute("aria-expanded", isOpen);
}


// Close the sidebar
function closeMenu() {
    if (!menu || !menuButton) return;

    menu.classList.remove("active");
    menuButton.classList.remove("active");

    menuButton.setAttribute("aria-expanded", "false");
}


// Close the sidebar when a navigation link is clicked
if (menu) {

    const menuLinks = menu.querySelectorAll("a");

    menuLinks.forEach(function (link) {

        link.addEventListener("click", closeMenu);

    });

}


// Close the sidebar when clicking outside it
document.addEventListener("click", function (event) {

    if (!menu || !menuButton) return;

    const clickedInsideMenu = menu.contains(event.target);
    const clickedMenuButton = menuButton.contains(event.target);

    if (
        menu.classList.contains("active") &&
        !clickedInsideMenu &&
        !clickedMenuButton
    ) {
        closeMenu();
    }

});


// Close the sidebar when pressing Escape
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeMenu();
    }

});


// ========================================
// TYPEWRITER ANIMATION
// ========================================

const text = document.getElementById("introduction");

const message = [
    "Hello, I'm Nod3x.",
    "I'm a Mechanical Engineer.",
    "I'm a Web Developer.",
    "I'm a Discord Developer.",
    "I'm a Web3 Community Manager.",
    "I'm always learning new things."
];

let sentenceIndex = 0;
let letterIndex = 0;
let deleting = false;


// ========================================
// TYPEWRITER FUNCTION
// ========================================

function typeText() {

    // Stop if the introduction element doesn't exist.
    if (!text) return;

    // Get the sentence currently being displayed.
    const currentSentence = message[sentenceIndex];


    // ----------------------------------------
    // TYPING
    // ----------------------------------------

    if (deleting === false) {

        // Display one additional character.
        text.textContent = currentSentence.slice(0, letterIndex + 1);

        // Move to the next character.
        letterIndex++;


        // Check whether the sentence is complete.
        if (letterIndex === currentSentence.length) {

            // Switch to deleting mode.
            deleting = true;

            // Pause before deleting the sentence.
            setTimeout(typeText, 1600);

        } else {

            // Continue typing.
            setTimeout(typeText, 100);

        }

    }


    // ----------------------------------------
    // DELETING
    // ----------------------------------------

    else {

        // Remove the last character.
        text.textContent = currentSentence.slice(0, letterIndex - 1);

        // Move backward through the sentence.
        letterIndex--;


        // Check whether the sentence is completely deleted.
        if (letterIndex === 0) {

            // Switch back to typing mode.
            deleting = false;

            // Move to the next sentence.
            sentenceIndex = (sentenceIndex + 1) % message.length;

            // Pause before typing the next sentence.
            setTimeout(typeText, 400);

        } else {

            // Continue deleting.
            setTimeout(typeText, 40);

        }

    }

}


// ========================================
// START THE ANIMATION
// ========================================

typeText();