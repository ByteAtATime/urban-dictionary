<script lang="ts">
  import Fa from "svelte-fa";
  import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
  import {goto} from "$app/navigation";

  let searchQuery = ''

  const search = () => {
    goto(`/define/${searchQuery}`);

    searchQuery = "";
  }
</script>

<form on:submit|preventDefault={search} class="flex items-center justify-center gap-x-4 pt-2 pb-2 mb-4 bg-base-200">
  <input class="input input-bordered !outline-none focus:border-primary" bind:value={searchQuery} />

  <button class="bg-secondary hover:bg-secondary-focus transition-colors text-secondary-content p-2 rounded-lg">
    <Fa icon={faMagnifyingGlass} size="lg" />
  </button>
</form>
