<script>
	import { onMount } from 'svelte';

	function back() {
		window.history.back();
	}

	var editor;

	onMount(async () => {
		var js = await import('@editorjs/editorjs');
		editor = new js.default('editorjs');
	});
</script>

<div class="container mx-auto mt-8">
	<div class="card card-compact bg-secondary text-secondary-content">
		<div class="flex flex-row card-body">
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
			<h2 class="text-xl font-semibold">New article</h2>
		</div>
	</div>
	<div class="mt-4 card bg-neutral">
		<div class="card-body">
			<div class="flex w-full">
				<div class="flex-grow">
					<div class="form-control">
						<label class="label" for="title">
							<span class="label-text text-neutral-content">Title</span>
						</label>
						<input id="title" class="input input-bordered" placeholder="Title" />
					</div>
				</div>
				<div class="divider divider-horizontal after:bg-base-300 before:bg-base-300" />
				<div class="flex-grow">
					<div class="form-control">
						<label class="label" for="title">
							<span class="label-text text-neutral-content">Title</span>
						</label>
						<input id="title" class="input input-bordered" placeholder="Title" />
					</div>
				</div>
			</div>
		</div>
	</div>
	<div
		class="mx-auto mt-4 prose border card bg-base-100 lg:prose-xl text-base-content border-primary outline outline-offset-2 outline-primary"
	>
		<div class="card-body">
			<div id="editorjs" />
		</div>
	</div>
	<div class="float-right">
		<button class="btn btn-primary">Create</button>
	</div>
</div>
