const music=document.querySelector("audio");
const img=document.querySelector("img");
const play=document.getElementById("play");
const title=document.getElementById("title");
const artist=document.getElementById("artist");
const previous=document.getElementById("previous");
const next=document.getElementById("next");
const songs=[
   {
       name:"hame_tumse_pyar",
        title:"Heart Beat ",
        artist:"Udit Naryan",
    },
    {
    name:"mere_sapno_ki_rani",
    title:"feeling Good",
    artist:"Kisore Da",
},
{
    name:"sawan_aaya_hai",
    title:"Barsat",
    artist:"Kumar sonu",
},
{
    name:"tu_meri_zindagi_he",
    title:"Love Song",
    artist:"Udit Narayan",
},];
let isPlay=false;
//for play function
const playMusic= () =>{
    isPlay=true
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime");
};
//for pause function
const pauseMusic= () => {
    isPlay=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
};
play.addEventListener("click",()=>{
    isPlay ? pauseMusic() : playMusic();
});
const loadSong=(songs) =>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src=""+songs.name+".mp3";
    img.src=""+songs.name +".jpg";
};
let songIndex=0;
 const nextSong=() =>{
     songIndex=(songIndex+1)%songs.length;
     loadSong(songs[songIndex]);
     playMusic();
 };
 const previousSong=() =>{
     songIndex=(songIndex -1 + songs.length)%songs.length;
     loadSong(songs[songIndex]);
     playMusic();
 };
next.addEventListener("click",nextSong);
previous.addEventListener("click",previousSong);
