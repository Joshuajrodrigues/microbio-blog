<a href="#">
    <div class="card">
        <img src="./microbeDefault.jpg" alt="microbe" class="img" />
        <div class="title">
            <span> The study on Psudeonomas Aguearus </span>
            
            <hr />
        </div>
  <div class="blurb">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, magnam.</div>
</div>
</a>

<style>
  .card {
    border: 1px solid rgb(32, 49, 38);
    margin: 32px;
    min-height: 100px;
    display: grid;
    grid-template:
      "img title"1fr
      "img blurb"2fr
       ;
       grid-template-columns: 1fr 2fr;
  }
  hr{
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
    font-size: 12px;
    font-weight: bold;
  }
  .blurb {
    grid-area: blurb;
    font-size: 12px;
    text-align: center;
    padding: 8px;
  }
  a{
    all: unset;
    cursor: pointer;
  }
</style>
