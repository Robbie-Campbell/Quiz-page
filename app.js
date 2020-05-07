const song = document.querySelector(".song");
const revealLetter = document.querySelector(".reveal");
const output = document.querySelector(".output");
const input = document.querySelector(".input-word");
const start = document.querySelector(".start");
const title = document.querySelector(".title");
let Stringletters = "";
let i = 0;

function play(){
    let audio = new Audio("./hitmarker_2 (1).mp3");
    audio.play();
}

if (Stringletters.length == 0)
{
    revealLetter.classList.add("disabled")
}
function letterAdd(){
    output.classList.add("appear");
            output.append(Stringletters[i] + "\n");
            play();
            i++;
            var seconds = 0;
            setInterval(function () {
            seconds++;
            if(seconds == 20)
            {
                output.classList.remove("appear");
                clearInterval(seconds);
                
            }
             200});
            if(Stringletters.length == i|| Stringletters.length == 0)
            {
                revealLetter.classList.add("disabled");
                Stringletters = "";
            }
}

window.onload= () =>{
    title.classList.add("titleOnLoad")
}

function getFirstLetters() 
{
    input.addEventListener("click", ()=>{
        Stringletters = song.value;
        song.value = "";
        console.log(Stringletters);
    })
    document.body.onkeyup = function(e){
        if(e.keyCode == 32 ){
            if(Stringletters.length > i)
            {
                letterAdd();
            }
        }
        else{
            return;
        }
    }
    revealLetter.addEventListener("click", ()=>{
            letterAdd();
    })
}

function startNewLyrics()
{
    start.addEventListener("click", ()=>{
        Stringletters.value = "";
        output.textContent = "";
        revealLetter.classList.remove("disabled");
        i = 0;
    })
}

getFirstLetters();
startNewLyrics();