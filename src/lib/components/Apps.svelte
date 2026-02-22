<script lang="ts">
  import { Hr } from "flowbite-svelte";
  import appIcon from "$lib/assets/app-icon.png";
</script>

<div id="apps" class="bg-white mt-12 scroll-mt-16">
  <h3 class="text-center text-blue-400 text-3xl font-bold">Apps</h3>
  <div class="flex justify-center mt-6 pb-8">
    <div
      class="w-24 h-24 rounded-2xl shadow-xl shadow-black/50 hover:scale-110 transition-transform duration-200 cursor-pointer overflow-hidden"
    >
      <img src={appIcon} alt="App icon" class="w-full h-full object-cover" />
    </div>
  </div>
  <Hr
    class="mx-auto my-4 h-1 w-3/4 rounded-sm md:w-1/2 md:my-10 lg:w-1/3"
    classes={{ bg: "bg-blue-100" }}
  />
</div>
