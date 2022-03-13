'use strict';

function TabControl(base)
{
	this.base = base;
	this.tab_list = this.base.querySelector('[role="tablist"]');
	this.buttons = this.tab_list.querySelectorAll('[role="tab"]');
	let handler_click = this.on_tab_click.bind(this);
	let handler_keydown = this.on_tab_keydown.bind(this);
	for (let button of this.buttons) {
		button.addEventListener('click', handler_click, false);
		button.addEventListener('keydown', handler_keydown, false);
	}
}

TabControl.prototype.on_tab_click = function (ev) {
	ev.preventDefault();
	let clicked_button = ev.currentTarget;
	if (!clicked_button.hasAttribute('aria-selected')) {
		this.switch_to(clicked_button);
	}
};

TabControl.prototype.on_tab_keydown = function (ev) {
	let active_button = ev.currentTarget;
	let next_element;
	switch (ev.key) {
		case 'ArrowLeft':
			ev.preventDefault();
			next_element = active_button.previousElementSibling;
			if (!next_element) {
				next_element = this.tab_list.lastElementChild;
			}
			this.switch_to(next_element);
			break;
		case 'ArrowRight':
			ev.preventDefault();
			next_element = active_button.nextElementSibling;
			if (!next_element) {
				next_element = this.tab_list.firstElementChild;
			}
			this.switch_to(next_element);
			break;
	}
};

TabControl.prototype.switch_to = function (active_button) {
	for (let button of this.buttons) {
		if (active_button === button) {
			button.setAttribute('aria-selected', true);
			button.setAttribute('tabindex', '0');
			document.getElementById(button.getAttribute('aria-controls')).removeAttribute('hidden');
			button.focus();
		} else {
			button.removeAttribute('aria-selected');
			button.setAttribute('tabindex', '-1');
			document.getElementById(button.getAttribute('aria-controls')).setAttribute('hidden', 'hidden');
		}
	}
};

function update_image_src(image, src)
{
	let current_src = image.getAttribute('src');
	if (current_src !== src) {
		image.setAttribute('src', src);
	}
}

function update_simple_button(button)
{
	button.classList.add('active');
	
	let title_el = document.getElementById('simple-title-link');
	title_el.setAttribute('href', button.getAttribute('data-href'));
	title_el.textContent = "Регистрация на " + button.getAttribute('data-platform') + " сервере " + button.getAttribute('title');

	let description = button.getAttribute('data-description');
	document.getElementById('simple-description').textContent = ((description === null) || (description === '')) ? '' : description;

	let image = document.getElementById('simple-image-img');
	if (image) {
		update_image_src(image, button.getAttribute('data-image'));
	} else {
		image = document.createElement('img');
		image.setAttribute('id', 'simple-image-img');
		image.setAttribute('alt', 'Скриншот');
		image.setAttribute('src', button.getAttribute('data-image'));
		document.getElementById('simple-image').appendChild(image);
	}
}

function on_simple_button_click(ev)
{
	ev.preventDefault();
	let buttons = document.querySelectorAll('#simple-buttons button');
	for (let button of buttons) {
		button.classList.remove('active');
	}
	update_simple_button(ev.currentTarget);
}

function get_server_description(anchor)
{
	let result = '';

	let x = anchor.nextElementSibling;
	while (x && !x.classList.contains('data-server-text')) {
		x = x.nextElementSibling;
	}
	if (x) {
		result = x.textContent;
	}

	return result;
}

function on_dom_loaded()
{
	let tabs = document.querySelectorAll('.tabs');
	for (let item of tabs) {
		new TabControl(item);
	}

	let elements = document.querySelectorAll('.data-server-source');
	if (elements.length) {
		// Set random server.
		let source = elements[Math.floor(Math.random() * elements.length)];
		let cloned_anchor = source.cloneNode(true);
		cloned_anchor.setAttribute('class', 'random-server-button');
		cloned_anchor.textContent = "Зарегистрироваться на сервере " + cloned_anchor.textContent;
		document.getElementById('random-server-result').appendChild(cloned_anchor);
		document.getElementById('random-server-premod').textContent = source.hasAttribute('data-premod') ? 'да' : 'нет';
		document.getElementById('random-server-platform').textContent = source.getAttribute('data-platform');

		// Make "simple" server info.
		// Shuffle.
		let data = Array.from(elements);
		for (let i = data.length - 1; i > 0; i -= 1) {
			let j = Math.floor(Math.random() * i);
			[data[i], data[j]] = [data[j], data[i]];
		}
		// Setup buttons.
		let idx = 1;
		let buttons_container = document.getElementById('simple-buttons')
		let attrs = ['data-platform', 'data-premod', 'data-image'];
		for (let x of data) {
			let button = document.createElement('button');
			button.setAttribute('type', 'button');
			button.setAttribute('class', 'simple-button');
			button.setAttribute('aria-label', 'Слайд ' + idx);
			button.setAttribute('title', x.textContent);
			button.setAttribute('data-href', x.getAttribute('href'));
			button.setAttribute('data-description', get_server_description(x));
			button.textContent = idx;
			button.addEventListener('click', on_simple_button_click, false);
			for (let attr of attrs) {
				if (x.hasAttribute(attr)) {
					button.setAttribute(attr, x.getAttribute(attr));
				}
			}
			buttons_container.appendChild(button);

			idx += 1;
		}
		update_simple_button(buttons_container.firstElementChild);
		// let container = document.getElementById('info-title');
		
	}
}

document.addEventListener('DOMContentLoaded', on_dom_loaded, false);
