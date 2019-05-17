<script>
		import { createEventDispatcher, onMount } from "svelte";

		const dispatch = createEventDispatcher();
		let percentage = 100;

		onMount(() => {
		  let requestId;

		  const start = Date.now();
		  console.log(start);
		  const animationUpdate = timestamp => {
		    percentage = 100 - (Date.now() - start) / 600;
		    requestId = window.requestAnimationFrame(animationUpdate);
		  };
		  requestId = window.requestAnimationFrame(animationUpdate);

		  const timeout = setTimeout(() => {
		    dispatch("ding");
		  }, 60000);

		  return () => {
		    window.cancelAnimationFrame(requestId);
		    clearTimeout(timeout);
		  };
		});
</script>

<style>
	progress {
	  width: 100%;
	}
</style>

<div>
	<progress value={percentage} max="100">{percentage} %</progress>
</div>