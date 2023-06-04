<script>
  import WindowCard from "$lib/components/WindowCard.svelte";
  import Card from "../lib/components/Card.svelte";
  export let data;
</script>

<section>
   <WindowCard post={data.posts.at(-1)} />
</section>

<section>
  <h2>All posts</h2>
  {#each data.posts as post}
    <Card post={post} />
  {/each}
</section>

<style>
 @media only screen and (min-width: 768px) {
  /* For ipad: */
  h2{
    font-size: 28px;
    margin: 34px;
  }

}
</style>
