<script>
  import { onMount } from "svelte";
  import { responses } from "./stores.js";

  let a, b;
  let answer = "";
  let input;

  function handleKeypress(event) {
    if (answer && event.keyCode === 13) {
      const savedAnswer = {
        a,
        b,
        answer,
        id: Math.random(),
        correct: a * b == answer
      };
      responses.update(val => [savedAnswer, ...val]);
      answer = "";
      randomQuestion();
      event.preventDefault();
    }
  }

  function randomQuestion() {
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;
  }

  randomQuestion();

  onMount(() => input.focus());
</script>

<style>
  input {
    width: 3em;
  }
</style>

<section>
	{a} × {b} = 
  <input type="text" bind:value={answer} on:keypress={handleKeypress} bind:this={input}>
</section>