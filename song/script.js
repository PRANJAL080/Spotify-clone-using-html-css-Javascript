console.log("Welcome to Pranjal's Spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songIteams = Array.from(document.getElementsByClassName('songItem'));



let songs=[
    {songName:"Warriyo - Mortals (feat Laura Brehm)", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Cielo -Huma-Huma", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"Deaf KEV Invincible", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"My heart", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"Janji Heros Tonight feat Johnning ", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:" Rabba Salam-e-Ishq", filePath:"songs/2.mp3", coverPath:"covers/6.jpg"},
    {songName:" Instrumental Salam-e-Ishq", filePath:"songs/2.mp3", coverPath:"covers/7.jpg"},
    

]

songIteams.forEach((element, i)=>{

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
    



})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;


    }
})


//Listen to event 
audioElement.addEventListener('timeupdate', ()=>{
    

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value = progess;


})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })

    
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        index = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/${index}.mp3'
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        

    })

    
})


