const music = new Audio('mc-kevin.mp3');

const songs = [
    {
        id:'1',
        songName:`   Chelsea <br>
        <div class="subtitle">BR!ME</div>`,
        poster:"img/brimetimao.jpg",

    },
    {
        id:'2',
        songName:`   Escobar900 <br>
        <div class="subtitle">Mc Kevin</div>`,
        poster:"img/mckevin",

    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i) =>{
    Element.getElementsByTagName('img')[0].src = songs[i].poster;
    Element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click', () =>{
    if(music.paused || music.currentTime <=0){
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
})

let index = 0;

Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        index = e.target.id;
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
    })
})