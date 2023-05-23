
<script lang="ts">
    export let post:import("$lib/utils").MarkDownType
  </script>
  
  
  
  <a href={post.path}>
    <div class="card">
      
      <img src="./microbeDefault.jpg" alt="microbe" class="img" />
      <div class="title">
        <span> {post.metadata.title} </span>
      
      </div>
      <div class="blurb">
        {post.metadata.blurb}
        <div class="read-more">
          Read more
        </div>
      </div>
    </div>
  </a>
  
  <style>
    .card {
      border: 1px solid rgb(32, 49, 38);
      margin: 12px;
      height: 260px;
      display: grid;
      grid-template:
        "img img" 2fr
        "title title" 0.2fr
        "blurb blurb" 1fr;
      transition: transform 0.3s ease;
      font-size: 12px;
    }
    .card:hover {
      transform: scale(1.05);
    }
    .card:active {
      transform: scale(1.05);
    }
    .read-more{
      margin-top: 10px;
      border-top: 1px dotted rgb(32, 49, 38);
  
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
      font-weight: bold;
      font-size: larger;
      border-bottom: 1px solid black;
      border-top: 1px solid black;
      padding: 5px;
    }
    .blurb {
      grid-area: blurb;
      text-align: center;
      padding: 8px;
    }
    a {
      all: unset;
      cursor: pointer;
    }
  
  @media only screen and (min-width: 438px){
    .read-more{
      margin-top: 20px;
     
    }
  }
    
  @media only screen and (min-width: 768px) {
    /* For ipad: */
    .card{
      font-size: 15px;
      margin: 34px;
      height: 500px;
    }
    .title {
     font-size: larger;
    }
    .read-more{
      margin-top: 60px;
      border-top: 2px dotted rgb(32, 49, 38);
    }
  }
  </style>