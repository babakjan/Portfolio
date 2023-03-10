//reveal on scroll----------------------------------------------------------------------------------

const revealOnScrollItems = document.querySelectorAll(".reveal-on-scroll");
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

//chevron-------------------------------------------------------------------------------------------

const chevron = document.querySelector("#chevron");

//chevron in landing scrolls to about me when clicked
chevron.addEventListener("click", () => {
	window.scrollTo({
		top: aboutMeSection.getBoundingClientRect().top,
		behavior: "smooth",
	});
});

//scroll up button----------------------------------------------------------------------------------

const scrollUpBtn = document.querySelector("#scroll-up-btn");

//set position of scroll up button
window.addEventListener("load", setScrollUpBtnPosition);
window.addEventListener("resize", setScrollUpBtnPosition);

function setScrollUpBtnPosition() {
	console.log(window.innerWidth);
	console.log(aboutMeSection.getBoundingClientRect());
	scrollUpBtn.style.right = `calc(${
		window.innerWidth - aboutMeSection.getBoundingClientRect().right
	}px)`;
}

//scroll up, when scroll up button clicked
scrollUpBtn.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});

//hide or show scroll up button
let oldValue = 0;
window.addEventListener("scroll", (e) => {
	newValue = window.pageYOffset;

	//scroll up event - show button
	if (oldValue - newValue > 0) {
		scrollUpBtn.classList.remove("hidden");
	}
	//scroll down event - hide button
	else if (oldValue - newValue < 0) {
		scrollUpBtn.classList.add("hidden");
	}

	//hide button, when user is at the upper part of the window
	if (window.scrollY < 500) {
		scrollUpBtn.classList.add("hidden");
	}

	oldValue = newValue;
});
