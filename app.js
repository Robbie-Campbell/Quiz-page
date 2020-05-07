const song = document.querySelector(".song");
const revealLetter = document.querySelector(".reveal");
const output = document.querySelector(".output");
const input = document.querySelector(".input-word");
const start = document.querySelector(".start");
const title = document.querySelector(".title");
const answer = document.querySelector(".answer");
let Stringletters = "";
let i = 0;

function play(){
    let audio = new Audio("./hitmarker_2 (1).mp3");
    audio.play();
}

function letterAdd(){
    output.classList.add("appear");
        let words = Stringletters.split(" ")
            output.append(words[i].charAt(0) + "\n");
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
            if(words.length == i)
            {
                revealLetter.classList.add("disabled");
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
        if(e.keyCode == 13 ){
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
        output.textContent = "First letters: ";
        revealLetter.classList.remove("disabled");
        document.querySelector(".answerText").textContent = "Answer: ";
        i = 0;
    })
}

function revealAnswer()
{
    answer.addEventListener("click", ()=>{
        document.querySelector(".answerText").textContent = Stringletters + "!";
    })
}

getFirstLetters();
startNewLyrics();
revealAnswer();