<script>
  import GiMicroscope from "svelte-icons/gi/GiMicroscope.svelte";
  import TiThMenuOutline from "svelte-icons/ti/TiThMenuOutline.svelte";
  import TiHomeOutline from "svelte-icons/ti/TiHomeOutline.svelte";
  import TiInfoLargeOutline from "svelte-icons/ti/TiInfoLargeOutline.svelte";
  import TiPhoneOutline from "svelte-icons/ti/TiPhoneOutline.svelte";
  import { isMenuOpen } from "../stores/menuStore";

  const handleMenu = () => {
    isMenuOpen.update((current) => !current);
  };
</script>

<header>
  <div class="header-title">
    <div class="icon">
      <GiMicroscope />
    </div>
    <a href="/">
      <h1>Microbee</h1>
    </a>
  </div>
  <div on:keydown={handleMenu} on:click={handleMenu} class="menu">
    {#if !$isMenuOpen}
      <TiThMenuOutline />
    {/if}
  </div>
  <div class="wide-menu">
    <a href="/">
      <h2 class="modal__links">
        <div class="icon">
          <TiHomeOutline />
        </div>
        Home
      </h2>
    </a>
    <a href="/about">
      <h2 class="modal__links">
        <div class="icon">
          <TiInfoLargeOutline />
        </div>
        About
      </h2>
    </a>
    <a href="/contact">
      <h2 class="modal__links">
        <div class="icon">
          <TiPhoneOutline />
        </div>
        Contact
      </h2>
    </a>
  </div>
</header>

<style>
  a {
    all: unset;
    cursor: pointer;
  }
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
    margin-right: 10px;
  }
  .menu {
    color: rgb(32, 49, 38);
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
  .wide-menu {
    display: none;
  }
  .header-title {
    display: flex;
    align-items: center;
  }
  @media only screen and (min-width: 768px) {
    /* For ipad: */
    h1 {
      font-size: 40px;
    }
  }

  @media only screen and (min-width: 1220px) {
    .wide-menu {
      display: flex;
      width: 20vw;
      align-items: center;
      justify-content: space-between;
    }
    .modal__links {
      display: flex;
      align-items: center;
      margin-right: 10px;
    }
    .modal__links .icon{
      margin: 5px;
      width: 24px;
    }
    a:hover > .modal__links  {
      text-decoration: underline;
    }
    
    .menu {
      display: none;
    }
    header {
      justify-content: space-evenly;
    }
    .header-title {
      display: flex;
      align-items: center;
    }
    .icon {
      margin-right: 20px;
    }
  }
</style>
