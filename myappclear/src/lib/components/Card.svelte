<script lang="ts">
  export let post: import("$lib/utils").MarkDownType;
</script>

<a href={post.path}>
  <div class="card">
    <img src="./microbeDefault.jpg" alt="microbe" class="img" />
    <div class="title">
      <span> {post.metadata.title} </span>
    </div>
    <div class="blurb">
      {post.metadata.blurb}
      <div class="read-more">Read more</div>
    </div>
  </div>
</a>

<style>
  .card {
    border: 1px solid rgb(32, 49, 38);
    margin: 12px;
    min-height: 100px;
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
  .read-more {
    margin-top: 10px;
    border-top: 1px dotted rgb(32, 49, 38);
  }
  hr {
    margin: 0;
  }
  .img {
    grid-area: img;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .title {
    grid-area: title;
    text-align: center;
    font-size: larger;
    font-weight: bold;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    padding: 5px;
  }
  .blurb {
    grid-area: blurb;
    border-left: 1px solid black;
    text-align: center;
    padding: 8px;
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
    .read-more {
      margin-top: 30px;
      border-top: 2px dotted rgb(32, 49, 38);
    }
  }
</style>
