<script>
	function back() {
		window.history.back();
	}
</script>

<div class="container mx-auto mt-8">
	<div class="card card-compact bg-secondary text-secondary-content">
		<div class="card-body flex flex-row">
			<button class="btn btn-ghost btn-sm" on:click={back}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="inline-block w-5 h-5 stroke-current"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
				</svg>
			</button>
			<h2 class="font-semibold text-xl">New article</h2>
		</div>
	</div>
	<div class="card bg-neutral mt-4 text-neutral-content">
		<div class="card-body">hello</div>
	</div>
</div>
