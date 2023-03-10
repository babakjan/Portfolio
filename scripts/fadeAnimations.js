const landingProposition = document.querySelector(".landing h1");
const landingParagraph = document.querySelector(".landing .left-column p");
const landingCTOs = document.querySelector(".landing .left-column .btns");
const landingArrow = document.querySelector(".landing .left-column .arrow");
const landingImage = document.querySelector(".landing .right-column img");
const landingSparkles = document.querySelectorAll(".landing img.sparkle");

const fadeElements = [
	landingProposition,
	landingParagraph,
	landingCTOs,
	landingArrow,
	landingImage,
	...landingSparkles,
];

window.addEventListener("load", () => {
	for (const item of fadeElements) {
		item.classList.add("fade");
	}
});
