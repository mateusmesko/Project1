

fetch("db.json")
    .then(response=>response.json())
    .then(data=>{
    
    data.posts.forEach(function (dados){
       
        console.log(dados.comments)
        document.body.innerHTML+=`<h1>começo</h1><audio id="player" src="./Audio1.mp3"></audio>
        <div class="player">
          <div class="control">
              <i class="fas fa-play" id="playbtn"></i>
          </div>
      <div class="info">
              TheFatRat - Electrified
          <div class="bar">
              <div id="progress"></div>
          </div>
      </div>
    
      <div id="current">0:00</div>
      </div>`;

        dados.comments.forEach(function(dados){
            console.log(dados)
            document.body.innerHTML+=`
            

            
             
           
           `;
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

playbtn.addEventListener("click", playpause);

player.onplay = function () {
  playbtn.classList.remove("fa-play");
  playbtn.classList.add("fa-pause");
}

player.onpause = function () {
  playbtn.classList.add("fa-play");
  playbtn.classList.remove("fa-pause");
}

player.ontimeupdate = function () {
  let ct = player.currentTime;
  current.innerHTML = timeFormat(ct);
  //progress
  let duration = player.duration;
  prog = Math.floor((ct * 100) / duration);
  progress.style.setProperty("--progress", prog + "%");
}

function timeFormat(ct) {
  minutes = Math.floor(ct / 60);
  seconds = Math.floor(ct % 60);

  if (seconds < 10) {
    seconds = "0"+seconds;
  }

  return minutes + ":" + seconds;
}