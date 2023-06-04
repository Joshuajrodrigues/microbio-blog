<script>
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import MenuModal from "$lib/components/MenuModal.svelte";

</script>

<Header />
<MenuModal/>
<div class="content">
  <slot />
</div>
<Footer />

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,400&display=swap");
  :global(:root){
    --main-bg-color:rgb(236, 243, 237);
    --secondary-color:rgb(32, 49, 38)
  }
  
  :global(body) {
    font-family: "Poppins", sans-serif;
    background-color: var(--main-bg-color);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    color: var(--secondary-color);
  }

  .content{
    margin: 24px;
  }

  
</style>
