<script lang="ts">
  import { DateTime } from "luxon";
  import Fa from "svelte-fa";
  import {faThumbsUp, faThumbsDown} from "@fortawesome/free-solid-svg-icons"

  export let data;

  $: ({ definitions } = data);
</script>

<div class="max-w-sm mx-auto flex flex-col gap-y-4">
  {#each definitions as def (def.urbanLink)}
    <div class="card bg-base-200">
      <div class="card-body">
        <h2 class="card-title"><a href={def.urbanLink} class="text-blue-500 underline">{def.word}</a></h2>
        <p class="card-subtitle">written on {DateTime.fromISO(def.writtenOn).setLocale("en").toLocaleString(DateTime.DATE_MED)} by {def.author}</p>

        <p class="card-text">{@html def.content}</p>
        <h2 class="card-title">Example</h2>
        <p class="card-text">{@html def.example}</p>

        <div class="ml-auto flex gap-x-6 mt-2">
          <div class="flex items-center gap-x-1">
            <p>{def.rating.up}</p>
            <Fa icon={faThumbsUp} size="2x" />
          </div>
          <div class="flex items-center gap-x-1">
            <p>{def.rating.down}</p>
            <Fa icon={faThumbsDown} size="2x" />
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
