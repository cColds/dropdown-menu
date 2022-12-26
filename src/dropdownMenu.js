const getActiveDropdownMenu = () =>
	document.querySelector("[data-dropdown-menu-active='true']");

function toggleDropdownMenu(dropdownMenu) {
	const dropdownMenuValue = dropdownMenu.dataset.dropdownMenuActive;
	dropdownMenu.dataset.dropdownMenuActive =
		dropdownMenuValue === "true" ? false : true;
}

function hideDropdownMenu() {
	const active = getActiveDropdownMenu();
	active.dataset.dropdownMenuActive = "false";
}

export { getActiveDropdownMenu, toggleDropdownMenu, hideDropdownMenu };
