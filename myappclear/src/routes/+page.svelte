<script>
  import Card from "../lib/components/Card.svelte";
  export let data;
</script>

<section>
  <h2>Latest posts</h2>
   <Card post={data.posts[0]} />
</section>

<section>
  <h2>All posts</h2>
  {#each data.posts as post}
    <Card post={post} />
  {/each}
</section>

<style>
  h2 {
    margin-left: 32px;
  }
</style>
