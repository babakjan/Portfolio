const revealOnScrollItems = document.querySelectorAll(".reveal-on-scroll");

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
