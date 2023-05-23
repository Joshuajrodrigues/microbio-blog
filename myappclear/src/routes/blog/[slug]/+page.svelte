<script lang="ts">
  import BackButton from "$lib/components/BackButton.svelte";

  interface Idata {
    content: ConstructorOfATypedSvelteComponent;
    title: string;
    date: string;
    image_1?:string
  }
  export let data: Idata;
</script>

<BackButton/>
<h1>{data.title}</h1>
<p>Published: {data.date}</p>

<img src={data?.image_1 || "/microbeDefault.jpg"} alt="microbe" class="img" />
<svelte:component this={data.content} />

<style>
  img{
    width: 100%;
    max-height: 200px;
  }
</style>