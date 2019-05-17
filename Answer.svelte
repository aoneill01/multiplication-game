<script>
  export let a;
  export let b;
  export let answer;
  export let correct;
</script>

<style>
  .correct {
    color: green;
  }
  .incorrect {
    color: red;
  }
</style>

<span class={correct ? "correct" : "incorrect"}>{a} × {b} { correct ? "=" : "≠"} {answer}</span>