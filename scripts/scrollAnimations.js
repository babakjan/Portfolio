const revealOnScrollItems = document.querySelectorAll(".reveal-on-scroll");
const chevron = document.querySelector("#chevron");
const aboutMeSection = document.querySelector("#about");

window.addEventListener("scroll", revealOnScroll);
const revealPoint = 150;

function revealOnScroll() {
	for (revealItem of revealOnScrollItems) {
		if (revealItem.getBoundingClientRect().top < window.innerHeight - revealPoint) {
			revealItem.classList.add("revealed");
		} else {
			revealItem.classList.remove("revealed");
		}
	}
}

chevron.addEventListener("click", () => {
	window.scrollTo({
		top: aboutMeSection.getBoundingClientRect().top,
		behavior: "smooth",
	});
});
