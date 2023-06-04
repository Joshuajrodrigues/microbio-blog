<script>
  import IoMdClose from "svelte-icons/io/IoMdClose.svelte";
  import { isMenuOpen } from "../stores/menuStore";
  import TiHomeOutline from "svelte-icons/ti/TiHomeOutline.svelte";
  import TiInfoLargeOutline from "svelte-icons/ti/TiInfoLargeOutline.svelte";
  import TiPhoneOutline from "svelte-icons/ti/TiPhoneOutline.svelte";
  const handleMenu = () => {
    isMenuOpen.update((current) => !current);
  };
</script>

<div class:hidden={!$isMenuOpen} class="modal">
  <div class="modal__menu">
    <div class="modal__close">
      <span on:keydown={handleMenu} on:click={handleMenu} class="icon">
        <IoMdClose />
      </span>
    </div>
    <a on:click={handleMenu} href="/">
      <h2 class="modal__links">
        <div class="modal-icon">
          <TiHomeOutline />
        </div>
        Home
      </h2>
    </a>
    <a on:click={handleMenu} href="/about">
      <h2 class="modal__links">
        <div class="modal-icon">
          <TiInfoLargeOutline />
        </div>
        About
      </h2>
    </a>
    <a on:click={handleMenu} href="/contact">
      <h2 class="modal__links">
        <div class="modal-icon">
          <TiPhoneOutline />
        </div>
        Contact
      </h2>
    </a>
  </div>
</div>

<style>
  .hidden {
    display: none;
  }
  .modal {
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: auto;
  }
  .modal__menu {
    background-color: var(--main-bg-color);
    max-width: 600px;
    border: 5px solid rgb(32, 49, 38);
    width: 60%;
    height: 50%;
    padding: 20px;
    margin: 40% auto;
    text-align: left;
    display: flex;
    flex-direction: column;
  }
  a {
    all: unset;
    margin: 0;
    cursor: pointer;
  }
  a:focus {
    border-bottom: 1px dotted var(--secondary-color);
  }
  a:hover {
    border-bottom: 1px dotted var(--secondary-color);
  }
  .modal__links {
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  }
  .modal__close {
    position: relative;
    margin-bottom: 32px;
  }
  .icon {
    display: inline-block;
    color: rgb(32, 49, 38);
    width: 32px;
    height: 32px;
    position: absolute;
    right: 12px;
    cursor: pointer;
  }
  a:hover > .modal__links {
    text-decoration: underline;
  }
  .modal__links .modal-icon {
    margin: 5px;
    width: 24px;
  }
</style>
