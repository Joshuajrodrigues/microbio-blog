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
    gap: 12px;
    grid-template:
      "img title" 1fr
      "img blurb" 2fr;
    grid-template-columns: 1fr 2fr;
    transition: transform 0.3s ease;
    font-size: 12px;
  }
  .card:hover .title {
    text-decoration: underline;
  }
  .card:active {
    transform: scale(1.05);
  }

  .img {
    grid-area: img;
    width: 100%;
    height: 130px;
    object-fit: cover;
  }
  .title {
    grid-area: title;
    text-align: left;
    font-size: 18px;
    font-weight: bold;

    /* white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; */
  }
  .blurb {
    grid-area: blurb;
    text-align: left;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
  }
  a {
    all: unset;
    cursor: pointer;
  }
  @media only screen and (min-width: 768px) {
    .blurb {
    grid-area: blurb;
    text-align: left;
    white-space:pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
  }
  }

  @media only screen and (min-width: 1024px) {
    .card {
      font-size: 12px;
    }
    .title:hover {
      text-decoration: underline;
    }
    .blurb {
      font-size: 16px;
    }
  }
</style>
