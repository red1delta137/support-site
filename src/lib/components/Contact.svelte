<script lang="ts">
  import { Hr, Button } from "flowbite-svelte";
  import { EnvelopeSolid } from "flowbite-svelte-icons";
  let message = $state("");
  const maxChars = 4000;
  let charCount = $derived(message.length);
  let contactOptions = [
    { value: "general", name: "General" },
    { value: "bug", name: "Report a bug" },
    { value: "feature", name: "Request a feature" },
  ];
  let selectedOption = $state("");
  let mailtoHref = $derived(() => {
    const subject = contactOptions.find(o => o.value === selectedOption)?.name ?? "";
    return `mailto:fletcherappdev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  });
</script>

<div id="contact" class="scroll-mt-16">
  <h3 class="text-center text-blue-400 text-3xl font-bold">Contact Me</h3>
  <div class="px-8 max-w-2xl mx-auto mt-6">
    <p class="text-center text-blue-300 text-sm mb-4">
      Have general feedback, found a bug, or want to request a feature? Fill out
      the form below and I'll get back to you as soon as possible.
    </p>
    <select
      bind:value={selectedOption}
      autocomplete="off"
      class="w-full bg-white border border-blue-200 rounded-lg py-2.5 px-3 text-blue-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4"
    >
      <option value="" disabled selected>Select an option</option>
      {#each contactOptions as option}
        <option value={option.value}>{option.name}</option>
      {/each}
    </select>
    <div class="relative">
      <textarea
        bind:value={message}
        autocomplete="off"
        class="w-full bg-white border border-blue-200 rounded-lg p-3 text-blue-400 resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        rows="5"
        placeholder="Write your message here..."
        maxlength={maxChars}
      ></textarea>
      {#if message.length > 0}
        <button
          onclick={() => (message = "")}
          class="absolute top-2 right-2 text-blue-300 hover:text-blue-400"
          aria-label="Clear message"
        >
          ✕
        </button>
      {/if}
    </div>
    <p class="text-right text-sm text-blue-300 mt-1 mb-4">
      {charCount} / {maxChars}
    </p>
<Button
      href={mailtoHref()}
      size="md"
      class="mt-4 w-full"
      ><EnvelopeSolid class="me-2 h-5 w-5" />Contact Me</Button
    >
  </div>
  <Hr
    class="mx-auto my-4 h-1 w-3/4 rounded-sm md:w-1/2 md:my-10 lg:w-1/3"
    classes={{ bg: "bg-blue-100" }}
  />
</div>

<style>
  :global(#contact button) {
    cursor: pointer;
  }
</style>
