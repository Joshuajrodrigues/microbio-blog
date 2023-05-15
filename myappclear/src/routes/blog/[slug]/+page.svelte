<script lang="ts">
    interface Idata{
        title:String,
        content:String
    }
    export let data:Idata;
</script>

<h1>{data.title}</h1>
<div>{@html data.content}</div>