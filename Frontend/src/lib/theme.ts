import { browser } from '$app/env';
import { writable } from 'svelte/store';

export const lightTheme = 'bumblebee';
export const darkTheme = 'dracula';
export const theme = writable(getTheme());

if (browser) {
	theme.subscribe(setTheme);
}

function setTheme(theme: string) {
	if (theme) document.documentElement.setAttribute('data-theme', theme);
	else document.documentElement.removeAttribute('data-theme');
}

function getTheme() {
	if (!browser) return '';
	if ('theme' in localStorage) {
		var data = localStorage.getItem('theme');
		if (data) return data;
	}

	return '';
}
