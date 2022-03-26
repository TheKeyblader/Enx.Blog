<script>
	import '../app.css';
	import Navbar from './_Shared/Navbar.svelte';
</script>

<svelte:head>
	<script>
		if (!('theme' in localStorage)) {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.setAttribute('data-theme', 'dark');
			} else {
				document.documentElement.setAttribute('data-theme', 'bumblebee');
			}
		} else {
			let data = localStorage.getItem('theme');
			if (data) {
				document.documentElement.setAttribute('data-theme', data);
			}
		}
	</script>
</svelte:head>

<Navbar />

<slot />
