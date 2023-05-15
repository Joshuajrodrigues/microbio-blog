<script>
  import GiMicroscope from "svelte-icons/gi/GiMicroscope.svelte";
  import TiThMenuOutline from "svelte-icons/ti/TiThMenuOutline.svelte";
  import IoIosCloseCircleOutline from "svelte-icons/io/IoIosCloseCircleOutline.svelte";
  import IoMdClose from 'svelte-icons/io/IoMdClose.svelte'
  let isMenuOpen = false;
</script>

<header>
  <div class="icon">
    <GiMicroscope />
  </div>
  <h1>Microbee</h1>
  <div on:keydown={()=>isMenuOpen = !isMenuOpen} on:click={()=>isMenuOpen = !isMenuOpen} class="menu">
    {#if isMenuOpen}
    <IoMdClose/>
    {:else}
    <TiThMenuOutline />
    {/if}
  </div>
</header>

<slot />

<footer>
  <span>All rights reserved 2023-24</span>
  <span>Contact: test@mail.com</span>
</footer>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,400&display=swap");
  :global(body) {
    font-family: "Poppins", sans-serif;
    background-color: rgb(236, 243, 237);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    color: rgb(32, 49, 38);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-around;

    border-bottom: 2px solid rgb(32, 49, 38);
  }
  footer {
    display: flex;

    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-top: 2px solid rgb(32, 49, 38);
    position: static;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .icon {
    color: rgb(32, 49, 38);
    width: 32px;
    height: 32px;
  }
  .menu {
    color: rgb(32, 49, 38);
    width: 32px;
    height: 32px;
  }
</style>
