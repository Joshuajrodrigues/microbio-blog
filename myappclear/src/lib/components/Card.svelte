<script lang="ts">
  export let post: import("$lib/utils").MarkDownType;
</script>

<a href={post.path}>
  <div class="card">
    <img
      src={post.metadata?.image_1 || "./microbeDefault.jpg"}
      alt="microbe"
      class="img"
    />
    <div class="title">
      <span> {post.metadata.title} </span>
    </div>
    <div class="blurb">
      {post.metadata.blurb}
     
    </div>
  </div>
</a>

<style>
  .card {

    margin-bottom: 12px;
    height: 130px;
    display: grid;
    grid-template:
      "img title" 1fr
      "img blurb" 2fr;
    grid-template-columns: 1fr 2fr;
    transition: transform 0.3s ease;
    font-size: 12px;
  
  }
  .card:hover {
    transform: scale(1.05);
  }
  .card:active {
    transform: scale(1.05);
  }


  .img {
    grid-area: img;
    width: 100%;
    height:130px;
    object-fit:cover;
  }
  .title {
    grid-area: title;
    text-align: left;
    font-size: 18px;
    font-weight: bold;

    padding: 5px;
    /* white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; */
  }
  .blurb {
    grid-area: blurb;
    text-align: left;
    padding-left: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  a {
    all: unset;
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    /* For ipad: */
    .card {
      font-size: 15px;
      margin: 34px;
      height: 200px;
    }
    .title {
      font-size: larger;
    }
 
  }
</style>
