const chevron = document.querySelector("#chevron");
const aboutMeSection = document.querySelector("#about");

//chevron in landing scrolls to about me when clicked
chevron.addEventListener("click", () => {
	window.scrollTo({
		top: aboutMeSection.getBoundingClientRect().top,
		behavior: "smooth",
	});
});
