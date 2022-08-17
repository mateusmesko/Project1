fetch("db.json")
  .then(response=>response.json())
  .then(data=>{
    
  data.posts.forEach(function (dados){  
    console.log(dados.comments)
    document.body.innerHTML+=`<h1>começo</h1>`;

    dados.comments.forEach(function(dados){
      console.log(dados)
      document.body.innerHTML+=
      `<h3>texto</h3> <audio controls id="player" >
        <source src="./Audio1.mp3">
      </audio>`;
    })
    document.body.innerHTML+=`<h1>Fim</h1>`;
  })
});

var player = document.getElementById("player");
let progress = document.getElementById("progress");
let playbtn = document.getElementById("playbtn");

var playpause = function () {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
}

