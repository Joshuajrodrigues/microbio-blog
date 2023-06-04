<script>

import WindowCard from "$lib/components/WindowCard.svelte";
  import Card from "../lib/components/Card.svelte";
  export let data;
</script>

<main class="main">

  <section class="main__featured">
    <WindowCard post={data.posts.at(-1)} />
  </section>
 
  
  <section class="main__all">
    <h2>All posts</h2>
    {#each data.posts as post}
    <Card post={post} />
    {/each}
  </section>
  
</main>
<style>
  .main__featured{
    margin-bottom: 20%;
  }
 @media only screen and (min-width: 768px) {
  /* For ipad: */
  h2{
    font-size: 28px;
    margin: 34px;
  }

}
@media only screen and (min-width: 2560px) {
  .main__featured{
    margin-bottom: 50%;
  }

}

</style>
