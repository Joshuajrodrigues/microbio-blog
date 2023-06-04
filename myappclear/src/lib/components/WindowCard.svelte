
<script lang="ts">
    export let post:import("$lib/utils").MarkDownType
  </script>
  
  
  
  <a href={post.path}>
    <div class="card">
      
      <img src={post.metadata?.image_1 || "./microbeDefault.jpg"} alt="microbe" class="img" />
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
   
      height: 700px;
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
      letter-spacing: 3px;
      text-align:center;
      background-color: orangered;
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
      font-size:16px;
      text-align: left;
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