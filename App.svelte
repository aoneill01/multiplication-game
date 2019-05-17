<script>
  import Answer from "./Answer.svelte";
  import Score from "./Score.svelte";
  import Timer from "./Timer.svelte";
  import Question from "./Question.svelte";
  import { responses } from "./stores.js";

  let running = false;

  function handleTimeUp() {
    running = false;
  }

  function newGame() {
    responses.set([]);
    running = true;
  }
</script>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }
  ul {
    list-style-type: none;
    padding-inline-start: 0;
  }
  button {
    background-color: #8965ff;
    border: 2px solid #a286fd;
    border-radius: 5px;
    color: white;
    font-size: large;
    padding: 10px;
  }
  button:hover {
    background-color: #a286fd;
  }
</style>

<main>
  {#if running}
  <Timer on:ding={handleTimeUp}/>
  <Question />
  {:else}
  <button on:click={newGame}>New Game</button>
  {/if}
  <Score />
  <ul>
  {#each $responses as response (response.id)}
    <li><Answer {...response} /></li>
  {/each}
  </ul>
</main>