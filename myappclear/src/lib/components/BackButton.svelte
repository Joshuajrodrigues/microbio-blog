<script>
  import TiArrowBack from "svelte-icons/ti/TiArrowBack.svelte";
</script>

<div class="back">

    <a href="/">
      <div class="icon">
        <TiArrowBack /> Back
      </div>
    </a>
</div>

<style>
  a {
    all: unset;
    cursor: pointer;
 
   
  }
 
  .icon {
    display: flex;
    align-items: center;
    color: var(--secondary-color);
    width: 64px;
    height: 32px;
  }
</style>
