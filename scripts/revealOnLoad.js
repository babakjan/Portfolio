const initialLoading = document.querySelector(".initial-loading");
const revealOnLoadElements = document.querySelectorAll(".reveal-on-load");

window.addEventListener("load", async () => {
	initialLoading.classList.add("hide");

	for (const element of revealOnLoadElements) {
		element.classList.add("reveal");
	}
});
