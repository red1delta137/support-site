<script lang="ts">
  import { Navbar, NavBrand } from "flowbite-svelte";
  import { base } from "$app/paths";

  let { data } = $props();
  const { policy } = data;
</script>

<svelte:head>
  <title>Privacy Policy — {policy.appName}</title>
</svelte:head>

<div class="sticky top-0 z-50">
  <Navbar fluid class="bg-blue-400 border-b border-blue-500 shadow-sm">
    <NavBrand href="{base}/">
      <div class="me-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm">
        <span style="font-family: 'Space Grotesk', sans-serif;" class="text-sm font-bold text-blue-400">DF</span>
      </div>
      <span class="self-center text-xl font-semibold whitespace-nowrap text-white">David Fletcher</span>
    </NavBrand>
  </Navbar>
</div>

<div class="max-w-2xl mx-auto px-8 py-12 text-blue-300 text-sm leading-relaxed space-y-6">
  <div>
    <h1 class="text-3xl font-bold text-blue-400">Privacy Policy for {policy.appName}</h1>
    <p class="mt-1">Effective Date: {policy.effectiveDate}</p>
  </div>

  <p>{policy.intro}</p>

  {#each policy.sections as section}
    <section class="space-y-2">
      <h2 class="text-lg font-semibold text-blue-400">{section.heading}</h2>
      {#each section.content as block}
        {#if block.type === 'paragraph'}
          <p>{block.text}</p>
        {:else if block.type === 'bullets'}
          <ul class="list-disc list-inside space-y-2 pl-2">
            {#each block.items as item}
              <li>{item}</li>
            {/each}
          </ul>
        {/if}
      {/each}
    </section>
  {/each}
</div>
