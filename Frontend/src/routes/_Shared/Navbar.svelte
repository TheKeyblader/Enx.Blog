<script>
	import LoginButton from './LoginButton.svelte';
</script>

<nav class="navbar bg-primary text-primary-content container mx-auto mt-6 rounded-lg">
	<div class="navbar-start">
		<a class="btn btn-ghost normal-case text-xl" href="/">Enx.Blog</a>
		<a class="btn btn-ghost normal-case" href="/projects">Projects</a>
		<a class="btn btn-ghost normal-case" href="/techstack">TechStack</a>
	</div>
	<div class="navbar-end">
		<LoginButton />
	</div>
</nav>
