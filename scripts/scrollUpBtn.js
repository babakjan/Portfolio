const scrollUpBtn = document.querySelector("#scroll-up-btn");
const main = document.querySelector("main");

//set position of scroll up button
window.addEventListener("load", setScrollUpBtnPosition);
window.addEventListener("resize", setScrollUpBtnPosition);

function setScrollUpBtnPosition() {
	scrollUpBtn.style.right = `calc(${window.innerWidth - main.getBoundingClientRect().right}px + ${
		window.innerWidth > 570 ? 1 : 0
	}rem)`;
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
