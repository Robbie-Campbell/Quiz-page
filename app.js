const song = document.querySelector(".song");
const revealLetter = document.querySelector(".reveal");
const output = document.querySelector(".append");
const input = document.querySelector(".input-word");
const start = document.querySelector(".start");
const title = document.querySelector(".title");
let Stringletters = "";
let i = 0;

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
    revealLetter.addEventListener("click", ()=>{
            output.classList.add("appear");
            output.append(Stringletters[i]);
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
            if(Stringletters.length == i)
            {
                revealLetter.classList.add("disabled");
            }
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