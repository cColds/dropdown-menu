# Dropdown Menu

# Screenshot

![Dropdown Menu](https://media.discordapp.net/attachments/249554120514600960/1057041939352010802/image.png?width=881&height=358)

### How to install

---

Download and install the package by running:

    npm install dropdown-menu-nav

### Usage

---

To use the dropdown menu functionality

# Add JavaScript Code:

```js
import {
	getActiveDropdownMenu,
	toggleDropdownMenu,
	hideDropdownMenu,
} from "./node_modules/dropdown-menu-nav/dropdownMenu.js";

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
```

# Add HTML Code:

```html
<li class="nav-item" data-dropdown-menu-active="false">
	<a href="#">Demo Nav Link</a>
	<svg
		class="dropdown-menu-caret"
		style="width:24px;height:24px"
		viewBox="0 0 24 24"
	>
		<path
			fill="currentColor"
			d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
		/>
	</svg>

	<ul class="dropdown-menu-content">
		<li class="dropdown-menu-item"><a href="#">Dropdown Item 1</a></li>
		<li class="dropdown-menu-item"><a href="#">Dropdown Item 2</a></li>
	</ul>
</li>
```

### npm package link

[npm](https://www.npmjs.com/package/dropdown-menu-nav?activeTab=readme)
