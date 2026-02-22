<script lang="ts">
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Card,
    Heading,
    P,
    Button,
  } from "flowbite-svelte";
  import Apps from "$lib/components/Apps.svelte";
  import About from "$lib/components/About.svelte";
  import Contact from "$lib/components/Contact.svelte";

  let navbar: HTMLDivElement;

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = navbar.offsetHeight;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
</script>

<div class="sticky top-0 z-50" bind:this={navbar}>
  <Navbar fluid class="bg-blue-400 border-b border-blue-500 shadow-sm">
    <NavBrand href="/">
      <div class="me-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm">
        <span style="font-family: 'Space Grotesk', sans-serif;" class="text-sm font-bold text-blue-400">DF</span>
      </div>
      <span class="self-center text-xl font-semibold whitespace-nowrap text-white">David Fletcher</span>
    </NavBrand>
    <NavHamburger />
    <NavUl>
      <NavLi
        href="#apps"
        class="!text-white"
        onclick={(e) => {
          e.preventDefault();
          scrollTo("apps");
        }}>Apps</NavLi
      >
      <NavLi
        href="#about"
        class="!text-white"
        onclick={(e) => {
          e.preventDefault();
          scrollTo("about");
        }}>About</NavLi
      >
      <NavLi
        href="#contact"
        class="!text-white"
        onclick={(e) => {
          e.preventDefault();
          scrollTo("contact");
        }}>Contact</NavLi
      >
    </NavUl>
  </Navbar>
</div>

<Apps />
<About />
<Contact />
