import {
	getActiveDropdownMenu,
	toggleDropdownMenu,
	hideDropdownMenu,
} from "./dropdownMenu";

const navLinks = document.querySelectorAll("[data-dropdown-menu-active]");

navLinks.forEach((navLink) => {
	navLink.addEventListener("click", (e) => {
		const dropdownMenu = e.target.closest("li");

		if (!dropdownMenu || !dropdownMenu.dataset.dropdownMenuActive) {
			return;
		}
		if (
			getActiveDropdownMenu() &&
			getActiveDropdownMenu() !== dropdownMenu
		) {
			hideDropdownMenu();
		}
		toggleDropdownMenu(dropdownMenu);
	});
});

document.body.addEventListener("click", (e) => {
	if (!e.target.closest(".nav-item") && getActiveDropdownMenu()) {
		hideDropdownMenu();
	}
});
