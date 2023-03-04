const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const logoWhite = document.querySelector("#logo-white");
const logoBlack = document.querySelector("#logo-black");

hamburger.addEventListener("click", () => {
	toggleClassWithDelay(logoWhite, "nav-open", 100, 600);
	toggleClassWithDelay(logoBlack, "nav-open", 100, 600);
	navLinks.classList.toggle("open");
	links.forEach((link) => link.classList.toggle("fade"));
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
