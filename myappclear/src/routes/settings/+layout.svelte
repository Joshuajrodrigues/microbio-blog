<script>
       export let data;
</script>

<slot></slot>
<h2>Settings Options</h2>

<div class="submenu">
    {#each data.sections as section}
        <a href="/settings/{section.slug}">{section.title}</a>
    {/each}
</div>


