<script lang="ts">
  export let post: import("$lib/utils").MarkDownType;
</script>

<div class="card">
  <img
    src={post.metadata?.image_1 || "./microbeDefault.jpg"}
    alt="microbe"
    class="img"
  />
  <div class="title">
    <a href={post.path}>
      <span> {post.metadata.title} </span>
    </a>
  </div>
  <div class="blurb">
    {post.metadata.blurb}
    <div class="read-more">
      <a href={post.path}> Read more </a>
    </div>
  </div>
</div>

<style>
  .card {
    height: 700px;
    display: grid;
    grid-template:
      "img img" 2fr
      "title title" 0.2fr
      "blurb blurb" 1fr;
    transition: transform 0.3s ease;
    font-size: 12px;
  }
  .read-more:hover {
    transform: scale(1.05);
  }
  .read-more:active {
    transform: scale(1.05);
  }
  .read-more {
    margin-top: 10px;
    letter-spacing: 3px;
    width: 40%;
    text-align: center;
    background-color: rgb(13, 111, 74);
    padding: 12px;
    color: #fff;
    font-weight: bold;
  }

  .img {
    grid-area: img;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .title {
    grid-area: title;
    text-align: left;
    font-weight: bold;
    font-size: 32px;
    padding: 5px;
  }
  .blurb {
    grid-area: blurb;
    font-size: 16px;
    text-align: left;
    padding: 8px;
  }
  a {
    all: unset;
    cursor: pointer;
  }

  @media only screen and (min-width: 438px) {
    .read-more {
      margin-top: 20px;
    }
  }

  @media only screen and (min-width: 1024px) {
    .card {
      display: grid;
      gap: 20px;
      grid-template:
        "img img" 6fr
        "title blurb" 1fr
        "title blurb" 1fr;
      font-size: 12px;
      height: 500px;
    }
    .title:hover {
      text-decoration: underline;
    }
  }

 
</style>
