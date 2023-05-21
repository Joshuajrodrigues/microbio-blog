<script>
  import GiMicroscope from "svelte-icons/gi/GiMicroscope.svelte";
  import TiThMenuOutline from "svelte-icons/ti/TiThMenuOutline.svelte";
  import IoMdClose from "svelte-icons/io/IoMdClose.svelte";
  import {isMenuOpen} from '../stores/menuStore'

  const handleMenu=()=>{
    isMenuOpen.update((current)=>!current)
  }

</script>

<header>
  <div class="icon">
    <GiMicroscope />
  </div>
  <h1>Microbee</h1>
  <div
    on:keydown={handleMenu}
    on:click={handleMenu}
    class="menu"
  >
    {#if $isMenuOpen}
      <IoMdClose />
    {:else}
      <TiThMenuOutline />
    {/if}
  </div>
</header>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 2px solid rgb(32, 49, 38);
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
    cursor: pointer;
  }
</style>
