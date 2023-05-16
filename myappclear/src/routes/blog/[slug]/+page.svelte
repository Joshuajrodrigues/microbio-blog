<script lang="ts">
 

    interface Idata{
        content:ConstructorOfATypedSvelteComponent
        title:string
        date:string
    }
    export let data:Idata;
</script>

<h1>{data.title}</h1>
<p>Published: {data.date}</p>
<svelte:component this={data.content} />