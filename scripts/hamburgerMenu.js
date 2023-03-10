const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navbarLinks = document.querySelectorAll(".nav-links li");
const logoWhite = document.querySelector("#logo-white");
const logoBlack = document.querySelector("#logo-black");
const hamburgerLines = document.querySelectorAll(".hamburger .line");

window.addEventListener("load", () => {
	if (window.innerWidth > 750) {
		navbarLinks.forEach((link) => link.classList.toggle("reveal-desktop"));
	}
});

/**
 * toggle hamburger menu
 */
function hamburgerOnClick() {
	toggleClassWithDelay(logoWhite, "nav-opened", 100, 650);
	toggleClassWithDelay(logoBlack, "nav-opened", 100, 650);
	hamburgerLines.forEach((line) => toggleClassWithDelay(line, "nav-opened", 0, 750));
	navLinks.classList.toggle("open");

	//when page is loaded, there aren't state attribute - animation don't fire on page load,
	//when button is click add or remove the state
	navbarLinks.forEach((link) => link.classList.toggle("reveal"));
	const currentState = hamburger.getAttribute("data-state");
	if (!currentState || currentState === "closed") {
		hamburger.setAttribute("data-state", "opened");
		hamburger.setAttribute("aria-expanded", "true");
	} else {
		hamburger.setAttribute("data-state", "closed");
		hamburger.setAttribute("aria-expanded", "false");
	}
}

//hamburger menu click
hamburger.addEventListener("click", hamburgerOnClick);

//navbar links close hamburger menu, when they're clicked and and when the menu is opened
navbarLinks.forEach((link) => {
	link.addEventListener("click", () => {
		const hamburgerMenuOpened = hamburger.getAttribute("data-state");
		if (hamburgerMenuOpened && hamburgerMenuOpened === "opened") {
			hamburgerOnClick();
		}
	});
});

/**
 * toggle class on node, with delay
 * @param {Element} node
 * @param {string} className
 * @param {number} addClassDelay in milliseconds
 * @param {number} removeClassDelay in milliseconds
 */
function toggleClassWithDelay(node, className, addClassDelay, removeClassDelay) {
	if (node.classList.contains(className)) {
		setTimeout(() => node.classList.remove(className), removeClassDelay);
	} else {
		setTimeout(() => node.classList.add(className), addClassDelay);
	}
}
