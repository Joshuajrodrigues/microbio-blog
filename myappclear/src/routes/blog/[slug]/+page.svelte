<script lang="ts">
  import BackButton from "$lib/components/BackButton.svelte";

  interface Idata {
    content: ConstructorOfATypedSvelteComponent;
    title: string;
    date: string;
  }
  export let data: Idata;
</script>

<BackButton/>
<h1>{data.title}</h1>
<p>Published: {data.date}</p>
<svelte:component this={data.content} />
<BackButton/>
