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
    position: absolute;
    right: 32px;
   
  }
 
  .icon {
    display: flex;
    align-items: center;
    color: rgb(0, 0, 0);
    width: 64px;
    height: 32px;
  }
</style>
