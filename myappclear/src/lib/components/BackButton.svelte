<script>
  import TiArrowBack from "svelte-icons/ti/TiArrowBack.svelte";
</script>

<a href="/">
  <div class="icon">
    <TiArrowBack /> Back
  </div>
</a>

<style>
  a {
    all: unset;
    cursor: pointer;
  }
  .icon {
    display: flex;
    align-items: center;
    color: rgb(0, 0, 0);
    width: 64px;
    height: 32px;
  }
</style>
