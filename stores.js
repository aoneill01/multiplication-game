import { derived, writable } from "svelte/store";

export const responses = writable([]);

export const score = derived(responses, $responses =>
  $responses.reduce((acc, resp) => acc + (resp.correct ? 1 : -1), 0)
);
