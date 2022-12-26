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

# Javascript Functionality:

```js
import {
	getActiveDropdownMenu,
	toggleDropdownMenu,
	hideDropdownMenu,
} from "./node_modules/dropdown-menu-nav/dropdownMenu.js";
getActiveDropdownMenu();
toggleDropdownMenu(dropdownMenu); // Parameter is the dropdown menu li element clicked
hideDropdownMenu();
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

# Add CSS Code:

```css
html,
body {
	height: 100%;
}

*,
*::before,
*::after {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	list-style: none;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

header {
	background-color: cornflowerblue;
	padding: 1.25em;
}

a {
	text-decoration: none;
	color: black;
}

.nav-links {
	display: flex;
	gap: 1.5em;
}

.nav-links li {
	display: flex;
	align-items: center;
	cursor: pointer;
	position: relative;
	padding: 0.25em 0.5em;
}

.nav-links li,
.nav-links a {
	color: white;
	font-size: 1rem;
	transition: 0.3s;
}

.dropdown-menu-caret {
	transform: rotate(180deg);
}

.nav-links .home a:hover {
	filter: brightness(90%);
}

.dropdown-menu {
	position: relative;
}

.dropdown-menu-content {
	position: absolute;
	top: 100%;
	margin-top: 1em;
	left: 0;
	right: 0;
	outline: 1px solid #ddd;
	opacity: 0;
	visibility: hidden;
	transition: opacity 250ms ease-in;
	z-index: 1;
	background-color: white;
	min-width: 12.5em;
}

[data-dropdown-menu-active="true"] > .dropdown-menu-content {
	opacity: 1;
	animation: slide 0.25s;
	visibility: visible;
}

.dropdown-menu-item {
	z-index: 1;
	padding: 0.5em 0.75em;
	transition: 0.3s;
	user-select: none;
	padding-right: 1em;
}

.dropdown-menu-item a {
	color: black;
	font-size: 0.85rem;
	padding: 0.5em 0.25em;
}

.dropdown-menu-item:hover {
	background-color: #f1f5f9;
}

.selected {
	background-color: #ddebfb;
	transition: 0.3s ease-in-out;
}

.selected a {
	color: #4d99f4;
}

.selected:hover {
	background-color: #d1e1f3;
}

@keyframes slide {
	0% {
		translate: 0 -50px;
	}
	to {
		translate: 0 0;
	}
}
```

### npm package link

[npm](https://www.npmjs.com/package/dropdown-menu-nav?activeTab=readme)
